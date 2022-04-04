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
scrollEvent('navButton3', 0, 'contact');

// scrollEvent('introContactButton', 0, 'contact');
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
navReveal('navButton3', 1000);

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

//Add event listener
function attachEventListener(button, targetId, revealId, method, scroll) {
  document.getElementById(button).addEventListener('click', function () {
    method(targetId, revealId, scroll);
  });
}

document.addEventListener('auxclick', function (e) {
  if (e.button === 3) {
    document.getElementById('project1').style.display = 'none';
    document.getElementById('project2').style.display = 'none';
    document.getElementById('project3').style.display = 'none';
    document.getElementById('project4').style.display = 'none';
    document.getElementById('homePage').style.display = 'block';
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
});
document.getElementById('navButton1').addEventListener('click', function () {
  document.getElementById('project1').style.display = 'none';
  document.getElementById('project2').style.display = 'none';
  document.getElementById('project3').style.display = 'none';
  document.getElementById('project4').style.display = 'none';
  document.getElementById('homePage').style.display = 'block';
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
document.getElementById('navButton2').addEventListener('click', function () {
  document.getElementById('project1').style.display = 'none';
  document.getElementById('project2').style.display = 'none';
  document.getElementById('project3').style.display = 'none';
  document.getElementById('project4').style.display = 'none';
  document.getElementById('homePage').style.display = 'block';
  document.getElementById('work1').scrollIntoView({
    block: 'center',
    behavior: 'smooth',
  });
});
document.getElementById('navButton3').addEventListener('click', function () {
  document.getElementById('project1').style.display = 'none';
  document.getElementById('project2').style.display = 'none';
  document.getElementById('project3').style.display = 'none';
  document.getElementById('project4').style.display = 'none';
  document.getElementById('homePage').style.display = 'block';
  document.getElementById('contact').scrollIntoView({
    block: 'center',
    behavior: 'smooth',
  });
});

document.getElementById('myLogo').addEventListener('click', function () {
  document.getElementById('project1').style.display = 'none';
  document.getElementById('project2').style.display = 'none';
  document.getElementById('project3').style.display = 'none';
  document.getElementById('project4').style.display = 'none';
  document.getElementById('homePage').style.display = 'block';
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

attachEventListener('work1', 'homePage', 'project1', changeElement, 'top');
attachEventListener('work2', 'homePage', 'project2', changeElement, 'top');
attachEventListener('work3', 'homePage', 'project3', changeElement, 'top');
attachEventListener('work4', 'homePage', 'project4', changeElement, 'top');
attachEventListener('goBack1', 'project1', 'homePage', changeElement, 'work1');
attachEventListener('goBack2', 'project2', 'homePage', changeElement, 'work2');
attachEventListener('goBack3', 'project3', 'homePage', changeElement, 'work3');
attachEventListener('goBack4', 'project4', 'homePage', changeElement, 'work4');

function changeElement(hideTarget, revealTarget, scroll) {
  document.getElementById(hideTarget).style.display = 'none';
  document.getElementById(revealTarget).style.display = 'block';
  if (scroll == 'top') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  } else if (scroll) {
    document.getElementById(scroll).scrollIntoView({
      block: 'center',
      behavior: 'smooth',
    });
  }
}

// //Add event listener
// function attachEventListener(targetId, shiftId, revealId, motion) {
//   document.getElementById(targetId).addEventListener('click', function () {
//     motion(shiftId, revealId);
//   });
// }

// //shift left
// function shiftToWork(shiftId, revealId) {
//   if (document.getElementById('homePage').classList.contains('shiftRightOut')) {
//     document.getElementById('homePage').classList.remove('shiftRightOut');
//   }
//   window.jessicaPreviousScrollElement = revealId;
//   console.log(window.jessicaPreviousScrollElement);
//   document.getElementById(shiftId).classList.add('shiftLeftOut');
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   });
//   //Add which to reveal
// }
// //shift Home
// function shiftToHome(shiftId, revealId) {
//   if (document.getElementById('homePage').classList.contains('shiftLeftOut')) {
//     document.getElementById('homePage').classList.remove('shiftLeftOut');
//   }
//   document.getElementById('homePage').classList.add('shiftRightOut');

//   document
//     .getElementById(window.jessicaPreviousScrollElement)
//     .scrollIntoView({ block: 'center', behavior: 'smooth' });

//   //add hide all work
// }

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
// function revealPlaceholder() {
//   let array = document.querySelectorAll('[data-text]');
//   array.forEach(function (element) {
//     element.innerHTML = element.dataset.text;
//   });
// }

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
// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
