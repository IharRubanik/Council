window.onload = function () {
  let screenHeight = window.innerHeight,
    main = document.querySelector(".main");
  (manifestBg = document.querySelector(".manifesto-bg")),
    (roadmap = document.querySelector(".roadmap")),
    (sparksContainer = document.querySelector(".sparks-container")),
    (bgContainer2 = document.querySelector(".bg-container2")),
    (topMargin = manifestBg.clientHeight - screenHeight);

  // resize
  window.addEventListener("resize", function () {
    topBg()
  });

  (function topBg() {
    screenHeight = window.innerHeight;
    let topMargin = manifestBg.clientHeight - screenHeight;
    bgContainer2.style.top = -topMargin + "px";
  })()
  // scroll
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
    if (scrollTop >= screenHeight * 11.5) {
      manifestBg.classList.add("opacity");
      sparksContainer.style.opacity = "1";
      sparksContainer.style.transition = "1s ease-out opacity";
    } else {
      manifestBg.classList.remove("opacity");
      sparksContainer.style.opacity = "0";
      sparksContainer.style.transition = "0s";
    }
    let top = roadmap.getBoundingClientRect().top + document.body.scrollTop;
    if (top <= 0) {
      sparksContainer.style.position = "fixed";
    } else {
      sparksContainer.style.position = "absolute";
    }
  };
};
