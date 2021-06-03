const listBtn = document.querySelector(".list");
const ulList = document.querySelector(".ul-list");
listBtn.addEventListener('click', () => {
    if (ulList.style.display === "none"){
    ulList.style.display = "flex";
    }else{
        ulList.style.display = "none";
    }
});

var navbar = document.querySelector('.nav-bar');
var sticky = navbar.offsetTop;
window.onscroll = () =>{
    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  };
  