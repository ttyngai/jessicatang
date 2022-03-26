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

//Nav reveal
navReveal('navButton1', 400);
navReveal('navButton2', 600);
navReveal('navButton3', 800);
navReveal('navButton4', 1000);
navReveal('navButton5', 1200, 'resume');

function navReveal(id, time, option) {
  setTimeout(function () {
    if (option == 'resume') {
      document.getElementById(id).classList.add('navFloatOutWithResume');
      document.getElementById(id).classList.add('resumeNav');
    } else {
      document.getElementById(id).classList.add('navFloatOut');
    }
  }, time);
}

attachEventListener('work1', 'homePage', 'helloTest', shiftLeft);
attachEventListener('work2', 'homePage', null, shiftLeft);

//Add event listener
function attachEventListener(targetId, shiftId, revealId, motion) {
  document.getElementById(targetId).addEventListener('click', function () {
    motion(shiftId, revealId);
  });
}

//shift right
function shiftLeft(shiftId, revealId) {
  // if (document.getElementById(shiftId).classList.includes('shiftLeft')) {
  //   document.getElementById(shiftId).classList.remove('shiftLeft');
  // }
  document.getElementById(shiftId).classList.add('shiftLeftOut');
  document.getElementById(revealId).classList.add('shiftRightOut');
}

// Skill images reveal style
// skillImageShow('skillLogo1', 0, `imageReveal${random(1, 6)}`);
// skillImageShow('skillLogo2', 0, `imageReveal${random(1, 6)}`);
// skillImageShow('skillLogo3', 0, `imageReveal${random(1, 6)}`);
// skillImageShow('skillLogo4', 0, `imageReveal${random(1, 6)}`);
// skillImageShow('skillLogo5', 0, `imageReveal${random(1, 6)}`);
// skillImageShow('skillLogo6', 0, `imageReveal${random(1, 6)}`);

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

let navHidePause;
setTimeout(function () {
  navHidePause = true;
}, 1000);

// Activate nav bar when first loads
document.getElementById('navBar').classList.add('showNav');
document.getElementById('navBar').classList.remove('showNav');

//Set event listener for navBar to reveal when mouse is close to top & when mouse it moving to up direction
let prevMouseY = 100;
document.addEventListener('mousemove', (event) => {
  let currentMouseY = event.clientY;
  if (
    event.clientY < 100 &&
    currentMouseY < prevMouseY &&
    window.pageYOffset > 100
  ) {
    document.getElementById('navBar').classList.add('showNav');
  }
  prevMouseY = currentMouseY;
});

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
