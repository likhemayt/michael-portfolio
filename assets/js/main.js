/* MOBILE MENU */

const menuBtn=document.getElementById("menuBtn")
const mobileMenu=document.getElementById("mobileMenu")

      menuBtn.onclick=()=>mobileMenu.classList.toggle("hidden")



/* THEME TOGGLE */


const toggle = document.getElementById("themeToggle");
const html = document.documentElement;
const icon = document.getElementById("themeIcon");

/* Load saved theme */

if(localStorage.getItem("theme") === "dark"){
  html.classList.add("dark");
  toggle.checked = true;
  icon.classList.replace("fa-moon","fa-sun");
}

/* Toggle theme */

toggle.addEventListener("change", () => {

  if(toggle.checked){

    html.classList.add("dark");
    localStorage.setItem("theme","dark");
    icon.classList.replace("fa-moon","fa-sun");

  }else{

    html.classList.remove("dark");
    localStorage.setItem("theme","light");
    icon.classList.replace("fa-sun","fa-moon");

  }

});

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

function reveal() {
  document.querySelectorAll(".reveal").forEach(el => {
    let top = el.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);

/* CONTACT FORM */

emailjs.init("75i6JgmkEFR0yNAin");

const form = document.getElementById("contactForm");
const modal = document.getElementById("successModal");
const closeModal = document.getElementById("closeModal");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_jv0d70q", "template_8uhuff8", this)
    .then(() => {
      form.reset();
      modal.classList.remove("hidden");
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to send message.");
    });
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});