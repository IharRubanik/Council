window.onload = function () {
  let screenHeight = window.innerHeight,
    main = document.querySelector(".main");
  (manifestBg = document.querySelector(".manifesto-bg")),
    (manifesto = document.querySelector(".manifesto")),
    (manifestoContainer = document.querySelector(".bg-container")),
    (roadmap = document.querySelector(".roadmap")),
    (sparksContainer = document.querySelector(".sparks-container")),
    (bgContainer2 = document.querySelector(".bg-container2")),
    (burgerMenu = document.querySelector(".burger-menu")),
    (closeMenu = document.querySelector(".close")),
    (header = document.querySelector(".header")),
    (blurMenu = document.querySelector(".blur")),
    (body = document.querySelector("body")),
    (topMargin = manifestBg.clientHeight - screenHeight);

  const mediaQuery860 = window.matchMedia("only screen and (max-width: 860px)");
  const mediaQuery600 = window.matchMedia("only screen and (max-width: 600px)");

  if (mediaQuery860.matches) {
    manifestBg.src = "./img/manifesto/manifesto-bg768.png";
    manifestoContainer.style.height = manifesto.clientHeight + "px";
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

  // resize
  window.addEventListener("resize", function () {
    topBg();
  });

  function topBg() {
    screenHeight = window.innerHeight;
    let topMargin = manifestBg.clientHeight - screenHeight;
    bgContainer2.style.top = -topMargin + "px";
  }
  topBg();
  // scroll
  window.onscroll = function () {
    var scrollTop = window.pageYOffset
      ? window.pageYOffset
      : document.documentElement.scrollTop
      ? document.documentElement.scrollTop
      : document.body.scrollTop;

    if (mediaQuery860.matches) {
      if (scrollTop >= screenHeight) {
        main.classList.add("opacity");
      } else {
        main.classList.remove("opacity");
      }
      if (scrollTop >= screenHeight * 1.25) {
        manifestBg.classList.add("blend");
      } else {
        manifestBg.classList.remove("blend");
      }
      if (scrollTop >= screenHeight * 6) {
        manifestBg.classList.add("opacity");
        sparksContainer.style.opacity = "1";
        sparksContainer.style.transition = "1s ease-out opacity";
      } else {
        manifestBg.classList.remove("opacity");
        sparksContainer.style.opacity = "0";
        sparksContainer.style.transition = "0s";
      }
    }
    if (mediaQuery600.matches) {
      console.log(scrollTop)
      if (scrollTop >= 8200) {
        manifestBg.classList.add("opacity");
        sparksContainer.style.opacity = "1";
        sparksContainer.style.transition = "1s ease-out opacity";
      } else {
        manifestBg.classList.remove("opacity");
        sparksContainer.style.opacity = "0";
        sparksContainer.style.transition = "0s";
      }
    }

    if (!mediaQuery860.matches || !mediaQuery600.matches ) {
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
      if (scrollTop >= screenHeight * 11.5) {
        manifestBg.classList.add("opacity");
        sparksContainer.style.opacity = "1";
        sparksContainer.style.transition = "1s ease-out opacity";
      } else {
        manifestBg.classList.remove("opacity");
        sparksContainer.style.opacity = "0";
        sparksContainer.style.transition = "0s";
      }
    }
  };
};
