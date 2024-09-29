//variables
//titulo de las consolas
const tituloConsola = document.getElementById('titulo-consola');

//contenedor de los productos
const contenedorProductos = document.querySelector('.grid');

//consolas
const playStation = document.getElementById('play');
const xbox = document.getElementById('xbox');
const nintendo = document.getElementById('nintendo');

//funcion para cambiar el texto del h1
function cambiarTitulo(nombreConsola){
    tituloConsola.textContent = nombreConsola
}

// generando eventos para cambiar el titulo
playStation.addEventListener('click', () => cambiarTitulo('PlayStation'));
xbox.addEventListener('click', () => cambiarTitulo('Xbox'));
nintendo.addEventListener('click', () => cambiarTitulo('Nintendo'));

//Datos de los productos

//playStation
const productosPlay = [
    {nombre: "Spider Man Miles Morales", precio: "$500", imagen: "img/play/spiderManMiles.jpg"},
    {nombre: "Spider Man", precio: "$700", imagen: "img/play/espiderman_ps4.jpg"},
    {nombre: "Crash Bandicoot", precio: "$360", imagen: "img/play/crashBandicoot.jpg"},
    {nombre: "Guardians Of The Galaxy", precio: "$1200", imagen: "img/play/guardiansOfTheGalaxy.jpg"},
    {nombre: "Grand Theft Auto V", precio: "$1500", imagen: "img/play/Gta5.jpg"},
    {nombre: "Ratchet and Clank", precio: "$300", imagen: "img/play/ratchetAndClank.jpg"}
];

//Xbox
const productosXbox = [
    {nombre: "Call of Duty Modern Warfare", precio: "$500", imagen: "img/xbox/callOfDutyModernWarfare.jpeg"},
    {nombre: "Gears of War Ultimate Edition", precio: "$800", imagen: "img/xbox/gearsOfWar.jpg"},
    {nombre: "Grand Theft Auto V", precio: "$1200", imagen: "img/xbox/GtaV.jpg"},
    {nombre: "Guardians Of The Galaxy", precio: "$1400", imagen: "img/xbox/guardians.jpg"},
    {nombre: "Injustice 2", precio: "$1100", imagen: "img/xbox/injustice2.jpg"},
    {nombre: "Titan Fall", precio: "$600", imagen: "img/xbox/titanFall.jpeg"}
];

//nintendo
const productosNin = [
    {nombre: "Crash Bandicoot N Sane Trilogy", precio: "$900", imagen: "img/xbox/callOfDutyModernWarfare.jpeg"},
    {nombre: "Kriby Forgotten Land", precio: "$800", imagen: "img/xbox/gearsOfWar.jpg"},
    {nombre: "Mario Party Syper Stars", precio: "$1000", imagen: "img/xbox/GtaV.jpg"},
    {nombre: "Super Mario Bros U Deluxe", precio: "$1200", imagen: "img/xbox/guardians.jpg"},
    {nombre: "Super Mario Maker 2", precio: "$1100", imagen: "img/xbox/injustice2.jpg"},
    {nombre: "Super Smash Bros Ultimate", precio: "$600", imagen: "img/xbox/titanFall.jpeg"}
];