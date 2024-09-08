document.addEventListener('DOMContentLoaded', () => {
  const nameForm = document.getElementById('name-form');
  const nameInput = document.getElementById('name-input');
  const feedback = document.getElementById('feedback');
  const personalizedMessage = document.getElementById('personalized-message');
  const resetButton = document.getElementById('reset-btn');
  const instructionText = document.getElementById('instruction-text');
  const loading = document.getElementById('loading');
  const themeToggle = document.getElementById('theme-toggle');
  
  nameForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission to the server
    
    // Show loading animation
    loading.classList.remove('hidden');
    
    setTimeout(() => {
      loading.classList.add('hidden');
      
      const name = nameInput.value.trim();
      if (name) {
        // Display personalized message
        personalizedMessage.textContent = `Welcome to Podman tutorial, ${name}!`;
        feedback.classList.remove('hidden');
        nameForm.classList.add('hidden'); // Hide form once name is submitted
        resetButton.classList.remove('hidden'); // Show reset button
        instructionText.classList.add('hidden'); // Hide instructions
      }
    }, 1000); // Simulate processing delay
  });
  
  resetButton.addEventListener('click', () => {
    // Reset form and feedback
    nameInput.value = '';
    feedback.classList.add('hidden');
    nameForm.classList.remove('hidden');
    resetButton.classList.add('hidden');
    instructionText.classList.remove('hidden');
  });

  // Toggle dark and light mode
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
});
