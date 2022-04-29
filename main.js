const openMenu = document.getElementById("open-menu");
openMenu.addEventListener("click",
    function(){
        document.getElementsByClassName("hamburger-menu")[0].style.display = "block";
    }
);

const closeMenu = document.getElementById("close-menu");
closeMenu.addEventListener("click", 
    function(){
        document.getElementsByClassName("hamburger-menu")[0].style.display = "none";
    }
);