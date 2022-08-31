window.addEventListener("DOMContentLoaded", function(){
    // Get toggle button
const btnToggle = document.querySelectorAll('.toggle-btn')

const nav = document.querySelector('.nav')
const navbar = document.querySelector('.navbar')

// Get navbarMenu
const navLists = document.querySelectorAll('.navbar-list')

// Listen for click event on navLists
navLists.forEach(item => {
  item.addEventListener('click', (e) => {
    // eslint-disable-next-line no-undef
    toggle(btn, 0, 'navAnimationUp')
  })
})

// Listen for click event on btnToggle
btnToggle.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()

    const currentBtn = btn.dataset.id

    if (currentBtn === 'open') {
      toggle(btn, 1, 'navAnimationDown')
      nav.style.backgroundColor = "rgb(55,134,229)"
      navbar.style.display = "block";
    }
    if (currentBtn === 'close') {
      toggle(btn, 0, 'navAnimationUp')
      navbar.style.display = "none";
    }
  })
})

// Toggle btn,navmenu and navbar
function toggle (item, value, animation) {
  item.classList.toggle('active')
  btnToggle[value].classList.add('active')
  nav.style.animation = `${animation} .4s linear forwards`
}

this.addEventListener("scroll", function(){
  if(window.pageYOffset > "469"){
    nav.style.backgroundColor = "rgb(55,134,229)"
  }else{
    nav.style.backgroundColor = "transparent"
  }
})

})
