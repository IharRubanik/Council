window.onload = function () {
  let screenHeight = window.innerHeight,
    main = document.querySelector(".main"),
    manifestBg = document.querySelector(".manifesto-bg"),
    manifesto = document.querySelector(".manifesto"),
    manifestoContainer = document.querySelector(".bg-container"),
    roadmap = document.querySelector(".roadmap"),
    sparksContainer = document.querySelector(".sparks-container"),
    bgContainer = document.querySelector(".bg-container"),
    bgContainer2 = document.querySelector(".bg-container2"),
    burgerMenu = document.querySelector(".burger-menu"),
    closeMenu = document.querySelector(".close"),
    header = document.querySelector(".header"),
    blurMenu = document.querySelector(".blur"),
    body = document.querySelector("body"),
    headerLogo = document.querySelector(".header-logo");

  const mediaQuery860 = window.matchMedia("only screen and (max-width: 860px)");
  const mediaQuery600 = window.matchMedia("only screen and (max-width: 600px)");

  if (mediaQuery860.matches) {
    manifestBg.src = "./img/manifesto/manifesto-bg768.png";
    manifestoContainer.style.height = manifesto.clientHeight + 500 + "px";
  }

  // burger menu
  burgerMenu.addEventListener("click", function () {
    header.classList.add("active");
    body.style.overflow = "hidden";
    blurMenu.classList.add("active");
    blurMenu.style.zIndex = "10";
  });
  closeMenu.addEventListener("click", function () {
    header.classList.remove("active");
    body.style.overflow = "visible";
    blurMenu.classList.remove("active");
    setTimeout(() => {
      blurMenu.style.zIndex = "-1";
    }, 250);
  });

  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };

  // resize
  window.addEventListener("resize", function () {
    appHeight();
    observer();
    topBg();
    scroll();
  });

  appHeight();

  window.addEventListener(
    "orientationchange",
    function () {
      appHeight();
      observer();
      topBg();
      scroll();
    },
    false
  );

  function topBg() {
    screenHeight = window.innerHeight;
    let topMargin = manifestBg.clientHeight - screenHeight;
    bgContainer2.style.top = -topMargin + "px";
  }
  topBg();
  // scroll
  function scroll() {
    window.onscroll = function () {
      var scrollTop = window.pageYOffset
        ? window.pageYOffset
        : document.documentElement.scrollTop
        ? document.documentElement.scrollTop
        : document.body.scrollTop;
      if (scrollTop >= screenHeight * 1.25) {
        main.classList.add("opacity");
      } else {
        main.classList.remove("opacity");
      }
      if (scrollTop >= screenHeight * 2) {
        manifestBg.classList.add("blend");
      } else {
        manifestBg.classList.remove("blend");
      }

      if (mediaQuery860.matches || mediaQuery600.matches) {
        if (scrollTop >= screenHeight * 1.25) {
          headerLogo.style.opacity = "0";
        } else {
          headerLogo.style.opacity = "1";
        }
      }
    };
  }
  scroll();

  function observer() {
    let observerRoadmap = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            bgContainer.style.display = "none";
            sparksContainer.style.display = "block";
          }, 250);
          manifestBg.classList.add("opacity");
          sparksContainer.style.opacity = "1";
          sparksContainer.style.transition = "1s ease-out opacity";
        } else {
          bgContainer.style.display = "block";
          setTimeout(() => {
            manifestBg.classList.remove("opacity");
            sparksContainer.style.opacity = "0";
            sparksContainer.style.transition = "0s";
            sparksContainer.style.display = "none";
          }, 100);
        }
      });
    }, {});

    observerRoadmap.observe(roadmap);
  }
  observer();
};
