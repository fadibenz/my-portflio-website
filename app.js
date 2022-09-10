
// preloader
const pre = document.querySelector(".preloader")

window.addEventListener("load",()=>{
    pre.classList.add("hide-preloader")
})

// cookie 
const accept = document.querySelector(".Cookie-Button")
const cookieFull = document.querySelector(".cookie-full")
const cookieBite = document.querySelector(".cookie-bite")
const cookieWrap = document.querySelector(".Cookie-Wrapper")
accept.addEventListener("click",()=>{
    cookieFull.classList.add("hide-cookie")
    cookieBite.classList.add("show-cookie")
    setTimeout(hideWrap,150)
})

function hideWrap(){
    cookieWrap.classList.add("hide-wrap")
}

// toggle list 

const btn = document.querySelector(".toggle")
const cont = document.querySelector(".containerr")
const nav = document.querySelector(".nav-bar")
btn.addEventListener("click",()=>{
    nav.classList.toggle("show-nav")
    cont.classList.toggle("show-cont")

})


// modal 

const closePop = document.querySelector(".close-popup")
const btnPro = document.querySelector(".projects")
const popupWrap = document.querySelector(".popup-wrapper")

btnPro.addEventListener("click",()=>{
    popupWrap.classList.add("show-popup")
})

closePop.addEventListener("click",()=>{
    popupWrap.classList.remove("show-popup")
})

//smooth scroll 

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = nav.getBoundingClientRect().height;
    const containerHeight = cont.getBoundingClientRect().height;
    let position = element.offsetTop - navHeight;

    position = position + containerHeight;

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    nav.classList.remove("show-nav") 
    cont.classList.remove("show-cont")
  });
});