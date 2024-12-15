const container = document.getElementById("product-container");

// Fetch the productos.json file
let response = await fetch('./js/productos.json');
// Parse the JSON response
let productos = await response.json();

function clear(containerId) {
    let container = document.getElementById(containerId);
    if (container) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    } else {
        console.error(`Element with ID "${containerId}" not found.`);
    }
}

async function displayAllProducts() {
    try {
        // Clear the container before adding new content
        container.innerHTML = '';

        // Loop through all products and create the divs
        productos.forEach(producto => {
            // Create the main div for the product
            let productDiv = document.createElement('div');
            productDiv.classList.add('producto');

            // Create the img element for the product image
            let productImage = document.createElement('img');
            productImage.classList.add('producto-imagen');
            productImage.src = producto.imagen;
            productImage.alt = `Imagen de ${producto.titulo}`;

            // Create the details div for the product title, price, and button
            let productDetailsDiv = document.createElement('div');
            productDetailsDiv.classList.add('producto-detalles');

            // Create the h3 element for the product title
            let productTitle = document.createElement('h3');
            productTitle.classList.add('producto-titulo');
            productTitle.textContent = producto.titulo;

            // Create the p element for the product price
            let productPrice = document.createElement('p');
            productPrice.classList.add('producto-precio');
            productPrice.textContent = `$${producto.precio}`;

            // Create the button to add the product
            let addButton = document.createElement('button');
            addButton.classList.add('producto-agregar');
            addButton.textContent = 'Agregar';

            let productID = producto.id
            addButton.addEventListener('click', function() {
                productoACarrito(productID);
            });

            // Append all elements to the productDetailsDiv
            productDetailsDiv.appendChild(productTitle);
            productDetailsDiv.appendChild(productPrice);
            productDetailsDiv.appendChild(addButton);

            // Append the product image and details to the main product div
            productDiv.appendChild(productImage);
            productDiv.appendChild(productDetailsDiv);

            // Finally, append the productDiv to the container
            container.appendChild(productDiv);
        });

    } catch (error) {
        console.error("Error loading or processing the products:", error);
    }
}

async function displayProductsByCategory(categoriaId) {
    try {
        // Clear the container before adding new content
        container.innerHTML = '';

        // Filter products by category
        let filteredProducts = productos.filter(producto => producto.categoria.id === categoriaId);

        // Loop through the filtered products and create the divs
        filteredProducts.forEach(producto => {
            // Create the main div for the product
            let productDiv = document.createElement('div');
            productDiv.classList.add('producto');

            // Create the img element for the product image
            let productImage = document.createElement('img');
            productImage.classList.add('producto-imagen');
            productImage.src = producto.imagen;
            productImage.alt = `Imagen de ${producto.titulo}`;

            // Create the details div for the product title, price, and button
            let productDetailsDiv = document.createElement('div');
            productDetailsDiv.classList.add('producto-detalles');

            // Create the h3 element for the product title
            let productTitle = document.createElement('h3');
            productTitle.classList.add('producto-titulo');
            productTitle.textContent = producto.titulo;

            // Create the p element for the product price
            let productPrice = document.createElement('p');
            productPrice.classList.add('producto-precio');
            productPrice.textContent = `$${producto.precio}`;

            // Create the button to add the product
            let addButton = document.createElement('button');
            addButton.classList.add('producto-agregar');
            addButton.textContent = 'Agregar';
            
            let productID = producto.id
            addButton.addEventListener('click', function() {
                productoACarrito(productID);
            });

            // Append all elements to the productDetailsDiv
            productDetailsDiv.appendChild(productTitle);
            productDetailsDiv.appendChild(productPrice);
            productDetailsDiv.appendChild(addButton);

            // Append the product image and details to the main product div
            productDiv.appendChild(productImage);
            productDiv.appendChild(productDetailsDiv);

            // Append the productDiv to the container
            container.appendChild(productDiv);
        });

    } catch (error) {
        console.error("Error loading or processing the products:", error);
    }
}

function turnActive(id){
    let activeButton = document.querySelector('.active');
            if (activeButton) {
                activeButton.classList.remove('active');
            }
    document.getElementById(id). className = "boton-menu boton-categoria active";
}

const carrito = [];

function productoACarrito(idProducto) {
    const productoSeleccionado = productos.find(producto => producto.id === idProducto);
    if (productoSeleccionado) {
        const productoEnCarrito = carrito.find(producto => producto.id === idProducto);
        if (!productoEnCarrito) {
            carrito.push({ ...productoSeleccionado, cantidad: 1 });
        } else {
            productoEnCarrito.cantidad++;
        }
        actualizarNCarrito();
    } else {
        console.error("El producto no existe");
    }
}

function actualizarNCarrito() {
    const numerito = document.getElementById("numerito");
    numerito.textContent = carrito.length;
}

const menu = document.querySelector(".aside-visible")

function menuHandle() {
    if(menu.style.display == "flex"){
        menu.style.display = "none"
    } else{
        menu.style.display = "flex"
    }
}

const open = document.querySelector("#open-menu");
open.addEventListener("click", () => {
    menuHandle()
})

const close = document.querySelector("#close-menu")
close.addEventListener("click", () => {
    menuHandle()
})

displayAllProducts()

let todos = document.querySelector("#todos")
todos.addEventListener("click", () => {
    displayAllProducts()
    turnActive('todos')
})

let todosMoviles = document.querySelector("#moviles")
todosMoviles.addEventListener("click", () => {
    displayProductsByCategory('moviles')
    turnActive('moviles')
})

let todosPortatiles = document.querySelector("#portatiles")
todosPortatiles.addEventListener("click", () => {
    displayProductsByCategory('portatiles')
    turnActive('portatiles')
})

let todosTelevisores = document.querySelector("#televisiones")
todosTelevisores.addEventListener("click", () => {
    displayProductsByCategory('televisiones')
    turnActive('televisiones')
});