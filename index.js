alert("This site is to be best accesed with a laptop")
var neuPos=window.scrollY;
var headerArr=document.getElementsByTagName("header")
var anchorArr=document.getElementsByTagName("a")

//defining what happens when scrolled

function scroll() {
    var currentPos=window.scrollY;
    if (currentPos > neuPos) {
        for (let i = 0; i < headerArr.length; i++) {
            headerArr[i].style.backgroundColor="rgba(252, 123, 2, 0.871)"
            headerArr[i].style.transition="ease 1s"
        }
    } else {
        for (let i = 0; i < headerArr.length; i++) {
            headerArr[i].style.backgroundColor=""
        }
    }

    neuPos=currentPos
}

//defining what happens how a link is hovered

/*function hover() {
    var currentPos=window.scrollY;
    if (currentPos > neuPos) {
        for (let i = 0; i < anchorArr.length; i++) {
                anchorArr[i].addEventListener("mouseenter", function(){
                    anchorArr[i].style.color="blue"
                })
                anchorArr[i].addEventListener("mouseleave", function(){
                    anchorArr[i].style.color=""
                })
    }
    }else{
        for (let i = 0; i < anchorArr.length; i++) {
                anchorArr[i].addEventListener("mouseenter", function(){
                    anchorArr[i].style.color="white"
                })
                anchorArr[i].addEventListener("mouseleave", function(){
                    anchorArr[i].style.color=""
                })
    }
    }
}*/