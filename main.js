const productos = [
    { nombre: "Ramo de Abejitas", precio: "35.00", img: "img/ramo-de-abejitas.webp" },
    { nombre: "Tulipan Premium", precio: "12.00", img: "img/tulipan-premium.webp" },
    { nombre: "Rayo de Luz", precio: "20.00", img: "img/rayo-de-luz.webp" },
    { nombre: "Sol de Mediodía", precio: "30.00", img: "img/sol-de-mediodia.webp" },
    { nombre: "I Loviu", precio: "30.00", img: "img/i-loviu.webp" },
    { nombre: "Dulce Delirio", precio: "30.00", img: "img/dulce-delirio.webp" },
    { nombre: "Te quiero de Forma Verdadera", precio: "40.00", img: "img/te-quiero-de-forma-verdadera.webp" }
];

const container = document.getElementById('catalogo');

function render() {
    container.innerHTML = productos.map(p => `
        <div class="card">
            <img src="${p.img}" alt="${p.nombre}" loading="lazy">
            <div class="info">
                <h3>${p.nombre}</h3>
                <div class="precio">S/${p.precio}</div>
            </div>
        </div>
    `).join('');
}

render();