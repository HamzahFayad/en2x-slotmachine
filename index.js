$(document).ready(function () {
  let count;
  let count2;

  //machine1 initialize
  var machine1 = $("#machine1").slotMachine({
    active: 0,
    direction: "up",
    delay: 500,
    transition: "cubic-bezier(0.64, 0.57, 0.67, 1.53)",
    randomize() {
      return count;
    },
  });

  //machine2 initialize
  var machine2 = $("#machine2").slotMachine({
    active: 0,
    direction: "up",
    delay: 500,
    transition: "cubic-bezier(0.64, 0.57, 0.67, 1.53)",
    randomize() {
      return count2;
    },
  });

  let xlogo = document.querySelector(".x--logo");
  let wrap = document.querySelector(".wrap");

  //SVG change color functionality
  let svgIcons = document.getElementsByTagName("svg");
  let strokes0 = document.querySelectorAll(".st0");
  let strokes1 = document.querySelectorAll(".st1");
  let strokes2 = document.querySelectorAll(".st2");
  let strokes3 = document.querySelectorAll(".st3");

  function coloring(color) {
    if (strokes0) {
      for (let i = 0; i < strokes0.length; i++) {
        strokes0[i].style.stroke = color;
      }
    }
    if (strokes1) {
      for (let i = 0; i < strokes1.length; i++) {
        strokes1[i].style.stroke = color;
      }
    }
    if (strokes2) {
      for (let i = 0; i < strokes2.length; i++) {
        strokes2[i].style.stroke = color;
      }
    }
    if (strokes3) {
      for (let i = 0; i < strokes3.length; i++) {
        strokes3[i].style.stroke = color;
      }
    }
  }

  //on complete callback function
  function onComplete() {
    console.log("done");
    document.documentElement.style.setProperty("--transp", "scaleX(0)");
    document.querySelector("#randomizeButton").classList.remove("disabledBtn");
  }

  //on button click functionality
  $("#randomizeButton").click(function () {
    xlogo.style.transform = "scale(0.7)";
    document.querySelector(".col1").style.paddingLeft = "0px";
    document.querySelector("#randomizeButton").classList.add("disabledBtn");
    document.documentElement.style.setProperty("--transp", "scaleX(1)");
    // random from 1 to 4 (4 categories)
    count = Math.floor(Math.random() * 4) + 1;

    if (count === 1) {
      //alles
      setTimeout(coloring("#1796C2"), 500);
      count2 = Math.floor(Math.random() * 7) + 1;
    } else if (count === 2) {
      //alles außer Industrie
      setTimeout(coloring("#02893E"), 500);
      count2 = Math.floor(Math.random() * 6) + 1;
    } else if (count === 3) {
      //alles
      setTimeout(coloring("#DB1976"), 500);
      let arrStrom = [3, 4, 5, 6, 7];
      count2 = arrStrom[Math.floor(Math.random() * arrStrom.length)];
    } else if (count === 4) {
      //nur Industrie
      setTimeout(coloring("#626B72"), 500);
      count2 = 7;
    }

    machine1.shuffle(5, () => onComplete());
    machine2.shuffle(5, () => onComplete());
  });
});

//used: https://josex2r.github.io/jQuery-SlotMachine/
/******** ********/
