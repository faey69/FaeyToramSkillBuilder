// -------- global variables --------
let globalSP = 0;
let skillTreeArr = [];
const skillMap = new Map(); // Eg: [{'Physical Guard', physicalGuard}, {..., ...}, ...]
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
}

class Skill {
  constructor(name, level = 0, prereq = null, tree) {
    this.name = name; // The id attribute of the skill in the <img> element
    this.level = level; // Skill level (0-10)
    this.prereq = prereq; // Prerequisite skill
    this.tree = tree; // The skill tree it belongs to
    this.children = []; // Dependent skills (immediate descendents)
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

// -------- setup & util functions --------
function longClick(element, callback) {
  const timeout = 400; // In ms
  let timer;

  const mouseDown = () => {
    timer = setTimeout(() => {
      callback();
    }, timeout);
  };

  const mouseUp = () => {
    clearTimeout(timer);
  };

  // Attach both mouse and touch event listeners
  element.addEventListener('mousedown', mouseDown);
  element.addEventListener('mouseup', mouseUp);
  element.addEventListener('mouseleave', mouseUp);
  element.addEventListener('touchstart', mouseDown);
  element.addEventListener('touchend', mouseUp);
  element.addEventListener('touchcancel', mouseUp);
}

const skillTreeElements = document.querySelectorAll('.skillTreeMainDiv');
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

// ---------- skill & tree initializations ----------
// --- Guard Skill Tree ---
const guardSkillTree = new Tree('Guard Skill Tree');

const heavyArmorMastery = new Skill(
  'Heavy Armor Mastery',
  0,
  null,
  guardSkillTree
);
const advancedGuard = new Skill(
  'Advanced Guard',
  0,
  heavyArmorMastery,
  guardSkillTree
);
const physicalGuard = new Skill(
  'Physical Guard',
  0,
  advancedGuard,
  guardSkillTree
);

const lightArmorMastery = new Skill(
  'Light Armor Mastery',
  0,
  null,
  guardSkillTree
);
const advancedEvasion = new Skill(
  'Advanced Evasion',
  0,
  lightArmorMastery,
  guardSkillTree
);
const mirageEvasion = new Skill(
  'Mirage Evasion',
  0,
  advancedEvasion,
  guardSkillTree
);

guardSkillTree.addSkill(physicalGuard);
guardSkillTree.addSkill(heavyArmorMastery);
guardSkillTree.addSkill(advancedGuard);
guardSkillTree.addSkill(lightArmorMastery);
guardSkillTree.addSkill(advancedEvasion);
guardSkillTree.addSkill(mirageEvasion);

// --- Knight Skill Tree ---
const knightSkillTree = new Tree('Knight Skill Tree');

const assaultAttack = new Skill('Assault Attack', 0, null, knightSkillTree);
const parry = new Skill('Parry', 0, assaultAttack, knightSkillTree);
const pDefense = new Skill('P. Defense', 0, parry, knightSkillTree);
const fareth = new Skill('Fareth', 0, pDefense, knightSkillTree);
const provoke = new Skill('Provoke', 0, null, knightSkillTree);
const rageSword = new Skill('Rage Sword', 0, provoke, knightSkillTree);
const bindingStrike = new Skill(
  'Binding Strike',
  0,
  rageSword,
  knightSkillTree
);
const knightWill = new Skill('Knight Will', 0, bindingStrike, knightSkillTree);
const sonicThrust = new Skill('Sonic Thrust', 0, rageSword, knightSkillTree);
const revenir = new Skill('Revenir', 0, sonicThrust, knightSkillTree);
const knightsStance = new Skill("Knight's Stance", 0, null, knightSkillTree);
const knightsRemedy = new Skill(
  "Knight's Remedy",
  0,
  knightsStance,
  knightSkillTree
);

knightSkillTree.addSkill(assaultAttack);
knightSkillTree.addSkill(parry);
knightSkillTree.addSkill(pDefense);
knightSkillTree.addSkill(fareth);
knightSkillTree.addSkill(provoke);
knightSkillTree.addSkill(rageSword);
knightSkillTree.addSkill(bindingStrike);
knightSkillTree.addSkill(knightWill);
knightSkillTree.addSkill(sonicThrust);
knightSkillTree.addSkill(revenir);
knightSkillTree.addSkill(knightsStance);
knightSkillTree.addSkill(knightsRemedy);

// ---------- SP calculations and updates ----------
const treeSPElements = document.querySelectorAll('.treeSP');
const globalSPSpan = document.querySelector('#globalSPSpan');
function updateTreeSP(tree) {
  treeSPElements.forEach((element) => {
    const treeTotalLevels = tree.getTotalLevels();
    // Update the total SP for a tree
    if (element.getAttribute('data-tree-name') === tree.name) {
      element.textContent = treeTotalLevels;
    }
  });
}

function updateGlobalSP() {
  globalSP = 0;
  skillTreeArr.forEach((tree) => {
    globalSP += tree.getTotalLevels();
  });

  globalSPSpan.textContent = `Total SP: ${globalSP}`;
}

const skillCells = Array.from(document.querySelectorAll('.skill'));
skillCells.forEach((cell) => {
  const skillName = cell.querySelector('.skillName').textContent;
  const skill = skillMap.get(skillName);
  let isLongClick = false;
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
    if (isLongClick) {
      // Prevent the regular click
      isLongClick = false;
      return;
    }
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
  // Long-click set skill to 0
  longClick(cell, () => {
    isLongClick = true;
    skill.setLevelZero();
    updateSkillLevelInHtmlRecursive(skill, skillCells);
    updateTreeSP(skill.tree);
    updateGlobalSP();
  });
});

// ---------- JSON (Export/Import) ----------
// Create a simplified structure with only tree names, skill names, and levels
function exportSkillData(safeFileName) {
  const skillData = {};
  // Create an object for each tree with skill names and levels
  skillTreeArr.forEach((tree) => {
    skillData[tree.name] = {};
    tree.skills.forEach((skill) => {
      skillData[tree.name][skill.name] = skill.level;
    });
  });

  const json = JSON.stringify(skillData, null, 2);

  const blob = new Blob([json], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = safeFileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function importSkillData(event) {
  const file = event.target.files[0];
  if (!file) {
    alert('No file selected');
    return;
  }

  const reader = new FileReader();
  // When the file is read successfully
  reader.onload = (e) => {
    const fileContent = e.target.result; // File content as a string
    try {
      const importedSkillData = JSON.parse(fileContent);
      for (const treeName in importedSkillData) {
        // Find the existing tree by name
        const existingTree = skillTreeArr.find(
          (tree) => tree.name === treeName
        );

        if (existingTree) {
          for (const skillName in importedSkillData[treeName]) {
            const importedLevel = importedSkillData[treeName][skillName];
            // Find the existing skill by name within the tree
            const existingSkill = existingTree.skills.find(
              (skill) => skill.name === skillName
            );

            if (existingSkill) {
              existingSkill.level = importedLevel;
            }
          }
        }
      }

      updateSkillDisplay();
      alert('Build successfully imported!');
    } catch (error) {
      alert('Invalid JSON file format');
      console.error('Error parsing JSON:', error);
    }
  };

  reader.readAsText(file);
}

function updateSkillDisplay() {
  const skillCells = Array.from(document.querySelectorAll('.skill'));

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

const exportJsonBtn = document.getElementById('exportJsonBtn');
exportJsonBtn.addEventListener('click', () => {
  const buildFileName = document
    .getElementById('buildFileNameInput')
    .value.trim();

  // Replace invalid characters with underscores
  let safeFileName = buildFileName.replace(/[<>:"/\\|?*\x00-\x1F]/g, '_');

  if (!safeFileName.endsWith('.json') && buildFileName) {
    safeFileName += '.json';
  } else {
    safeFileName = 'build.json';
  }

  console.log('File name is: ' + safeFileName);
  exportSkillData(safeFileName);
});

const fileInput = document.getElementById('importFile');
if (fileInput) {
  fileInput.addEventListener('change', function (event) {
    importSkillData(event);
  });
} else {
  console.error('File input element not found');
}