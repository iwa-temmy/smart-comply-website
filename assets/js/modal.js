const demoBtns = document.querySelectorAll(".demo-btn");
const modal = document.getElementById("modal");
const backdrop = document.getElementById("modal-backdrop");

const handleModalOpen = () => {
  modal.classList.add("open");
  modal.classList.remove("close");
};
const handleModalClose = () => {
  modal.classList.add("close");
  modal.classList.remove("open");
};

demoBtns.forEach(btn => btn.addEventListener("click", handleModalOpen));
backdrop.addEventListener("click", handleModalClose);
