import "./styles.scss";

document.addEventListener("DOMContentLoaded", function () {
  const productItems = document.querySelectorAll(".product-card__images-item");
  const productActive = document.getElementById("activeImage");

  productItems.forEach((productItem) => {
    productItem.addEventListener("click", function () {
      productItems.forEach((img) => img.classList.remove("active"));

      this.classList.add("active");

      productActive.src = this.getAttribute("data-full");
    });
  });
});
