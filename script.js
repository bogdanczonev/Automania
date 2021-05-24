// burger

const burger = document.getElementById('burger');

const nav = document.getElementById('nav')

let isOpen = false

const managementMenu = () => {
  isOpen = !isOpen
  if (isOpen) {
    nav.style.display = 'flex'
    burger.className = 'burger-menu active'
  } else {
    burger.className = 'burger-menu'
    nav.style.display = 'none'
  }
}


// scroll

const scrollToElement = (id) => {
  document.getElementById(id).scrollIntoView({ block: "start", behavior: "smooth" });
  console.log(id)
}


