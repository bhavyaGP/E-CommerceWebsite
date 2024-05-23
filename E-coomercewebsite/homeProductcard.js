

const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

export const showproductcard = (products) => {
    if (!products) {
        return false;
    }

    products.forEach((curProd) => {
        const { brand, category, description, id, image, name, price, stock } =
            curProd;

        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productStock").textContent = stock;
        productClone.querySelector(".productPrice").textContent += price;
        productClone.querySelector(".productDescription").textContent = description;
        productClone.querySelector(".productActualPrice").textContent = `$${price * 2}`;
        productContainer.appendChild(productClone);
    });
};












// import { addToCart } from "./addToCart";
// import { homeQuantityToggle } from "./homeQuantityToggle";