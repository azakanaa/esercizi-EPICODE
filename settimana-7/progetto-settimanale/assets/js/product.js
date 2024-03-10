const title = document.getElementById('title');
const name = document.getElementById('name');
const brand = document.getElementById('brand');
const imageURL = document.getElementById('imageURL');
const description = document.getElementById('description');
const price = document.getElementById('price');
const deleteBtn = document.getElementById('deleteBtn');
const submitBtn = document.getElementById('submitBtn');

const apiUrl = 'https://striveschoole-api.herokuapp.com/api/product/';
const headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGJlNTJkN2IxMTAwMTkwZTZkZmMiLCJpYXQiOjE3MTAwNjAwODQsImV4cCI6MTcxMTI2OTY4NH0.YYXoHMU02yb2dAiQJfWg-WxvF0hNFxY_IBKyaUethZI"
});

