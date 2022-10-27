    var menu = document.getElementById("nav-links");
    function show(){
        menu.style.display = "block";
        setTimeout(function(){
            menu.style.right = "0";
        },0.1000);
    }
    function hide(){
        menu.style.right = "-200px";
        setTimeout(function(){
            menu.style.display = "none";
        },1000);
    }
