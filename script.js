"use strict";

//SELECTORS
const body = document.querySelector("body");
const title = document.querySelector(".title");
const tap = document.querySelector(".tap");
const bio = document.querySelector(".bio");
const html = document.querySelector("html");
const header = document.querySelector("header");

const projectsContent = document.querySelector(".projects-intro");
const contactContent = document.querySelector(".contact-content");

const aboutNav = document.querySelector(".nav-about");
const about = document.querySelector(".about");

const projecstNav = document.querySelector(".nav-projects");
const projects = document.querySelector(".projects");

const contactNav = document.querySelector(".nav-contact");
const contact = document.querySelector(".footer");

const burger = document.querySelector(".burger-container");

const burgerLine1 = document.querySelector(".bg1");
const burgerLine2 = document.querySelector(".bg2");
const burgerLine3 = document.querySelector(".bg3");

const nav = document.querySelector(".nav-open");

const aboutNavOpen = document.querySelector(".nav-open-about");
const projectsNavOpen = document.querySelector(".nav-open-projects");
const contactNavOpen = document.querySelector(".nav-open-contact");

const eng = document.querySelector(".eng");
const hr = document.querySelector(".hr");

//MOBILE AND TABLET NAV
const scrollTo = function (nav, section) {
  nav.addEventListener("click", function () {
    section.scrollIntoView({ behavior: "smooth" });
  });
};

scrollTo(projecstNav, projects);
scrollTo(contactNav, contact);
scrollTo(aboutNav, about);

const closeNav = (navPart, section) => {
  nav.classList.remove("nav-active");
  burger.classList.remove("toggle");
  scrollTo(navPart, section);
};

const openNav = function () {
  burger.addEventListener("click", function () {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
    title.style.opacity = "0";

    const clicked = function (sectionNav, section) {
      sectionNav.addEventListener("click", function () {
        nav.classList.remove("nav-active");
        burger.classList.remove("toggle");
        section.scrollIntoView({ behavior: "smooth" });
        body.style.overflowY = "auto";
        title.style.opacity = 1;
        tap.style.opacity = 1;
      });
    };

    clicked(aboutNavOpen, about);
    clicked(projectsNavOpen, projects);
    clicked(contactNavOpen, contact);

    if (nav.classList.contains("nav-active")) {
      body.style.overflowY = "hidden";
      title.style.opacity = 0;
      tap.style.opacity = 0;
    } else {
      body.style.overflowY = "visible";
      title.style.opacity = 1;
      tap.style.opacity = 1;
    }
  });
};

openNav();

//SCROLL ANIMATION

const aboutViewport =
  header.getBoundingClientRect().top + about.getBoundingClientRect().height / 3;

const projectsViewport =
  about.getBoundingClientRect().top +
  projects.getBoundingClientRect().height / 3;

const contactViewport =
  projects.getBoundingClientRect().top +
  contact.getBoundingClientRect().height / 3;

const scrollInto = function (viewport, el) {
  window.addEventListener("scroll", function () {
    const scrolledViewport = window.scrollY;
    if (scrolledViewport > viewport) {
      el.style.transform = "translateX(0%)";
    }
  });
};

scrollInto(aboutViewport, bio);
scrollInto(projectsViewport, projectsContent);
scrollInto(contactViewport, contactContent);

// DESKTOP NAV
const hi = document.querySelector(".hi-span");
const desktopAbout = document.querySelector(".about-span");

const im = document.querySelector(".iam-span");
const desktopProjects = document.querySelector(".projects-span");

const jelena = document.querySelector(".jelena-span");
const desktopContact = document.querySelector(".contact-span");

const desktopNav = function (titlePart, navPart, contentPart) {
  titlePart.addEventListener("mouseenter", function () {
    titlePart.style.visibility = "hidden";
    titlePart.classList.toggle("desktop-title-move");
    titlePart.style.transform = "translateX(100px)";
    navPart.classList.toggle("desktop-nav-active");

    navPart.addEventListener("click", function () {
      body.style.overflowY = "auto";
      contentPart.scrollIntoView({ behavior: "smooth" });
    });
  });
  navPart.addEventListener("mouseout", function () {
    navPart.classList.remove("desktop-nav-active");
    titlePart.style.visibility = "visible";
    titlePart.classList.toggle("desktop-nav-animation");
  });
};

desktopNav(hi, desktopAbout, about);
desktopNav(im, desktopProjects, projects);
desktopNav(jelena, desktopContact, contact);

// desktop MENU
const abtMenu = document.querySelector(".abt-menu");
const projectsMenu = document.querySelector(".projects-menu");
const contactMenu = document.querySelector(".contact-menu");

const scrollToLanding = function (menu) {
  menu.addEventListener("click", function () {
    header.scrollIntoView({ behavior: "smooth" });
  });
};

scrollToLanding(abtMenu);
scrollToLanding(projectsMenu);
scrollToLanding(contactMenu);

//LOADING ANIMATION
const loadingAnimation = function (nav) {
  window.addEventListener("load", function () {
    nav.classList.toggle("title-animation");
  });
};
loadingAnimation(title);
