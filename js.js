const humburger = document.getElementsByClassName("navbar-toggler-icon")
const navList = document.getElementById("navbarSupportedContent")

humburger.addEventListener("click", () => {
  navList.classList.toggle("nan")
})
