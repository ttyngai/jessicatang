// const charList =
//   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_-=';
const charList =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*__--==(){}[]';
// const charList = 'abcdefghijklmnopqrstuvwxyz';
// const charList = '0123456789!@#$%^&*';
// const charList = '!@#$%^&*';
// const charList = '0123456789';

// Scroll to top on loading page
firstScroll();
function firstScroll() {
  setTimeout(function () {
    window.scrollTo({
      top: 0,
      // behavior: 'smooth',
    });
  }, 100);
}

// Set up event for detecting nav clicks + scrolls
scrollEvent('myLogo', 0);
scrollEvent('navButton1', 0);
scrollEvent('navButton2', 0, 'work1');
scrollEvent('navButton3', 0);
scrollEvent('introContactButton', 0, 'contact');
scrollEvent('navButton4', 0, 'contact');
scrollEvent('backToTop', 0);
// scrollEvent('navButton6', 0, 'skillsContainer');

function scrollEvent(elementId, top, target) {
  const element = document.getElementById(elementId);
  element.addEventListener('click', function () {
    if (
      (element.classList.contains('about') ||
        element.classList.contains('myLogo') ||
        element.classList.contains('backToTop')) &&
      window.pageYOffset < 100
    ) {
      window.scrollTo({
        top: 30,
        behavior: 'smooth',
      });
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }, 100);
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }, 300);
    }
    // Normal but without target, goes to parameter 'top'
    else if (!target) {
      window.scrollTo({
        top: top,
        behavior: 'smooth',
      });
    }
    // with target element specified
    else {
      document
        .getElementById(target)
        .scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  });
}

// Skill images reveal style
skillImageShow('skillLogo1', 0, `imageReveal${random(1, 6)}`);
skillImageShow('skillLogo2', 0, `imageReveal${random(1, 6)}`);
skillImageShow('skillLogo3', 0, `imageReveal${random(1, 6)}`);
skillImageShow('skillLogo4', 0, `imageReveal${random(1, 6)}`);
skillImageShow('skillLogo5', 0, `imageReveal${random(1, 6)}`);
skillImageShow('skillLogo6', 0, `imageReveal${random(1, 6)}`);

function skillImageShow(elementId, delayTime, method) {
  setTimeout(function () {
    document.getElementById(elementId).classList.add(method);
  }, delayTime);
}

// Populate text as placeholder, so that spacings of website would be accurate
// revealPlaceholder();
function revealPlaceholder() {
  let array = document.querySelectorAll('[data-text]');
  array.forEach(function (element) {
    element.innerHTML = element.dataset.text;
  });
}

// Activate nav bar when first loads
document.getElementById('navBar').classList.add('showNav');
document.getElementById('navBar').classList.remove('showNav');

//Set event listener for navBar to reveal when mouse is close to top & when mouse it moving to up direction
let prevMouseY = 100;
document.addEventListener('mousemove', (event) => {
  let currentMouseY = event.clientY;

  if (event.clientY < 100 && currentMouseY < prevMouseY) {
    document.getElementById('navBar').classList.add('showNav');
  }
  prevMouseY = currentMouseY;
});

let navHidePause;
setTimeout(function () {
  navHidePause = true;
}, 4000);
// Hiding nav bar
let prevScrollpos = window.pageYOffset;
let downAnchor = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos >= currentScrollPos) {
    document.getElementById('navBar').style = '';
    document.getElementById('navBar').classList.add('showNav');
    if (window.pageYOffset < 60) {
      downAnchor = 0;
    } else {
      downAnchor = window.pageYOffset;
    }
  } else if (navHidePause) {
    document.getElementById('navBar').classList.remove('showNav');
    document.getElementById('navBar').style.top = `-${
      currentScrollPos - downAnchor
    }px`;
  }
  prevScrollpos = currentScrollPos;
};

