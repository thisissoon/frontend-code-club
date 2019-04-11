var overlay = document.getElementById("overlay");
var open = document.getElementById("open");
var close = document.getElementById("close");
var menu = document.getElementById("menu");
var nav = document.getElementById("nav");

// Handle clicks

function getScale(e) {
  var height = e.target.ownerDocument.documentElement.clientHeight;
  var width = e.target.ownerDocument.documentElement.clientWidth;
  var maxDiagonal = Math.sqrt(height * height + width * width);
  return ((maxDiagonal + 100) * 2) / 60;
}

function toggleNavClasses() {
  overlay.classList.toggle("nav__overlay--open");
  open.classList.toggle("nav__open--hide");
  close.classList.toggle("nav__close--hide");
  menu.classList.toggle("nav__menu--show");
}

function openNav(e) {
  overlay.style.transform = `scale(${getScale(e)})`;
  toggleNavClasses();
}

function closeNav() {
  overlay.style.transform = `scale(1)`;
  toggleNavClasses();
}

// Handle scroll

function onIntersection(entries) {
  entries.forEach(function(entry) {
    if (entry.boundingClientRect.y < 50) {
      overlay.classList.add("nav__overlay--fixed");
      open.classList.add("nav__open--fixed");
      menu.classList.add("nav__menu--fixed");
    } else {
      overlay.classList.remove("nav__overlay--fixed");
      open.classList.remove("nav__open--fixed");
      menu.classList.remove("nav__menu--fixed");
    }
  });
}
var observerOptions = {
  rootMargin: "-50px 0px 0px 0px",
  threshold: [0, 1]
};

var observer = new IntersectionObserver(onIntersection, observerOptions);

observer.observe(nav);
