const productContainer = document.querySelector('#productContainer');
const productTemplate = document.querySelector('#productTemplate');





export const showproductcard = (product) => {
    if(!product) return;

    product.forEach((currpro)=>{
        const {brand, category, description, id, image, name, price, stock } = currpro;
        

    })


};