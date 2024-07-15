(function() {
  // Check if the browser supports scroll behavior smooth
  const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;

  if (!supportsNativeSmoothScroll) {
      // Smooth scroll polyfill
      function smoothScrollTo(element, target, duration) {
          let start = element.scrollTop,
              change = target - start,
              currentTime = 0,
              increment = 20;

          function animateScroll() {
              currentTime += increment;
              let val = Math.easeInOutQuad(currentTime, start, change, duration);
              element.scrollTop = val;
              if (currentTime < duration) {
                  requestAnimationFrame(animateScroll);
              }
          }

          animateScroll();
      }

      // Easing function
      Math.easeInOutQuad = function (t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      };

      // Override scrollIntoView method
      Element.prototype.scrollIntoView = function (options) {
          if (options === undefined || options === true) {
              this.scrollIntoViewIfNeeded(true);
          } else if (options.behavior === 'smooth') {
              let scrollContainer = this.closest('scroll-container') || document.documentElement;
              let targetPosition = this.offsetTop;

              smoothScrollTo(scrollContainer, targetPosition, 600);
          } else {
              this.scrollIntoViewIfNeeded(false);
          }
      };
  }
})();
