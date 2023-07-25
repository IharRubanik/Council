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
  //   payment
  let connectedWallet = document.querySelector(".connected-wallet"),
    externalWallet = document.querySelector(".external-wallet"),
    accordionButton = document.querySelectorAll(".accordion-button"),
    adress = document.querySelector(".adress");




const mediaQuery600 = window.matchMedia("only screen and (max-width: 600px)");
const mediaQuery860 = window.matchMedia("only screen and (max-width: 860px)");

if(mediaQuery600.matches || mediaQuery860.matches) {
    document.querySelector('.token').innerHTML = '0xB0D502E9...5f4d'
}

if (mediaQuery600.matches) {
    document.querySelector('.reserved-title').innerHTML = 'Reserved time:'
    document.querySelector('.adress').children[1].textContent = '0xB0D502E9...5f4d'
}



    for (let i = 0; i < accordionButton.length; i++) {
      noClick(accordionButton[i]);
    }
    noClick(adress);
    function noClick(elem) {
      elem.addEventListener("click", function (event) {
        event.stopPropagation();
      });
    }

    function accordion(item) {
      if (item.classList.contains("open")) {
        item.classList.remove("open");
        item.classList.add("closed");
      } else {
        item.classList.add("open");
        item.classList.remove("closed");
      }
    }

    connectedWallet.addEventListener("click", function () {
      accordion(connectedWallet);
    });
    externalWallet.addEventListener("click", function () {
      accordion(externalWallet);
    });
  
};
