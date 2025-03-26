// -------- global variables --------
let globalSP = 0;
let skillTreeArr = [];
const skillMap = new Map(); // Eg: [{'Physical Guard', physicalGuard}, {..., ...}, ...]

const treeSPElements = Array.from(document.getElementsByClassName('treeSP'));
const globalSPSpan = document.getElementById('globalSPSpan');

const skillCells = Array.from(document.getElementsByClassName('skill'));
const resetAllBtn = document.getElementById('resetAllBtn');
// -------- classes --------
// The Skill Tree (Magic, Blade, Shoot, Hunter...)
class Tree {
  constructor(name) {
    this.name = name;
    this.skills = [];
    skillTreeArr.push(this);

    // Find the corresponding treeSPElement
    this.treeSPElement = treeSPElements.find(
      (element) => element.getAttribute('data-tree-name') === this.name
    );
  }

  addSkill(skill) {
    this.skills.push(skill);
  }

  // Reset all skill levels to zero
  resetSkillLevels() {
    this.skills.forEach((skill) => {
      skill.level = 0;
    });
  }

  getTotalLevels() {
    return this.skills.reduce((total, skill) => total + skill.level, 0);
  }

  /**
   * Initializes the skill tree by adding skills defined in the provided skillsData array.
   * Each skill is created based on its name and prerequisite, which is retrieved from skillMap.
   *
   * @param {Array} skillsData - An array of skill objects, each containing a name and an optional prerequisite.
   * @param {Array} skillCells - A pre-fetched array of skill cell elements from the DOM.
   */
  initializeSkillTree(skillsData, skillCells) {
    skillsData.forEach((skillData) => {
      // String of skillData.prereq to get prereq's skill obj from skillMap
      const prereqSkill = skillData.prereq
        ? skillMap.get(skillData.prereq)
        : null;

      const skillCell = skillCells.find(
        (cell) =>
          cell.querySelector('.skillName').textContent === skillData.name
      );

      const skill = new Skill(skillData.name, 0, prereqSkill, this, skillCell);
      this.addSkill(skill);
    });
  }

  /**
   * Update the total levels for the tree total SP on HTML. The total SP of tree is calculated upon calling this function.
   */
  updateTreeSP() {
    this.treeSPElement.textContent = this.getTotalLevels();
  }
}

class Skill {
  constructor(name, level = 0, prereq = null, tree, skillCell) {
    this.name = name;
    this.level = level; // Skill level (0-10)
    this.prereq = prereq; // Prerequisite skill
    this.tree = tree; // The skill tree it belongs to
    this.children = []; // Dependent skills (immediate descendents). One skill can be a prereq to multiple skills
    if (prereq) {
      prereq.addChild(this); // Add this skill as a child to its prerequisite
    }
    skillMap.set(this.name, this);

    this.skillCell = skillCell; // Corresponding skill cell element
  }

  get prereqCell() {
    return this.prereq ? this.prereq.skillCell : null;
  }

  addChild(skill) {
    this.children.push(skill);
  }

  increaseLevel() {
    if (this.level < 10) {
      this.level += 1;
      this.setPrerequisiteLevels();
    }
  }

  decreaseLevel() {
    if (this.level > 0) {
      this.level -= 1;
      // If the skill's level drops below 5, reset children
      if (this.level < 5) {
        this.resetChildren();
      }
    }
  }

  isUnlocked() {
    return this.prereq ? this.prereq.level >= 5 : true;
  }

  setPrerequisiteLevels() {
    if (this.prereq) {
      if (this.prereq.level < 5) {
        this.prereq.level = 5;
      }
      // Recursively reset all of the prereq's prereqs
      this.prereq.setPrerequisiteLevels();
    }
  }

  highlightPrereqs(highlight) {
    const prereqCell = this.prereqCell;
    if (prereqCell) {
      if (highlight) {
        prereqCell.classList.add('bg-pink-100');
      } else {
        prereqCell.classList.remove('bg-pink-100');
      }
      if (this.prereq) {
        // Recursively highlight prerequisites
        this.prereq.highlightPrereqs(highlight);
      }
    }
  }

  resetChildren() {
    this.children.forEach((child) => {
      child.level = 0;
      // Recursively reset all of the child's children
      child.resetChildren();
    });
  }

  setLevelZero() {
    this.level = 0;
    this.resetChildren();
  }

  setLevelTen() {
    this.level = 10;
    this.setPrerequisiteLevels();
  }
}

// ---------- Initialize skill trees ----------
const skillTrees = [
  { name: 'Guard', data: guardSkillsData },
  { name: 'Knight', data: knightSkillsData },
  { name: 'Blade', data: bladeSkillsData },
  { name: 'Martial', data: martialSkillsData },
  { name: 'Shot', data: shotSkillsData },
  { name: 'Magic', data: magicSkillsData },
  { name: 'Mononofu', data: mononofuSkillsData },
  { name: 'Priest', data: priestSkillsData },
  { name: 'Dual Sword', data: dualSwordSkillsData },
  { name: 'Shield', data: shieldSkillsData },
  { name: 'Crusher', data: crusherSkillsData },
  { name: 'Bare Hand', data: bareHandSkillsData },
  { name: 'Dark Power', data: darkPowerSkillsData },
  { name: 'Dagger', data: daggerSkillsData },
  { name: 'Magic Blade', data: magicBladeSkillsData },
  { name: 'Halberd', data: halberdSkillsData },
  { name: 'Sprite', data: spriteSkillsData },
  { name: 'Wizard', data: wizardSkillsData },
  { name: 'Smith', data: smithSkillsData },
  { name: 'Process Materials', data: processMaterialsSkillsData },
  { name: 'Alchemy', data: alchemySkillsData },
];

