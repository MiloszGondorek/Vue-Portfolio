var menu;
var hide = true;

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function show_menu() {
  menu.style.transform = "translate(0,0)";
}

function hide_menu() {
  menu.style.transform = "translate(100%,0)";
}

function change_menu_status() {
  if (hide) {
    show_menu();
  } else {
    hide_menu();
  }
  hide = !hide;
}

window.addEventListener("load",function(){
  menu = document.getElementsByClassName("header-menu")[0];
  var questions = document.getElementsByClassName("question");
  Array.from(questions).forEach(element => {
    const answer = element.getElementsByClassName("answer")[0];
    var img = element.getElementsByClassName("top")[0].getElementsByTagName("img")[0];
    img.onclick = function x() {
      if (answer.clientHeight == 0) {
        img.style.transform = 'rotate(180deg)';
        answer.style.maxHeight = "200px";
        delay(500).then(() => {
          if (answer.style.maxHeight == "200px") {
            answer.style.maxHeight = answer.clientHeight + "px";
          }
        });

      } else {
        img.style.transform = 'rotate(0deg)';
        answer.style.maxHeight = 0;
      }
      console.log(answer.style.maxHeight);
    }
  });
});

window.addEventListener("resize",function(){
  if (window.innerWidth > 800) {
    show_menu();
    menu.style.transition = "none";
  } else {
    if (hide) {
      hide_menu();
    }
    delay(20).then(() => menu.style.transition = "transform 0.5s");
  }
});