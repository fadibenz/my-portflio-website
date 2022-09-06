
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

// const btn = document.querySelector(".mail")
// const cont = document.querySelector(".containerr")

// btn.addEventListener("click",()=>{
//     cont.classList.toggle("show-nav")
// })


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