skillTrees.forEach(({ name, data }) => {
  const tree = new Tree(`${name} Skill Tree`);
  tree.initializeSkillTree(data, skillCells);
});

// ---------- setup & util functions ----------
const skillTreeElements = Array.from(
  document.getElementsByClassName('skillTreeMainDiv')
);
skillTreeElements.forEach((element) => {
  // Prevent the context menu from appearing on right-click
  element.addEventListener('contextmenu', function (event) {
    event.preventDefault();
  });

  // Prevent text selection on double-click
  element.addEventListener('selectstart', function (event) {
    event.preventDefault();
  });
});

resetAllBtn.addEventListener('click', () => {
  resetAllSkills();
  updateSkillDisplay();
});

// Skills highlighting
mainContentDiv.addEventListener('mouseover', (event) => {
  const cell = event.target.closest('.skill');
  if (!cell) return;

  const skillName = cell.querySelector('.skillName').textContent;
  const skill = skillMap.get(skillName);
  if (!skill) return;

  cell.classList.add('bg-pink-100');
  skill.highlightPrereqs(true);
});

mainContentDiv.addEventListener('mouseout', (event) => {
  const cell = event.target.closest('.skill');
  if (!cell) return;

  const skillName = cell.querySelector('.skillName').textContent;
  const skill = skillMap.get(skillName);
  if (!skill) return;

  cell.classList.remove('bg-pink-100');
  skill.highlightPrereqs(false);
});

// ---------- SP calculations and updates ----------

// This function updates all skills in all trees, unlike updateSkillLevelInHtmlRecursive();
function updateSkillDisplay() {
  skillTreeArr.forEach((tree) => {
    tree.skills.forEach((skill) => {
      // Find the HTML element corresponding to the skill name
      const skillCell = skill.skillCell;

      if (skillCell) {
        // Find the <p> element that displays the skill level
        const skillLevel = skillCell.getElementsByClassName('skillLevel')[0];
        skillLevel.textContent = skill.level;
      }
    });
    tree.updateTreeSP();
  });
  updateGlobalSP();
}

function updateGlobalSP() {
  globalSP = 0;
  skillTreeArr.forEach((tree) => {
    globalSP += tree.getTotalLevels();
  });

  globalSPSpan.textContent = `Total SP: ${globalSP}`;
}

function resetAllSkills() {
  skillTreeArr.forEach((tree) => {
    tree.resetSkillLevels();
    tree.updateTreeSP();
  });
  updateGlobalSP();
}

// --- Calculations and Local Update of a Tree ---
/**
 * Breadth First Search traversal in both directions at the same time.
 *
 * @param {Skill} skill - The starting skill to update, triggering updates for its prerequisites and children.
 */
// Adapted from https://ellen-park.medium.com/implementing-breadth-first-search-in-javascript-49af8cfad763 (This is for tree)
// and https://hackernoon.com/a-beginners-guide-to-bfs-and-dfs-in-javascript (This is for graph)
function updateSkillLevelInHtmlBFS(skill) {
  function updateSkillLevelInHtml(skill) {
    skill.skillCell.querySelector('.skillLevel').textContent = skill.level;
  }

  const queue = [skill];
  const visited = new Set();

  while (queue.length > 0) {
    const currentSkill = queue.shift();
    if (visited.has(currentSkill.name)) continue;
    visited.add(currentSkill.name);

    updateSkillLevelInHtml(currentSkill);

    // Add prerequisites and children (the neighbours) to the queue
    if (currentSkill.prereq && !visited.has(currentSkill.prereq.name)) {
      queue.push(currentSkill.prereq);
    }
    currentSkill.children.forEach((child) => {
      if (!visited.has(child.name)) {
        queue.push(child);
      }
    });
  }
}

mainContentDiv.addEventListener('mousedown', (event) => {
  const cell = event.target.closest('.skill');
  if (!cell) return;

  const skillName = cell.getElementsByClassName('skillName')[0].textContent;
  const skill = skillMap.get(skillName);

  const isCtrlPressed = event.ctrlKey;
  const isRightClick = event.button === 2;

  if (isRightClick && !isCtrlPressed) {
    skill.decreaseLevel();
  } else if (isRightClick && isCtrlPressed) {
    skill.setLevelZero();
  } else if (!isRightClick && !isCtrlPressed) {
    skill.increaseLevel();
  } else if (!isRightClick && isCtrlPressed) {
    skill.setLevelTen();
  }

  updateSkillLevelInHtmlBFS(skill);

  // Update current Tree SP
  skill.tree.updateTreeSP();
  updateGlobalSP();
});

mainContentDiv.addEventListener('long-press', (event) => {
  const cell = event.target.closest('.skill');
  if (!cell) return;

  const skillName = cell.getElementsByClassName('skillName')[0].textContent;
  const skill = skillMap.get(skillName);

  skill.setLevelZero();
  updateSkillLevelInHtmlBFS(skill);
  skill.tree.updateTreeSP();
  updateGlobalSP();
});

// --- Unique Case: Process Materials dummies update ---
const processMaterialsDummies = Array.from(
  document.getElementsByClassName('process-materials-dummy')
);
const processMaterialsReal = skillMap.get('Process Materials');

function updateProcessMaterialsDummies() {
  processMaterialsDummies.forEach((dummy) => {
    const dummyLevel = dummy.querySelector(
      '.process-materials-dummy-skillLevel'
    );
    if (dummyLevel) {
      dummyLevel.textContent = processMaterialsReal.level;
    }
  });
}

// Observe changes to the skill level text content
const observer = new MutationObserver(updateProcessMaterialsDummies);
const processMaterialsLevel =
  processMaterialsReal.skillCell.querySelector('.skillLevel');
if (processMaterialsLevel) {
  observer.observe(processMaterialsLevel, { childList: true, subtree: false });
}
