
function changeInnerText(){

  var h1 = document.getElementById("change-h1");

  h1.innerText = "Hello World" ;
}



function changeInnerHTML(){

  var h1 = document.getElementById("ill2");

  var oldText = h1.innerText;
  h1.innerHTML = `<i>${oldText}</i>`

}

function changeInnerHTML_2(){

  var h1 = document.getElementById("change-html-h1");
  var oldText = h1.innerText;
  h1.innerHTML = `<u>${oldText}</u>`
}


function changeStyles(){
  var h1 = document.getElementById("ill3");
  h1.style.color = "red";
  h1.style.fontSize = "40px";
  h1.style.textDecoration = "underline wavy rgb(201, 20, 130)";
}

function confirmName_ForDOM(){
  var name = prompt("Enter your name: ") ;
  if (name != "") {
    if  (confirm(`Are you ${name}? `)) {
      // alert(`Welcome ${name}`);
      return name ;
    }
    else{
      return false ;

    }
  }

  else {
    // alert("Acess Denied.")
    return false
  }

  }

function grabH2(value){
  var h2 = document.getElementById("illEx") ;

  if (value != false){
    h2.innerText = value ;

  }
  else{
    h2.innerText = "AccesDenied";
    h2.style.color = "red" ;
  }

}

function changeStylesM1(){
  var h3  = document.getElementById("ill5") ;
  var oldClass = h3.getAttribute("class");
  h3.setAttribute("class",`h2-red ${oldClass}`);
}


function changeStylesM2(){
  var h2  = document.getElementById("ill6") ;
  h2.classList.add("h2-red")

}

changeInnerText();
changeInnerHTML();
changeInnerHTML_2();
changeStyles();
changeStylesM1();
changeStylesM2();
// console.log(confirmName_ForDOM());

// grabH2(confirmName_ForDOM()) ;
