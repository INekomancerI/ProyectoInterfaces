const products = [
    { title: "Portatil 01"  , price: "$1000", imgSrc: "./img/portatiles/01.jpg" },
    { title: "Portatil 02"  , price: "$1200", imgSrc: "./img/portatiles/02.jpg" },
    { title: "Portatil 03"  , price: "$1500", imgSrc: "./img/portatiles/03.jpg" },
    { title: "Portatil 04"  , price: "$1800", imgSrc: "./img/portatiles/04.jpg" },
    { title: "Portatil 05"  , price: "$2200", imgSrc: "./img/portatiles/05.jpg" },
    { title: "Portatil 06"  , price: "$2600", imgSrc: "./img/portatiles/06.jpg" },
    { title: "Portatil 07"  , price: "$3000", imgSrc: "./img/portatiles/07.jpg" },
    { title: "Portatil 08"  , price: "$3500", imgSrc: "./img/portatiles/08.jpg" },
    { title: "Movil 01"     , price: "$500" , imgSrc: "./img/moviles/01.jpg"},
    { title: "Movil 02"     , price: "$600" , imgSrc: "./img/moviles/02.jpg"},
    { title: "Movil 03"     , price: "$800" , imgSrc: "./img/moviles/03.jpg"},
    { title: "Movil 04"     , price: "$1100" , imgSrc: "./img/moviles/04.jpg"},
    { title: "Movil 05"     , price: "$1500" , imgSrc: "./img/moviles/05.jpg"},
    { title: "Televisor 01" , price: "$1300" , imgSrc: "./img/televisiones/01.jpg"},
    { title: "Televisor 02" , price: "$1700" , imgSrc: "./img/televisiones/02.jpg"},
    { title: "Televisor 03" , price: "$2200" , imgSrc: "./img/televisiones/03.jpg"},
    { title: "Televisor 04" , price: "$2800" , imgSrc: "./img/televisiones/04.jpg"},
    { title: "Televisor 05" , price: "$3500" , imgSrc: "./img/televisiones/05.jpg"}
];

const portatiles = [
    { title: "Portatil 01"  , price: "$1000", imgSrc: "./img/portatiles/01.jpg" },
    { title: "Portatil 02"  , price: "$1200", imgSrc: "./img/portatiles/02.jpg" },
    { title: "Portatil 03"  , price: "$1500", imgSrc: "./img/portatiles/03.jpg" },
    { title: "Portatil 04"  , price: "$1800", imgSrc: "./img/portatiles/04.jpg" },
    { title: "Portatil 05"  , price: "$2200", imgSrc: "./img/portatiles/05.jpg" },
    { title: "Portatil 06"  , price: "$2600", imgSrc: "./img/portatiles/06.jpg" },
    { title: "Portatil 07"  , price: "$3000", imgSrc: "./img/portatiles/07.jpg" },
    { title: "Portatil 08"  , price: "$3500", imgSrc: "./img/portatiles/08.jpg" },
]

const moviles = [
    { title: "Movil 01"     , price: "$500" , imgSrc: "./img/moviles/01.jpg"},
    { title: "Movil 02"     , price: "$600" , imgSrc: "./img/moviles/02.jpg"},
    { title: "Movil 03"     , price: "$800" , imgSrc: "./img/moviles/03.jpg"},
    { title: "Movil 04"     , price: "$1100" , imgSrc: "./img/moviles/04.jpg"},
    { title: "Movil 05"     , price: "$1500" , imgSrc: "./img/moviles/05.jpg"},
]

const televisiones = [
    { title: "Televisor 01" , price: "$1300" , imgSrc: "./img/televisiones/01.jpg"},
    { title: "Televisor 02" , price: "$1700" , imgSrc: "./img/televisiones/02.jpg"},
    { title: "Televisor 03" , price: "$2200" , imgSrc: "./img/televisiones/03.jpg"},
    { title: "Televisor 04" , price: "$2800" , imgSrc: "./img/televisiones/04.jpg"},
    { title: "Televisor 05" , price: "$3500" , imgSrc: "./img/televisiones/05.jpg"}
]

const container = document.getElementById("product-container");

function clear(containerId) {
    const container = document.getElementById(containerId);
    if (container) { // Check if container exists
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    } else {
        console.error(`Element with ID "${containerId}" not found.`);
    }
}

function showTodos(){
    clear("product-container")
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("producto");
    
        productDiv.innerHTML = `
            <img class="producto-imagen" src="${product.imgSrc}" alt="Imagen producto">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${product.title}</h3>
                <p class="producto-precio">${product.price}</p>
                <button class="producto-agregar">Agregar</button>
            </div>
        `;
    
        container.appendChild(productDiv);
    });
}

function showMoviles(){
    clear("product-container")
    moviles.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("producto");
    
        productDiv.innerHTML = `
            <img class="producto-imagen" src="${product.imgSrc}" alt="Imagen producto">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${product.title}</h3>
                <p class="producto-precio">${product.price}</p>
                <button class="producto-agregar">Agregar</button>
            </div>
        `;
    
        container.appendChild(productDiv);
    });
}

function showPortatiles(){
    clear("product-container")
    portatiles.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("producto");
    
        productDiv.innerHTML = `
            <img class="producto-imagen" src="${product.imgSrc}" alt="Imagen producto">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${product.title}</h3>
                <p class="producto-precio">${product.price}</p>
                <button class="producto-agregar">Agregar</button>
            </div>
        `;
    
        container.appendChild(productDiv);
    });
}

function showTelevisores(){
    clear("product-container")
    televisiones.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("producto");
    
        productDiv.innerHTML = `
            <img class="producto-imagen" src="${product.imgSrc}" alt="Imagen producto">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${product.title}</h3>
                <p class="producto-precio">${product.price}</p>
                <button class="producto-agregar">Agregar</button>
            </div>
        `;
    
        container.appendChild(productDiv);
    });
}

let todos = document.querySelector("#todos")
todos.addEventListener("click", () => {
    showTodos()
})

let todosMoviles = document.querySelector("#moviles")
todosMoviles.addEventListener("click", () => {
    showMoviles()
})

let todosPortatiles = document.querySelector("#portatiles")
todosPortatiles.addEventListener("click", () => {
    showPortatiles()
})

let todosTelevisores = document.querySelector("#televisiones")
todosTelevisores.addEventListener("click", () => {
    showTelevisores()
})
;