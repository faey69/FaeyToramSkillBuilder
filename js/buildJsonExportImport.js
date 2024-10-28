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
    return;
  }
  const fileName = file.name;
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
      const buildFileNameInputElement =
        document.getElementById('buildFileNameInput');
      // Remove the file extension by splitting the string at the last '.' and taking the first part
      const fileNameWithoutExtension = fileName.substring(
        0,
        fileName.lastIndexOf('.')
      );
      buildFileNameInputElement.value = fileNameWithoutExtension;
    } catch (error) {
      const lastDotIndex = fileName.lastIndexOf('.');

      // Check if there is a dot and if it's not the first character (to avoid filenames like ".env")
      const fileExtension =
        lastDotIndex > 0
          ? fileName.substring(lastDotIndex + 1).toLowerCase()
          : '';

      if (fileExtension === 'json') {
        alert('Invalid JSON file format');
      } else {
        alert('Wrong file type');
      }
      console.error('Error parsing JSON:', error);
    } finally {
      // This makes sure that importing the same file name will work (allows onChange event to be triggered)
      fileInput.value = '';
    }
  };

  reader.readAsText(file);
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
fileInput.addEventListener('change', function (event) {
  importSkillData(event);
});
