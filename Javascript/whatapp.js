window.addEventListener('DOMContentLoaded', () => {
  const tooltip = document.getElementById('wa-tooltip');

  // Show tooltip after 3 seconds
  setTimeout(() => {
    tooltip.classList.remove('hidden');
  }, 3000);
});

// Manual close function
function hideTooltip() {
  const tooltip = document.getElementById('wa-tooltip');
  tooltip.classList.add('hidden');
}