
    document.addEventListener('DOMContentLoaded', () => {
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    });
  

    document.addEventListener('DOMContentLoaded', function() {
        const privacyMessage = document.getElementById('privacy-message');
        setTimeout(function() {
          privacyMessage.style.display = 'block';
        }, 3000); 
        function closePrivacyMessage() {
          privacyMessage.style.display = 'none';
        }
        document.getElementById('manage-preferences').addEventListener('click', closePrivacyMessage);
        document.getElementById('accept-cookies').addEventListener('click', closePrivacyMessage);
      });


      document.addEventListener('DOMContentLoaded', function() {
        const carousel = document.getElementById('beauty-carousel');
        const items = carousel.querySelectorAll('.carousel-item');
        const indicators = carousel.querySelectorAll('.carousel-indicator');
        const leftArrow = carousel.querySelector('.carousel-arrow-left');
        const rightArrow = carousel.querySelector('.carousel-arrow-right');
        
        let currentIndex = 0;
        
        // Function to update the active slide
        function updateSlide(index) {
            // Remove active class from all items and indicators
            items.forEach(item => item.classList.remove('is-active'));
            indicators.forEach(indicator => indicator.classList.remove('is-active'));
            
            // Add active class to current item and indicator
            items[index].classList.add('is-active');
            indicators[index].classList.add('is-active');
            
            currentIndex = index;
        }
        
        // Set up click events for indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                updateSlide(index);
            });
        });
        
        // Set up click events for arrows
        leftArrow.addEventListener('click', () => {
            let newIndex = currentIndex - 1;
            if (newIndex < 0) newIndex = items.length - 1;
            updateSlide(newIndex);
        });
        
        rightArrow.addEventListener('click', () => {
            let newIndex = currentIndex + 1;
            if (newIndex >= items.length) newIndex = 0;
            updateSlide(newIndex);
        });
        
        // Auto-advance slides every 5 seconds
        setInterval(() => {
            let newIndex = currentIndex + 1;
            if (newIndex >= items.length) newIndex = 0;
            updateSlide(newIndex);
        }, 5000);
    });
