window.onload = function () {
  let burgerMenu = document.querySelector(".burger-menu"),
    closeMenu = document.querySelector(".close"),
    header = document.querySelector(".header"),
    blurMenu = document.querySelector(".blur"),
    body = document.querySelector("body");

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
  appHeight();

  window.addEventListener("resize", function () {
    appHeight();
  });

  window.addEventListener(
    "orientationchange",
    function () {
      appHeight();
    },
    false
  );

  // melcome
  const webcomeBg = document.querySelector(".webcome-bg"),
    sparks = document.querySelector(".sparks"),
    nftContainer = document.querySelector(".nft-container"),
    subtitleContainer = document.querySelector(".subtitle-container");
  setTimeout(() => {
    webcomeBg.classList.add("active");
  }, 1000);
  setTimeout(() => {
    sparks.classList.add("active");
  }, 1000);
  setTimeout(() => {
    webcomeBg.classList.add("active");
  }, 1000);
  setTimeout(() => {
    nftContainer.classList.add("active");
  }, 2000);
  setTimeout(() => {
    subtitleContainer.classList.add("active");
  }, 2000);
};
