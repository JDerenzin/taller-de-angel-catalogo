const productos = [
    { nombre: "Jardín de la Alegría", precio: "25.00", img: "img/jardin-de-la-alegria.webp", desc: "Ramo de miniflores amarillas + abejas + cartel de corazón" },
    { nombre: "Cielo Eterno", precio: "15.00", img: "img/cielo-eterno.webp", desc: "1 tulipán azul en ramo" },
    { nombre: "Rayo de Luz", precio: "35.00", img: "img/rayo-de-luz.webp", desc: "Girasol + 4 margaritas + 1 rama de eucalipto" },
    { nombre: "Sol de Mediodía", precio: "8.00", img: "img/sol-de-mediodia.webp", desc: "3 girasoles + 8 margaritas + 2 ramas de eucalipto" },
    { nombre: "Trilogía del Afecto", precio: "28.00", img: "img/trilogia-del-afecto.webp", desc: "3 tulipanes rojos con mensaje" },
    { nombre: "Elegancia Silvestre", precio: "40.00", img: "img/elegancia-silvestre.webp", desc: "2 lirios rosados + 4 margaritas (versión girasol) + 2 eucaliptos" }
];

const container = document.getElementById('catalogo');

function render() {
    container.innerHTML = productos.map(p => `
        <div class="card">
            <img src="${p.img}" alt="${p.nombre}" loading="lazy">
            <div class="info">
                <h3>${p.nombre}</h3>
                <p>${p.desc}</p>
                <div class="precio">S/${p.precio}</div>
                <a href="https://www.instagram.com/taller_de_angel_/" class="btn-ig">
                    Consultar disponibilidad
                </a>
            </div>
        </div>
    `).join('');
}

render();