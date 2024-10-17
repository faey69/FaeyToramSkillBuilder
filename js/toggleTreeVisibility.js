const skillTreeHeaderElements = document.querySelectorAll('.skillTreeHeader');

skillTreeHeaderElements.forEach((headerElement) => {
  headerElement.addEventListener('click', () => {
    const treeName = headerElement.getAttribute('data-tree-name');
    const correspondingTableDiv = document.querySelector(
      `.skillTreeTableDiv[data-tree-name="${treeName}"]`
    );

    correspondingTableDiv.classList.toggle('block');
    correspondingTableDiv.classList.toggle('hidden');
  });
});
