const header = document.getElementById("nav-header");
const burgerIcon = document.querySelector(".burger-icon");

const handleNavbar = () => {
  const headerClasses = header.classList;
  if (headerClasses.contains("active")) {
    header.classList.remove("active");
  } else {
    header.classList.add("active");
  }
};

burgerIcon.addEventListener("click", handleNavbar);
