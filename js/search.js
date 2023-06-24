// function to display local date and time
function local() {
        document.getElementById('localTime').innerHTML = Date();
        setTimeout(local,100);
      }
      local();

//function to toggle first image of research page
function toggle() {
        var f1 = document.getElementById("1");
        var f2 = document.getElementById("2");
        
        if (f1.style.display == "none") {
          f1.style.display = "block";
          f2.style.display = "none";
        } 
        else {
          f1.style.display = "none";
          f2.style.display = "block";
        }
      }
      document.getElementById("1").style.display = "block";

//function to toggle second image of research page
function toggle1() {
        var f3 = document.getElementById("3");
        var f4 = document.getElementById("4");
        
        if (f3.style.display == "none") {
          f3.style.display = "block";
          f4.style.display = "none";
        } 
        else {
          f3.style.display = "none";
          f4.style.display = "block";
        }
      }
      document.getElementById("3").style.display = "block";

//function to toggle third image of research page
function toggle2() {
        var f5 = document.getElementById("5");
        var f6 = document.getElementById("6");
        
        if (f5.style.display == "none") {
          f5.style.display = "block";
          f6.style.display = "none";
        } 
        else {
          f5.style.display = "none";
          f6.style.display = "block";
        }
      }
      document.getElementById("5").style.display = "block";

//function to toggle fourth image of research page
function toggle3() {
        var f7 = document.getElementById("7");
        var f8 = document.getElementById("8");
        
        if (f7.style.display == "none") {
          f7.style.display = "block";
          f8.style.display = "none";
        } 
        else {
          f7.style.display = "none";
          f8.style.display = "block";
        }
      }
      document.getElementById("7").style.display = "block";

//function to toggle fifth image of research page
function toggle4() {
        var f9 = document.getElementById("9");
        var f10 = document.getElementById("10");
        
        if (f9.style.display == "none") {
          f9.style.display = "block";
          f10.style.display = "none";
        } 
        else {
          f9.style.display = "none";
          f10.style.display = "block";
        }
      }
      document.getElementById("9").style.display = "block";