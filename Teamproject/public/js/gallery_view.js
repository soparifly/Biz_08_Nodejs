document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const insertBtn = document.getElementById("btn_insert");
  const modal_window = document.getElementsByClassName("modal_window");

  insertBtn.addEventListener("click", () => {
    if (insertBtn) {
      modal.style.display = "flex";
    }
  });
  modal.addEventListener("click", (e) => {
    const evTarget = e.target;
    if (evTarget.classList.contains("modal_overlay")) {
      modal.style.display = "none";
    }
  });
});
