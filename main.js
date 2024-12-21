
const products = [
  { name: "Laptop", price: 999 },
  { name: "Smartphone", price: 499 },
  { name: "Tablet", price: 299 },
  { name: "Headphones", price: 199 },
  { name: "Smartwatch", price: 249 },
];


function filterProductsByPrice() {
  const priceThreshold = parseFloat(document.getElementById("priceThreshold").value);
  
 
  const filteredProducts = products.filter(product => product.price < priceThreshold);
  const mappedProducts = filteredProducts.map(product => product.name.toUpperCase());

  displayProducts(mappedProducts);
}


function displayProducts(productList) {
  const productListElement = document.getElementById("productList");
  productListElement.innerHTML = ""; 

  if (productList.length === 0) {
      productListElement.innerHTML = "<li>No products found</li>";
      return;
  }

  productList.forEach(product => {
      const li = document.createElement("li");
      li.textContent = product;
      productListElement.appendChild(li);
  });
}


function clearProducts() {
  document.getElementById("priceThreshold").value = ""; 
  displayProducts([]); 
}

document.getElementById("filterButton").addEventListener("click", filterProductsByPrice);


document.getElementById("clearButton").addEventListener("click", clearProducts);