// Helper function for random generation
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// //Text scramble
// // Log of revealed sections
// let scrolled = {};
// let backToTopShowed;
// function reveal(
//   elementId,
//   time,
//   interval,
//   loading,
//   effect,
//   revealEffect,
//   master = null,
//   charIdx = 0,
//   count = interval
// ) {
//   const element = document.getElementById(elementId);
//   const text = element.dataset.text;
//   const letterTime = Math.floor(time / text.length) + 1;
//   let intervalRolling = interval;
//   if (charIdx <= text.length) {
//     let returnText = text.split('');
//     let newText = returnText.map(function (t, idx) {
//       if (idx < charIdx) {
//         return t;
//       } else if (t != ' ') {
//         return charList[Math.floor(Math.random() * (charList.length - 1))];
//       } else {
//         return ' ';
//       }
//     });
//     if (charIdx < text.length) {
//       // Choice of different text reveal mode
//       // newText[charIdx] = '//';
//       // newText[charIdx] = '//▮';
//       // newText[charIdx] = '///';
//       // newText[charIdx] = '*// ';
//       newText[charIdx] = '▮';
//       // End with tag
//       newText[charIdx] += '</span>';
//     }

//     if (loading >= 0) {
//       loading -= letterTime;
//       count = intervalRolling;
//     } else if (count == 0) {
//       charIdx += 1;
//       count = intervalRolling;
//     }
//     count--;
//     returnText = newText.join('');
//     returnText = `<span class="${revealEffect}">` + returnText;
//     element.innerHTML = returnText;
//     if (charIdx > text.length && effect) {
//       const effects = effect.split('+');
//       effects.forEach(function (e) {
//         element.classList.add(e);
//       });
//     }
//     // Recur until whole data-set is revealed
//     setTimeout(function () {
//       reveal(
//         elementId,
//         time,
//         interval,
//         loading,
//         effect,
//         revealEffect,
//         master,
//         charIdx,
//         count
//       );
//     }, letterTime);
//   }
// }

// // If page size includes work #1, will reveal it right away
// if (
//   window.innerHeight >
//   document.getElementById(`work1`).getBoundingClientRect().top
// ) {
//   revealWork(2000, 1, 1);
//   scrolled.work1 = true;
// }

// // Revealing intro with delay
// setTimeout(function () {
//   revealIntro(200, 1);
// }, 100);
// function revealIntro(time, interval) {
//   //Intro reveal
//   reveal(
//     'introSection1',
//     time,
//     interval,
//     random(0, 100),
//     'yellowBling+textBlink',
//     'yellowBling',
//     true
//   );
//   reveal(
//     'introSection2',
//     time,
//     interval,
//     random(300, 500),
//     'yellowBling+textBlink',
//     'yellowBling',
//     true
//   );
//   reveal(
//     'introSection3',
//     time,
//     interval,
//     random(0, 0),
//     'textBlink',
//     'whiteBling',
//     true
//   );
//   reveal(
//     `introContactButton`,
//     time,
//     interval,
//     random(200, 800),
//     'textBlockBlink+borderBling',
//     'yellowBling'
//   );
// }

// // reveal nav
// setTimeout(function () {
//   // revealNav(1500, 1);
// }, 100);
// function revealNav(time, interval) {
//   //Nav
//   reveal(
//     'navButton1',
//     time,
//     interval,
//     random(200, 700),
//     'yellowBling+textBlockBlink',
//     'yellowBling'
//   );
//   reveal(
//     'navButton2',
//     time,
//     interval,
//     random(1000, 1500),
//     'yellowBling+textBlockBlink',
//     'yellowBling'
//   );
//   reveal(
//     'navButton3',
//     time,
//     interval,
//     random(2000, 2300),
//     'yellowBling+textBlockBlink',
//     'yellowBling'
//   );
//   reveal(
//     'navButton4',
//     time,
//     interval,
//     random(800, 1300),
//     'yellowBling+textBlockBlink',
//     'yellowBling'
//   );
//   reveal(
//     'navButton5',
//     time,
//     interval,
//     random(200, 800),
//     'yellowBling+textBlockBlink',
//     'yellowBling'
//   );
//   // reveal(
//   //   'navButton6',
//   //   time,
//   //   interval,
//   //   random(0, 200),
//   //   'yellowBling+textBlockBlink',
//   //   'yellowBling'
//   // );
// }

