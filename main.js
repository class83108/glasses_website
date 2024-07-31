import "./assets/scss/all.scss";

const chooseTypeBtns = document.querySelectorAll(".choose_type_btn");

if (chooseTypeBtns) {
  chooseTypeBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const value = e.target.getAttribute("data-target");
      localStorage.setItem("seriesType", value);
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const seriesType = localStorage.getItem("seriesType");
    if (seriesType) {
      const targetBtn = document.getElementById(seriesType);
      targetBtn.classList.add("series_active");
    }
  });
}
