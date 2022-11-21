
    filterSelection("all")
    function filterSelection(c) {
      var x, i;
      x = document.getElementsByClassName("filterDiv");
      if (c == "all") c = "";
      for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
      }
    }
    
    function AddClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
      }
    }
    
    function RemoveClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);     
        }
      }
      element.className = arr1.join(" ");
    }
    
    // Add active class to the current button (highlight it)
    var btnContainer = document.getElementById("myBtnContainer");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
//panier
var panier= document.getElementById("choix");
var PRODUIT1 = 1, PRODUIT2 = 1, PRODUIT3 = 1,PRODUIT4 = 1,PRODUIT5 = 1, PRODUIT6 = 1, PRODUIT7 = 1,PRODUIT8 = 1,PRODUIT9 = 1, salade1qu = 1, soda1 = 1, the1qu = 1,the2qu=1, PLAT1qu = 1, jus1 = 1, totalP = 0;

function SUSHI(){
    var coc = document.querySelectorAll("#choix1");
    for(var j = 0; j < coc.length; j++){
        coc[j].style.display = "none";
    }
    var div = document.createElement("div");
    div.setAttribute("id", "choix1");
    div.setAttribute("class", "choix1");
    var text1 = document.createElement("h3");
    var text2 = document.createElement("h3");
    var text3 = document.createElement("h3");
    text1.innerText = "SUSHI";
    text2.innerText = "x"+PRODUIT1;
    text3.innerText = "25Dh";
    totalP += 25;
    div.appendChild(text1);
    div.appendChild(text2);
    div.appendChild(text3);
    div.style.display = "flex";
    div.style.gap = "20px";
    panier.appendChild(div);
    PRODUIT1++;
}
function SUSHI1(){
  var coc = document.querySelectorAll("#choix2");
  for(var j = 0; j < coc.length; j++){
      coc[j].style.display = "none";
  }
  var div = document.createElement("div");
  div.setAttribute("id", "choix2");
  div.setAttribute("class", "choix2");
  var text1 = document.createElement("h3");
  var text2 = document.createElement("h3");
  var text3 = document.createElement("h3");
  text1.innerText = "SUSHI 1";
  text2.innerText = "x"+ PRODUIT2 ;
  text3.innerText = "25Dh";
  totalP += 25;
  div.appendChild(text1);
  div.appendChild(text2);
  div.appendChild(text3);
  div.style.display = "flex";
  div.style.gap = "20px";
  panier.appendChild(div);
  PRODUIT2++;
}
function SUSHI2(){
  var coc = document.querySelectorAll("#choix3");
  for(var j = 0; j < coc.length; j++){
      coc[j].style.display = "none";
  }
  var div = document.createElement("div");
  div.setAttribute("id", "choix3");
  div.setAttribute("class", "choix3");
  var text1 = document.createElement("h3");
  var text2 = document.createElement("h3");
  var text3 = document.createElement("h3");
  text1.innerText = "SUSHI 2";
  text2.innerText = "x"+ PRODUIT3 ;
  text3.innerText = "25Dh";
  totalP += 25;
  div.appendChild(text1);
  div.appendChild(text2);
  div.appendChild(text3);
  div.style.display = "flex";
  div.style.gap = "20px";
  panier.appendChild(div);
  PRODUIT3++;
}
function SUSHI3(){
  var coc = document.querySelectorAll("#choix4");
  for(var j = 0; j < coc.length; j++){
      coc[j].style.display = "none";
  }
  var div = document.createElement("div");
  div.setAttribute("id", "choix4");
  div.setAttribute("class", "choix4");
  var text1 = document.createElement("h3");
  var text2 = document.createElement("h3");
  var text3 = document.createElement("h3");
  text1.innerText = "SUSHI 3";
  text2.innerText = "x"+ PRODUIT4 ;
  text3.innerText = "25Dh";
  totalP += 25;
  div.appendChild(text1);
  div.appendChild(text2);
  div.appendChild(text3);
  div.style.display = "flex";
  div.style.gap = "20px";
  panier.appendChild(div);
  PRODUIT4++;
}

