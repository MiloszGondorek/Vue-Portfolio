function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;
  return (
    top + 50 >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}

function isVisable(el, early) {
  var top = el.offsetTop;
  var height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
  }

  return ((top + height - (early ? 250 : 0)) <= (window.pageYOffset + window.innerHeight))
}

function checkAnims() {
  var from_left = document.getElementsByClassName("anim-from-left");
  var from_right = document.getElementsByClassName("anim-from-right");
  var opacity = document.getElementsByClassName("anim-opacity");
  var contact = document.getElementsByClassName("anim-contact");

  Array.from(from_left).forEach(element => {
    if (isVisable(element, true)) {
      element.style.animationName = "anim-from-left";
      element.addEventListener('animationend', () => {
        element.style.opacity = "100%";
      });
    }
  });

  Array.from(from_right).forEach(element => {
    if (isVisable(element, true)) {
      element.style.animationName = "anim-from-right";
      element.addEventListener('animationend', () => {
        element.style.opacity = "100%";
      });
    }
  });

  Array.from(opacity).forEach(element => {
    if (isVisable(element, false)) {
      element.style.animationName = "anim-opacity";
      element.addEventListener('animationend', () => {
        element.style.opacity = "100%";
      });
    }
  });

  Array.from(contact).forEach((element, id) => {
    if (isVisable(contact[0], false)) {
      element.style.animationName = "anim-opacity";
      element.style.animationDelay = `${(id * 0.2) +0.8}s`;
      element.addEventListener('animationend', () => {
        element.style.opacity = "100%";
      });
    }
  })
}

window.onscroll = function () {
  checkAnims();
}

let sliderImages = {};
let current = {};
let loaded = false;

function startSlide(id) {
  sliderImages[id] = document.getElementById(id).getElementsByTagName("img");
  current[id] = 0;
  sliderImages[id][0].style.display = "block";
}

function reset(id) {
  for (let i = 0; i < sliderImages[id].length; i++) {
    sliderImages[id][i].style.display = "none";
  }
}

function slideLeft(id) {
  if (current[id] === 0) {
    current[id] = sliderImages[id].length;
  }
  reset(id);
  sliderImages[id][current[id] - 1].style.display = "block";
  current[id]--;
}

function slideRight(id) {
  if (current[id] === sliderImages[id].length - 1) {
    current[id] = -1;
  }
  reset(id);
  sliderImages[id][current[id] + 1].style.display = "block";
  current[id]++;
}

window.addEventListener("load",function(){  
  if (window.innerWidth <= 900) {
    Array.from(document.getElementsByClassName("portfolio-item-images")).forEach((element, id) => {
      element.id = `portfolio-item-images-${id}`;
      startSlide(element.id);
      slideLeft(element.id);
      element.getElementsByClassName("left")[0].onclick = function () {
        slideLeft(element.id);
      };
      element.getElementsByClassName("right")[0].onclick = function () {
        slideRight(element.id)
      };
    });
  }
});

window.addEventListener("resize",function(){
  checkAnims();
  if (window.innerWidth > 900) {
    Array.from(document.getElementsByClassName("portfolio-item-images")).forEach(element => {
      if (document.getElementById(element.id) != null) {
        var images = document.getElementById(element.id).getElementsByTagName("img");
        Array.from(images).forEach(img => {
          img.style.display = "block";
        });
      }
    });
  } else if (!loaded) {
    loaded = true;
    Array.from(document.getElementsByClassName("portfolio-item-images")).forEach((element, id) => {
      element.id = `portfolio-item-images-${id}`;
      startSlide(element.id);
      slideLeft(element.id);
      element.getElementsByClassName("left")[0].onclick = function () {
        slideLeft(element.id)
      };
      element.getElementsByClassName("right")[0].onclick = function () {
        slideRight(element.id)
      };
    });
  }
});