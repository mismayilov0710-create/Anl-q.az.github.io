// Mobil menyu üçün
const menuBtn = document.querySelector("#menu-btn");
const nav = document.querySelector("nav ul");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

// Xəbərin davamını göstərmək üçün
const readMoreLinks = document.querySelectorAll(".read-more");

readMoreLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const moreText = this.previousElementSibling;
    if (moreText.style.display === "block") {
      moreText.style.display = "none";
      this.innerText = "Davamını oxu →";
    } else {
      moreText.style.display = "block";
      this.innerText = "Bağla ↑";
    }
  });
});