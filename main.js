window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("product-grid");

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <strong>$${product.price}</strong>
      <button class="snipcart-add-item"
        data-item-id="${product.id}"
        data-item-price="${product.price}"
        data-item-url="/"
        data-item-description="${product.description}"
        data-item-image="${product.image}"
        data-item-name="${product.name}">
        Add to Cart
      </button>
    `;

    container.appendChild(card);
  });
});
