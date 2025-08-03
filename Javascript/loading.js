function loaderAnimation() {
  var loader = document.querySelector("#loader")
  setTimeout(function () {
    loader.style.top = "-100%"
  }, 1230)
}

loaderAnimation();


window.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader').classList.add('hidden');

  // Check if loader has been shown before in this session
  if (sessionStorage.getItem('loaderShown')) {
    loader.style.display = 'none'; // Hide loader instantly
  } else {
    sessionStorage.setItem('loaderShown', 'true');
    // Wait for the full animation duration, then hide it
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 5000); // Adjust to match the total animation time
  }
});

