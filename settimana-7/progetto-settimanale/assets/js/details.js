const productDetail = document.getElementById('productDetail');
let productId;
let product;

const apiUrl = 'https://striveschoole-api.herokuapp.com/api/product/';
const headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGJlNTJkN2IxMTAwMTkwZTZkZmMiLCJpYXQiOjE3MTAwNjAwODQsImV4cCI6MTcxMTI2OTY4NH0.YYXoHMU02yb2dAiQJfWg-WxvF0hNFxY_IBKyaUethZI"
});

window.addEventListener('load', function () {
    loadProductDetail();
})


const loadProductDetail = async (productId) => {
    try {
        let response = await fetch(apiUrl + productId, { headers });
        product = await response.json();
        printProductDetail();
    } catch (error) {
        console.error(error);
    }
}


const printProductDetail = () => {
    productDetail.innerHTML = `
    <div class="col-6 text-center">
        <img src=${product.imageUrl}" width="100%" />
    </div>
    <div class="col-6">
        <h6>${product.brand}</h6>
        <h2>${product.name}</h2>
        <span class="badge bg-dark text-warning">${product.price}€</span>
        <p class="mt-4">${product.description}</p>
    </div>
    `
}
