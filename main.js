import "./assets/scss/all.scss";

const testRoute1 = document.querySelector(".test_route1");
const testRoute2 = document.querySelector(".test_route2");

testRoute1.style.backgroundImage = "url(/assets/images/blog-1.png)";
testRoute2.style.backgroundImage = "url(/assets/images/blog-2.png)";

const seriesOpticalBtn = document.getElementById("series_optical");
seriesOpticalBtn.addEventListener("click", () => {
  localStorage.setItem("seriesType", "optical");
});

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
