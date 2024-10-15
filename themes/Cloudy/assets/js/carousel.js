document.addEventListener('DOMContentLoaded', function() {
    const partials = document.querySelectorAll('.custom-partial-carousel .partial');
    let currentIndex = 0;

    function showPartial(index) {
      partials.forEach((partial, i) => {
        if (i === index) {
          partial.classList.add('active');
        } else {
          partial.classList.remove('active');
        }
      });
    }   
    // Function to navigate to the next partial
  function nextPartial() {
      currentIndex++;
      if (currentIndex >= partials.length) {
        currentIndex = 0;
      }
      showPartial(currentIndex);
    }   
    // Function to navigate to the previous partial
    function prevPartial() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = partials.length - 1;
      }
      showPartial(currentIndex);
    }

    // Set initial state
    showPartial(currentIndex);

    setInterval(nextPartial, 10000);
    document.getElementById('nextBtn').addEventListener('click', nextPartial);
    document.getElementById('prevBtn').addEventListener('click', prevPartial);
});