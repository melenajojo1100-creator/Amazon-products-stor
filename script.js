const products = [
  {
    name: "Wireless Earbuds",
    price: "$29.99",
    image: "https://via.placeholder.com/300x300?text=Product+1",
    link: "https://www.amazon.com/"
  },
  {
    name: "Smart Watch",
    price: "$49.99",
    image: "https://via.placeholder.com/300x300?text=Product+2",
    link: "https://www.amazon.com/"
  }
];

const productBox = document.getElementById("products");

products.forEach(product => {
  productBox.innerHTML += `
    <div class="product">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <a href="${product.link}" target="_blank">Buy on Amazon</a>
    </div>
  `;
});