function SUSHI4(){
  var coc = document.querySelectorAll("#choix5");
  for(var j = 0; j < coc.length; j++){
      coc[j].style.display = "none";
  }
  var div = document.createElement("div");
  div.setAttribute("id", "choix5");
  div.setAttribute("class", "choix5");
  var text1 = document.createElement("h3");
  var text2 = document.createElement("h3");
  var text3 = document.createElement("h3");
  text1.innerText = "SUSHI 4";
  text2.innerText = "x"+ PRODUIT5 ;
  text3.innerText = "25Dh";
  totalP += 25;
  div.appendChild(text1);
  div.appendChild(text2);
  div.appendChild(text3);
  div.style.display = "flex";
  div.style.gap = "20px";
  panier.appendChild(div);
  PRODUIT5++;
}
function SUSHI5(){
  var coc = document.querySelectorAll("#choix6");
  for(var j = 0; j < coc.length; j++){
      coc[j].style.display = "none";
  }
  var div = document.createElement("div");
  div.setAttribute("id", "choix6");
  div.setAttribute("class", "choix6");
  var text1 = document.createElement("h3");
  var text2 = document.createElement("h3");
  var text3 = document.createElement("h3");
  text1.innerText = "SUSHI 5";
  text2.innerText = "x"+PRODUIT6;
  text3.innerText = "25Dh";
  totalP += 25;
  div.appendChild(text1);
  div.appendChild(text2);
  div.appendChild(text3);
  div.style.display = "flex";
  div.style.gap = "20px";
  panier.appendChild(div);
  PRODUIT6++;
}
function SUSHI6(){
  var coc = document.querySelectorAll("#choix7");
  for(var j = 0; j < coc.length; j++){
      coc[j].style.display = "none";
  }
  var div = document.createElement("div");
  div.setAttribute("id", "choix7");
  div.setAttribute("class", "choix7");
  var text1 = document.createElement("h3");
  var text2 = document.createElement("h3");
  var text3 = document.createElement("h3");
  text1.innerText = "SUSHI 6";
  text2.innerText = "x"+PRODUIT7;
  text3.innerText = "25Dh";
  totalP += 25;
  div.appendChild(text1);
  div.appendChild(text2);
  div.appendChild(text3);
  div.style.display = "flex";
  div.style.gap = "20px";
  panier.appendChild(div);
  PRODUIT7++;
}
function SUSHI7(){
  var coc = document.querySelectorAll("#choix8");
  for(var j = 0; j < coc.length; j++){
      coc[j].style.display = "none";
  }
  var div = document.createElement("div");
  div.setAttribute("id", "choix8");
  div.setAttribute("class", "choix8");
  var text1 = document.createElement("h3");
  var text2 = document.createElement("h3");
  var text3 = document.createElement("h3");
  text1.innerText = "SUSHI 7";
  text2.innerText = "x"+PRODUIT8;
  text3.innerText = "25Dh";
  totalP += 25;
  div.appendChild(text1);
  div.appendChild(text2);
  div.appendChild(text3);
  div.style.display = "flex";
  div.style.gap = "20px";
  panier.appendChild(div);
  PRODUIT8++;
}
function SUSHI8(){
  var coc = document.querySelectorAll("#choix9");
  for(var j = 0; j < coc.length; j++){
      coc[j].style.display = "none";
  }
  var div = document.createElement("div");
  div.setAttribute("id", "choix9");
  div.setAttribute("class", "choix9");
  var text1 = document.createElement("h3");
  var text2 = document.createElement("h3");
  var text3 = document.createElement("h3");
  text1.innerText = "SUSHI 8";
  text2.innerText = "x"+PRODUIT9;
  text3.innerText = "25Dh";
  totalP += 25;
  div.appendChild(text1);
  div.appendChild(text2);
  div.appendChild(text3);
  div.style.display = "flex";
  div.style.gap = "20px";
  panier.appendChild(div);
  PRODUIT9++;
}
function salade1(){
    var coc = document.querySelectorAll("#SM");
    for(var j = 0; j < coc.length; j++){
        coc[j].style.display = "none";
    }
    var div = document.createElement("div");
    div.setAttribute("id", "SM");
    div.setAttribute("class", "rows");
    var text1 = document.createElement("h3");
    var text2 = document.createElement("h3");
    var text3 = document.createElement("h3");
    text1.innerText = "Salade";
    text2.innerText = "x"+salade1qu;
    text3.innerText = "25Dh";
    totalP+=25;
    div.appendChild(text1);
    div.appendChild(text2);
    div.appendChild(text3);
    div.style.display = "flex";
    div.style.gap = "20px";
    panier.appendChild(div);
    salade1qu++;
}

