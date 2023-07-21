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


  const changeButton = document.querySelector(".change"),
    time = document.querySelector(".time"),
   
   initiateButton = document.querySelector('.initiate'),
   initiateContainer = document.querySelector('.initiate-container'),
   previewMint = document.querySelector('.preview-mint'),
   mint = document.querySelector(".mint");
   let numberTimer = 5;
//   timer
  changeButton.addEventListener("click", function () {
    changeButton.classList.add("timer");
    function timer() {
      time.innerHTML = "00:0" + numberTimer;
      setTimeout(() => {
        numberTimer = numberTimer - 1;
        if (numberTimer == -1) {
            changeButton.classList.remove("timer");
            numberTimer = 5
          return;
        }
        timer();
      }, 1000);
    }
    timer();
  });

//   initiate
initiateButton.addEventListener('click', function(){
    initiateContainer.classList.add('active')
    setTimeout(() => {
        previewMint.classList.add('no-active')
        mint.classList.remove('no-active')
    }, 2500);
})
 

};
