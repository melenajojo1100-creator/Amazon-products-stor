function addProduct() {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const image = document.getElementById("image").value;
    const link = document.getElementById("link").value;

    if (!name || !price || !image || !link) {
        alert("Please fill all fields.");
        return;
    }

    const product = {
        name,
        price,
        image,
        link
    };

    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(product);

    localStorage.setItem("products", JSON.stringify(products));

    alert("Product Added Successfully!");

    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("image").value = "";
    document.getElementById("link").value = "";
}