function coca(){
  var coc = document.querySelectorAll("#cola");
  for(var j = 0; j < coc.length; j++){
      coc[j].style.display = "none";
  }
  var div = document.createElement("div");
  div.setAttribute("id", "cola");
  div.setAttribute("class", "cola");
  var text1 = document.createElement("h3");
  var text2 = document.createElement("h3");
  var text3 = document.createElement("h3");
  text1.innerText = "COCACOLA";
  text2.innerText = "x"+soda1;
  text3.innerText = "15Dh";
  totalP += 15;
  div.appendChild(text1);
  div.appendChild(text2);
  div.appendChild(text3);
  div.style.display = "flex";
  div.style.gap = "20px";
  panier.appendChild(div);
  soda1++;
}
function plat1(){
  var coc = document.querySelectorAll("#plat");
  for(var j = 0; j < coc.length; j++){
      coc[j].style.display = "none";
  }
  var div = document.createElement("div");
  div.setAttribute("id", "plat");
  div.setAttribute("class", "plat");
  var text1 = document.createElement("h3");
  var text2 = document.createElement("h3");
  var text3 = document.createElement("h3");
  text1.innerText = "Plat hitaka";
  text2.innerText = "x"+PLAT1qu;
  text3.innerText = "400Dh";
  totalP += 400;
  div.appendChild(text1);
  div.appendChild(text2);
  div.appendChild(text3);
  div.style.display = "flex";
  div.style.gap = "20px";
  panier.appendChild(div);
  PLAT1qu++;
}
function the(){
  var coc = document.querySelectorAll("#the1");
  for(var j = 0; j < coc.length; j++){
      coc[j].style.display = "none";
  }
  var div = document.createElement("div");
  div.setAttribute("id", "the1");
  div.setAttribute("class", "the1");
  var text1 = document.createElement("h3");
  var text2 = document.createElement("h3");
  var text3 = document.createElement("h3");
  text1.innerText = "Cocktail the";
  text2.innerText = "x"+the1qu;
  text3.innerText = "25Dh";
  totalP += 25;
  div.appendChild(text1);
  div.appendChild(text2);
  div.appendChild(text3);
  div.style.display = "flex";
  div.style.gap = "20px";
  panier.appendChild(div);
  the1qu++;
}
function the1(){
  var coc = document.querySelectorAll("#the2");
  for(var j = 0; j < coc.length; j++){
      coc[j].style.display = "none";
  }
  var div = document.createElement("div");
  div.setAttribute("id", "the2");
  div.setAttribute("class", "the2");
  var text1 = document.createElement("h3");
  var text2 = document.createElement("h3");
  var text3 = document.createElement("h3");
  text1.innerText = "THE VERT  ";
  text2.innerText = "x"+the2qu;
  text3.innerText = "20Dh";
  totalP += 20;
  div.appendChild(text1);
  div.appendChild(text2);
  div.appendChild(text3);
  div.style.display = "flex";
  div.style.gap = "20px";
  panier.appendChild(div);
  the2qu++;
}
function jus(){
  var coc = document.querySelectorAll("#jus");
  for(var j = 0; j < coc.length; j++){
      coc[j].style.display = "none";
  }
  var div = document.createElement("div");
  div.setAttribute("id", "jus");
  div.setAttribute("class", "jus");
  var text1 = document.createElement("h3");
  var text2 = document.createElement("h3");
  var text3 = document.createElement("h3");
  text1.innerText = "jus  ";
  text2.innerText = "x"+jus1;
  text3.innerText = "25Dh";
  totalP += 25;
  div.appendChild(text1);
  div.appendChild(text2);
  div.appendChild(text3);
  div.style.display = "flex";
  div.style.gap = "20px";
  panier.appendChild(div);
  jus1++;
}

function total(){
  let divT = document.querySelector("#choix");
  alert(totalP+ "DH");
  while (divT.hasChildNodes()) {
    divT.removeChild(divT.firstChild)
}
}
