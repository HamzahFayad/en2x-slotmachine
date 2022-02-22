$(document).ready(function () {
  let count;
  let count2;

  //machine1 initialize
  var machine1 = $("#machine1").slotMachine({
    active: 0,
    direction: "up",
    delay: 600,
    transition: "cubic-bezier(0.64, 0.57, 0.67, 1.53)",
    randomize() {
      return count;
    },
  });

  //machine2 initialize
  var machine2 = $("#machine2").slotMachine({
    active: 0,
    direction: "up",
    delay: 600,
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

  // change icons color based on count return
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

  var orderIndex = 0;
  var order = [1, 2, 3, 4, 2, 1, 3];
  //return categories by order of array "order" + repeat
  function getCategory() {
    orderIndex %= order.length;
    return order[orderIndex];
  }

  //on complete callback function
  function onComplete() {
    //document.documentElement.style.setProperty("--transp", "scaleX(0)");
    document.querySelector("#randomizeButton").classList.remove("disabledBtn");

    //color icon based on result
    if (count === 1) {
      coloring("#1796C2");
    } else if (count === 2) {
      coloring("#02893E");
    } else if (count === 3) {
      coloring("#DB1976");
    } else if (count === 4) {
      coloring("#626B72");
    }
  }

  var timesClicked = 0;
  //on button click functionality
  $("#randomizeButton").click(function () {
    timesClicked++;
    //color to default
    //setTimeout(() => coloring("#2b2765"), 150);

    document.querySelectorAll(".svg01 .st0").forEach((el) => {
      el.style.stroke = "#1796C2";
    });
    document.querySelectorAll(".svg01 .st1").forEach((el) => {
      el.style.stroke = "#1796C2";
    });
    document.querySelectorAll(".svg01 .st2").forEach((el) => {
      el.style.stroke = "#1796C2";
    });
    //++++++++++++//
    document.querySelectorAll(".svg02 .st0").forEach((el) => {
      el.style.stroke = "#02893E";
    });
    document.querySelectorAll(".svg02 .st1").forEach((el) => {
      el.style.stroke = "#02893E";
    });

    //++++++++++//
    document.querySelectorAll(".svg04 .st0").forEach((el) => {
      el.style.stroke = "#DB1976";
    });
    document.querySelectorAll(".svg04 .st1").forEach((el) => {
      el.style.stroke = "#DB1976";
    });
    document.querySelectorAll(".svg04 .st2").forEach((el) => {
      el.style.stroke = "#DB1976";
    });
    //++++++++++//
    document.querySelectorAll(".svg05 .st0").forEach((el) => {
      el.style.stroke = "#1796C2";
    });
    document.querySelectorAll(".svg05 .st1").forEach((el) => {
      el.style.stroke = "#1796C2";
    });

    //++++++++++//
    document.querySelectorAll(".svg06 .st0").forEach((el) => {
      el.style.stroke = "#02893E";
    });

    //++++++++++//
    document.querySelectorAll(".svg07 .st0").forEach((el) => {
      el.style.stroke = "#626B72";
    });
    document.querySelectorAll(".svg07 .st1").forEach((el) => {
      el.style.stroke = "#626B72";
    });
    document.querySelectorAll(".svg07 .st2").forEach((el) => {
      el.style.stroke = "#626B72";
    });
    document.querySelectorAll(".svg07 .st3").forEach((el) => {
      el.style.stroke = "#626B72";
    });

    xlogo.style.transform = "scale(0.7)";
    document.querySelector(".wrap").style.paddingLeft = "0px";
    document.querySelector("#randomizeButton").classList.add("disabledBtn");
    document.documentElement.style.setProperty("--transp", "scaleX(1)");

    if (timesClicked > 1) {
      setTimeout(
        () =>
          document.documentElement.style.setProperty("--transp", "scaleX(0)"),
        250
      );
      setTimeout(() => {
        document.documentElement.style.setProperty("--transp", "scaleX(1)");
      }, 1000);
    }
    // random from 1 to 4 (4 categories)
    //count = Math.floor(Math.random() * 4) + 1;
    count = getCategory();
    orderIndex++;

    if (count === 1) {
      //all
      //setTimeout(coloring("#1796C2"), 500);
      count2 = Math.floor(Math.random() * 7) + 1;
    } else if (count === 2) {
      //all except industry
      //setTimeout(coloring("#02893E"), 500);
      count2 = Math.floor(Math.random() * 6) + 1;
    } else if (count === 3) {
      //all except plane & ship
      //setTimeout(coloring("#DB1976"), 500);
      let arrStrom = [3, 4, 5, 6, 7];
      count2 = arrStrom[Math.floor(Math.random() * arrStrom.length)];
    } else if (count === 4) {
      //only industry
      //setTimeout(coloring("#626B72"), 500);
      count2 = 7;
    }

    machine1.shuffle(5, () => onComplete());
    machine2.shuffle(5, () => onComplete());
  });
});

//used: https://josex2r.github.io/jQuery-SlotMachine/
/******** ********/
