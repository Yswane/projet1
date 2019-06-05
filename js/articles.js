//Scroll down this page. 

const vignettePositionTop = document.getElementById('containerVignettes').offsetTop;

window.onscroll = function () { myFunction() };

function myFunction() {
  if (window.pageYOffset >= vignettePositionTop - 600) {
    setTimeout(function setVisibility() {
      const speed = 100;
      document.getElementById('imageJs1').style.visibility = 'visible';
    }, 900);

    setTimeout(function setVisibility() {
      const speed = 100;
      document.getElementById('imageJs2').style.visibility = 'visible';
    }, 1200);

    setTimeout(function setVisibility() {
      const speed = 100;
      document.getElementById('imageJs3').style.visibility = 'visible';
    }, 1500);
  }
}

