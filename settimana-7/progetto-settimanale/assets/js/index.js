const cards = document.getElementById('cards');
let list = [];
const apiUrl = 'https://striveschoole-api.herokuapp.com/api/product/';
const headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGJlNTJkN2IxMTAwMTkwZTZkZmMiLCJpYXQiOjE3MTAwNjAwODQsImV4cCI6MTcxMTI2OTY4NH0.YYXoHMU02yb2dAiQJfWg-WxvF0hNFxY_IBKyaUethZI"
});

window.addEventListener('load', async function () {
    const spinner = document.getElementById('spinner');

    try {
        const response = await this.fetch(apiUrl);
        if(!response.ok) {
            throw new Error('errore nella richiesta');
        }
        const data = await response.json();
        spinner.style.display = 'none';
    } catch (error) {
        console.error(error);
        spinner.style.display = 'none';
    }
});

const printCards = (products) => {
    cards.innerHTML = '';
    products.forEach(products => {
        const card = `
        <div class="col">
            <div class="card">
                <img src="${product.imageURL}" class="card-img-top" alt="Foto ${product.name}" />
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <a href="product.html?id=${product._id}" class="btn btn-warning me-2 mb-1">Modifica</a>
                    <a href="details.html?id=${product._id}" class="btn btn-info">Scopri di più</a>
                </div>
            </div>
        </div>
        `;
        cards.innerHTML += card;
    })
}