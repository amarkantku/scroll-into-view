(function() {
  if (!Element.prototype.smoothScrollIntoView) {
      // Easing function
      function easeInOutQuad(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return (c / 2) * t * t + b;
          t--;
          return (-c / 2) * (t * (t - 2) - 1) + b;
      }

      // Smooth scroll polyfill
      function smoothScrollTo(element, target, duration) {
          const start = element.scrollTop;
          const change = target - start;
          const increment = 20;
          let currentTime = 0;

          function animateScroll() {
              currentTime += increment;
              const val = easeInOutQuad(currentTime, start, change, duration);
              element.scrollTop = val;
              if (currentTime < duration) {
                  requestAnimationFrame(animateScroll);
              }
          }
          requestAnimationFrame(animateScroll);
      }

      Element.prototype.smoothScrollIntoView = function(options) {
          if (typeof options !== "object" || options === null) {
              throw new Error("options must be an object");
          }

          if (options.behavior !== "smooth") {
              throw new Error("options behavior property value must be: smooth");
          }

          const scrollContainer = this.closest("scroll-container") || document.documentElement;
          const targetPosition = this.offsetTop;
          smoothScrollTo(scrollContainer, targetPosition, 600);
      };
  }
})();


// (function() {
//   if (!Element.prototype.smoothScrollIntoView) {
//       // Easing function
//       function easeInOutQuad(t, b, c, d) {
//           t /= d / 2;
//           if (t < 1) return (c / 2) * t * t + b;
//           t--;
//           return (-c / 2) * (t * (t - 2) - 1) + b;
//       }

//       // Smooth scroll polyfill
//       function smoothScrollTo(element, target, duration) {
//           const start = element.scrollTop,
//                 change = target - start,
//                 increment = 20;
//           let currentTime = 0;

//           function animateScroll() {
//               currentTime += increment;
//               const val = easeInOutQuad(currentTime, start, change, duration);
//               element.scrollTop = val;
//               if (currentTime < duration) {
//                   requestAnimationFrame(animateScroll);
//               }
//           }
//           animateScroll();
//       }

//       Element.prototype.smoothScrollIntoView = function(options) {
//           if (typeof options !== "object" || options === null) {
//               throw new Error("options must be an object");
//           }

//           if (options.behavior !== "smooth") {
//               throw new Error("options behavior property value must be: smooth");
//           }

//           const scrollContainer = this.closest("scroll-container") || document.documentElement;
//           const targetPosition = this.offsetTop;
//           smoothScrollTo(scrollContainer, targetPosition, 600);
//       };
//   }
// })();


// (function () {
//   if (!Element.prototype.smoothScrollIntoView) {
//     function easeInOutQuad(t, b, c, d) {
//       t /= d / 2;
//       if (t < 1) return (c / 2) * t * t + b;
//       t--;
//       return (-c / 2) * (t * (t - 2) - 1) + b;
//     }

//     // Smooth scroll polyfill
//     function smoothScrollTo(element, target, duration) {
//       let start = element.scrollTop,
//         change = target - start,
//         currentTime = 0,
//         increment = 20;

//       function animateScroll() {
//         currentTime += increment;
//         let val = easeInOutQuad(currentTime, start, change, duration);
//         element.scrollTop = val;
//         if (currentTime < duration) {
//           requestAnimationFrame(animateScroll);
//         }
//       }
//       animateScroll();
//     }

//     Element.prototype.smoothScrollIntoView = function (options) {
//       if (options === null || options === undefined) {
//         throw new Error("options must be an type of object");
//       }

//       if (typeof options === "object" && options.behavior !== "smooth") {
//         throw new Error("options behavior property value must be: smooth");
//       }

//       if (options.behavior === "smooth") {
//         let scrollContainer =
//           this.closest("scroll-container") || document.documentElement;
//         let targetPosition = this.offsetTop;
//         smoothScrollTo(scrollContainer, targetPosition, 600);
//       }
//     };
//   }
// })();

// (function() {
//   // Check if the browser supports scroll behavior smooth
//   const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;

//   if (!supportsNativeSmoothScroll) {
//       // Smooth scroll polyfill
//       function smoothScrollTo(element, target, duration) {
//           let start = element.scrollTop,
//               change = target - start,
//               currentTime = 0,
//               increment = 20;

//           function animateScroll() {
//               currentTime += increment;
//               let val = Math.easeInOutQuad(currentTime, start, change, duration);
//               element.scrollTop = val;
//               if (currentTime < duration) {
//                   requestAnimationFrame(animateScroll);
//               }
//           }

//           animateScroll();
//       }

//       // Easing function
//       Math.easeInOutQuad = function (t, b, c, d) {
//           t /= d / 2;
//           if (t < 1) return c / 2 * t * t + b;
//           t--;
//           return -c / 2 * (t * (t - 2) - 1) + b;
//       };

//       // Override scrollIntoView method
//       Element.prototype.scrollIntoView = function (options) {
//           if (options === undefined || options === true) {
//               this.scrollIntoViewIfNeeded(true);
//           } else if (options.behavior === 'smooth') {
//               let scrollContainer = this.closest('scroll-container') || document.documentElement;
//               let targetPosition = this.offsetTop;

//               smoothScrollTo(scrollContainer, targetPosition, 600);
//           } else {
//               this.scrollIntoViewIfNeeded(false);
//           }
//       };
//   }
// })();
