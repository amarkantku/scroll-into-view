document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('target');
  const scrollButton = document.getElementById('scrollButton');

  // Scroll to the target element when the button is clicked
  scrollButton.addEventListener('click', () => {
      target.scrollIntoView({ behavior: 'smooth' });
  });
});