// //work text
// //Setup event listener for scroll
// setTimeout(function () {
//   setRevealWorkEvent(50, 1, 1);
//   setRevealWorkEvent(50, 1, 2);
//   setRevealWorkEvent(50, 1, 3);
// }, 500);

// function setRevealWorkEvent(time, interval, target) {
//   document.addEventListener('scroll', function () {
//     let windowBottom = window.innerHeight;
//     let top = document
//       .getElementById(`work${target}`)
//       .getBoundingClientRect().top;
//     if (windowBottom > top && scrolled[`work${target}`] != true) {
//       revealWork(time, interval, target);
//       scrolled[`work${target}`] = true;
//     }
//   });
// }
// // reveal back to top
// document.addEventListener('scroll', function () {
//   let windowBottom = window.innerHeight;
//   let top = document.getElementById('contact').getBoundingClientRect().top;
//   let bottom = document
//     .getElementById('contact')
//     .getBoundingClientRect().bottom;
//   let middle = (top + bottom) / 2 - (top - bottom) / 6;
//   if (windowBottom > middle) {
//     document.getElementById('backToTop').classList.remove('hideBackToTop');
//     document
//       .getElementById('backToTop')
//       .classList.add('showBackToTopAnimation');
//     document.getElementById('backToTop').classList.add('showBackToTop');
//   } else {
//     document.getElementById('backToTop').classList.remove('showBackToTop');
//     document.getElementById('backToTop').classList.add('hideBackToTop');
//   }
// });
// // Unscramble of work section
// function revealWork(time, interval, target) {
//   // Title
//   reveal(
//     `workTitle${target}`,
//     time,
//     interval,
//     random(0, 200),
//     null,
//     'yellowBling',
//     `work${target}`
//   );
//   // Text of work
//   reveal(
//     `workText${target}`,
//     0,
//     interval,
//     random(0, 0),
//     null,
//     'whiteBling',
//     `work${target}`
//   );
//   // Technology
//   reveal(
//     `workTechnology${target}`,
//     time,
//     interval,
//     random(50, 100),
//     null,
//     'yellowBling',
//     `work${target}`
//   );
//   // Launch utton
//   reveal(
//     `worksquareButton${target}`,
//     time,
//     interval,
//     random(200, 1000),
//     'textBlockBlink+borderBling',
//     'yellowBling',
//     `work${target}`
//   );
//   // Github button
//   reveal(
//     `workGithubButton${target}`,
//     time,
//     interval,
//     random(100, 1500),
//     'textBlockBlink+borderBling',
//     'yellowBling',
//     `work${target}`
//   );

//   let element = document.querySelectorAll(`img.workImage${target}`);
//   element.forEach(function (e) {
//     if (e.classList.contains('secondImage')) {
//       e.classList.add('imageReveal2');
//     } else if (e.classList.contains('side')) {
//       e.classList.add('imageReveal3');
//     } else {
//       e.classList.add('imageReveal1');
//     }
//   });
// }
// // Unscramble upon scrolling to contact section. (Reveals only when bottom of screen touches the element)
// document.addEventListener('scroll', function () {
//   let windowBottom = window.innerHeight;
//   let top = document.getElementById(`contact`).getBoundingClientRect().top;
//   if (windowBottom > top && !scrolled.contact) {
//     // Contact Title
//     reveal(
//       'contactSectionTitle',
//       500,
//       1,
//       random(200, 500),
//       'textBlink',
//       'yellowBling',
//       true
//     );
//     // Contact Text
//     reveal(
//       'contactSectionText',
//       500,
//       1,
//       random(200, 500),
//       'textBlink',
//       'whiteBling',
//       true
//     );
//     // Button 1
//     reveal(
//       'contactButton1',
//       500,
//       1,
//       random(200, 500),
//       'textBlink+borderBling',
//       'yellowBling',
//       true
//     );
//     // Button 2
//     reveal(
//       'contactButton2',
//       500,
//       1,
//       random(200, 500),
//       'textBlink+borderBling',
//       'yellowBling',
//       true
//     );
//     // Button 3
//     reveal(
//       'contactButton3',
//       500,
//       1,
//       random(200, 500),
//       'textBlink+borderBling',
//       'yellowBling',
//       true
//     );
//     scrolled.contact = true;
//   }
// });
