const skillTreeHeaderElements = document.querySelectorAll('.skillTreeHeader');

skillTreeHeaderElements.forEach((headerElement) => {
  headerElement.addEventListener('click', () => {
    const treeName = headerElement.getAttribute('data-tree-name');
    const correspondingTableDiv = document.querySelector(
      `.skillTreeTableDiv[data-tree-name="${treeName}"]`
    );

    if (correspondingTableDiv.classList.contains('scale-y-0')) {
      // Remove hidden, then add scale-y-100 after a tiny delay to trigger transition
      correspondingTableDiv.classList.remove('hidden');
      setTimeout(() => {
        correspondingTableDiv.classList.remove('scale-y-0');
        correspondingTableDiv.classList.add('scale-y-100');
      }, 10); // Tiny delay to ensure transition works
    } else {
      correspondingTableDiv.classList.remove('scale-y-100');
      correspondingTableDiv.classList.add('scale-y-0');

      // Wait for the transition to end before adding the hidden class
      setTimeout(() => {
        correspondingTableDiv.classList.add('hidden');
      }, 300); // Match with transition duration
    }
  });
});
