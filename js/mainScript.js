// -------- global variables --------
let globalSP = 0;
let skillTreeArr = [];
const skillMap = new Map(); // Eg: [{'Physical Guard', physicalGuard}, {..., ...}, ...]

const treeSPElements = Array.from(document.getElementsByClassName('treeSP'));
const globalSPSpan = document.getElementById('globalSPSpan');
const skillTreeElements = Array.from(
  document.getElementsByClassName('skillTreeMainDiv')
);
const skillCells = Array.from(document.getElementsByClassName('skill'));
const resetAllBtn = document.getElementById('resetAllBtn');
// -------- classes --------
// The Skill Tree (Magic, Blade, Shoot, Hunter...)
class Tree {
  constructor(name) {
    this.name = name;
    this.skills = [];
    skillTreeArr.push(this);
  }

  addSkill(skill) {
    this.skills.push(skill);
  }

  // Reset all skill levels to zero
  resetSkillLevels() {
    // Loop through all skills and reset their level to 0
    this.skills.forEach((skill) => {
      skill.level = 0; // Reset each skill's level
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
   */
  initializeSkillTree(skillsData) {
    skillsData.forEach((skillData) => {
      // String of skillData.prereq to get prereq's skill obj from skillMap
      const prereqSkill = skillData.prereq
        ? skillMap.get(skillData.prereq)
        : null;
      const skill = new Skill(skillData.name, 0, prereqSkill, this);
      this.addSkill(skill);
    });
  }
}

class Skill {
  constructor(name, level = 0, prereq = null, tree) {
    this.name = name;
    this.level = level; // Skill level (0-10)
    this.prereq = prereq; // Prerequisite skill
    this.tree = tree; // The skill tree it belongs to
    this.children = []; // Dependent skills (immediate descendents). One skill can be a prereq to multiple skills
    if (prereq) {
      prereq.addChild(this); // Add this skill as a child to its prerequisite
    }
    skillMap.set(this.name, this);
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
      this.prereq.setPrerequisiteLevels(); // Recursively reset all of the prereq's prereqs
    }
  }

  resetChildren() {
    this.children.forEach((child) => {
      child.level = 0;
      child.resetChildren(); // Recursively reset all of the child's children
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
// ---------- skill & tree initializations ----------
// --- Guard Skill Tree ---
const guardSkillTree = new Tree('Guard Skill Tree');
guardSkillTree.initializeSkillTree(guardSkillsData);

// --- Knight Skill Tree ---
const knightSkillTree = new Tree('Knight Skill Tree');
knightSkillTree.initializeSkillTree(knightSkillsData);

// --- Blade Skill Tree ---
const bladeSkillTree = new Tree('Blade Skill Tree');
bladeSkillTree.initializeSkillTree(bladeSkillsData);

// --- Martial Skill Tree ---
const martialSkillTree = new Tree('Martial Skill Tree');
martialSkillTree.initializeSkillTree(martialSkillsData);

// ---------- setup & util functions ----------
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
// ---------- SP calculations and updates ----------
// --- Update functions ---
function updateTreeSP(tree) {
  treeSPElements.forEach((element) => {
    const treeTotalLevels = tree.getTotalLevels();
    // Update the total SP for a tree
    if (element.getAttribute('data-tree-name') === tree.name) {
      element.textContent = treeTotalLevels;
    }
  });
}

// This function updates all skills in all trees, unlike updateSkillLevelInHtmlRecursive();
function updateSkillDisplay() {
  skillTreeArr.forEach((tree) => {
    tree.skills.forEach((skill) => {
      // Find the HTML element corresponding to the skill name
      const skillCell = skillCells.find(
        (cell) => cell.querySelector('.skillName').textContent === skill.name
      );

      if (skillCell) {
        // Find the <p> element that displays the skill level
        const skillLevel = skillCell.querySelector('.skillLevel');
        skillLevel.textContent = skill.level;
      }
    });
    updateTreeSP(tree);
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
    updateTreeSP(tree);
  });
  updateGlobalSP();
}

// --- Calculations and Local Update of a Tree ---
skillCells.forEach((cell) => {
  const skillName = cell.querySelector('.skillName').textContent;
  const skill = skillMap.get(skillName);

  // Only searches within clicked skill's tree and then update only those related skills.
  function updateSkillLevelInHtmlRecursive(
    skill,
    skillCells,
    visited = new Set()
  ) {
    if (visited.has(skill.name)) return; // Prevent processing the same skill again
    visited.add(skill.name);

    console.log(`Updating skill: ${skill.name}, Level: ${skill.level}`);

    // Find the first skillCell where the text inside the .skillName element matches the name of the skill
    const skillCell = skillCells.find(
      (cell) => cell.querySelector('.skillName').textContent === skill.name
    );

    if (skillCell) {
      const skillLevel = skillCell.querySelector('.skillLevel');
      skillLevel.textContent = skill.level; // Update the displayed skill level
    } else {
      console.error(`Skill cell not found for ${skill.name}`);
    }

    // Recursively update for prerequisites
    if (skill.prereq) {
      console.log(`Updating prerequisite: ${skill.prereq.name}`);
      updateSkillLevelInHtmlRecursive(skill.prereq, skillCells, visited);
    }

    // Recursively update for children
    skill.children.forEach((child) => {
      console.log(`Updating child: ${child.name}`);
      updateSkillLevelInHtmlRecursive(child, skillCells, visited);
    });
  }

  cell.addEventListener('mousedown', (event) => {
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

    // Recursively update the DOM for the skill and its prerequisites
    updateSkillLevelInHtmlRecursive(skill, skillCells);

    // Update current Tree SP
    updateTreeSP(skill.tree);
    updateGlobalSP();
  });

  cell.addEventListener('long-press', (event) => {
    event.preventDefault();
    skill.setLevelZero();
    updateSkillLevelInHtmlRecursive(skill, skillCells);
    updateTreeSP(skill.tree);
    updateGlobalSP();
  });
});
