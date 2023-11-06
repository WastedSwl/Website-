const form = document.getElementById("form");
const heading = document.getElementById("heading");
heading.onclick = (e) => {
  form.classList.toggle('open')
}
const inputDiv = document.getElementById("input");
const popupDiv = document.getElementById("popup");

inputDiv.addEventListener("click", function(event) {
  event.stopPropagation(); // Предотвращает всплытие события
  popupDiv.style.display = "block";
});

popupDiv.addEventListener("click", function() {
  popupDiv.style.display = "none";
});

// Закрытие всплывающего окна при клике за его пределами
document.addEventListener("click", function(event) {
  if (event.target !== inputDiv && event.target !== popupDiv) {
    popupDiv.style.display = "none";
  }
});