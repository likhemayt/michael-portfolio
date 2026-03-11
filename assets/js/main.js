/* MOBILE MENU */

const menuBtn=document.getElementById("menuBtn")
const mobileMenu=document.getElementById("mobileMenu")

menuBtn.onclick=()=>mobileMenu.classList.toggle("hidden")



/* DARK MODE */

const toggle = document.getElementById("themeToggle")
const html = document.documentElement
const body = document.getElementById("body")

function enableDark(){
    html.classList.add("dark")
    body.classList.remove("gradient-bg")
    body.classList.add("bg-gray-900")
    toggle.innerHTML="☀️"
    localStorage.setItem("theme","dark")
}

function enableLight(){
    html.classList.remove("dark")
    body.classList.remove("bg-gray-900")
    body.classList.add("gradient-bg")
    toggle.innerHTML="🌙"
    localStorage.setItem("theme","light")
}

toggle.onclick=()=>{
    if(html.classList.contains("dark")){
        enableLight()
    }else{
        enableDark()
    }
}

if(localStorage.getItem("theme")==="dark"){
    enableDark()
}

/* LOAD SAVED THEME */

if(localStorage.getItem("theme")==="dark"){
      enableDark()
}


/* TYPING HERO */

    const text=[
    "WordPress Developer",
    "Elementor Specialist",
    "Frontend Developer",
    "Freelancer"
    ]

    let i=0
    let j=0
    let current=""
    let isDeleting=false

function type(){

    current=text[i]

    if(isDeleting){
        j--
    }else{
        j++
    }

    document.getElementById("typing").textContent=current.substring(0,j)

    if(!isDeleting && j===current.length){
        isDeleting=true
        setTimeout(type,1000)
    return
    }

    if(isDeleting && j===0){
        isDeleting=false
        i=(i+1)%text.length
    }

    setTimeout(type,isDeleting?50:100)

}

type()



/* PROJECT FILTER */

const filters=document.querySelectorAll(".filterBtn")
const projects=document.querySelectorAll(".project")

filters.forEach(btn=>{

    btn.onclick=()=>{

        let filter=btn.dataset.filter

        projects.forEach(p=>{

            if(filter==="all"||p.dataset.category===filter){
                p.style.display="block"
            }else{
                p.style.display="none"
            }

        })

    }

})



/* SCROLL REVEAL */

function reveal(){

document.querySelectorAll(".reveal").forEach(el=>{

let top=el.getBoundingClientRect().top
let windowHeight=window.innerHeight

if(top<windowHeight-100){
el.classList.add("active")
}

})

}

window.addEventListener("scroll",reveal)