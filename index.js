const alert = document.querySelector(".alert");
const emailInput = document.getElementById("email");
const btn = document.getElementById("btn");
const container = document.querySelector(".container");
const btn2 = document.querySelector(".btn2");
const success = document.querySelector(".success");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  alert.style.visibility = "hidden";
  if (!emailInput.value.trim()) {
    alert.style.visibility = "visible";
    emailInput.style.border = "2px solid var(---primary)";
    emailInput.style.background = "var(---alert)";
    emailInput.style.color = "var(---primary)";
  } else {
    emailInput.style.border = "1px solid rgba(182, 181, 181, 0.918)";
    container.classList.add("hide");
    success.classList.remove("hide");
  }
});
btn2.addEventListener("click", (e) => {
  e.preventDefault();
  success.classList.add("hide");
  container.classList.remove("hide");
});
