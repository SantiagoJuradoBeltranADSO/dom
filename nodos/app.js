// "use strict";
// const $root = document.querySelector("#root");
// const $div = document.createElement("div");
// let texto = "hola mundo"
// $root.appendChild($div);
// $div.classList.add("box")
// $root.appendChild($div);
// $div.add("p");
// $p.textContent=texto;

import { usuarios } from "./modulo.js";

const $root = document.querySelector("#root");
const $card = document.createDocumentFragment(); 
const $template = document.querySelector("#template").content;
console.log($template)
usuarios().then((listado) => {
  listado.forEach((usuario) => {
    $template.querySelector("h2").textContent = usuario.name;
    $template.querySelector("div > p").textContent = usuario.email;

    let clone = document.importNode($template, true)
    $card.appendChild(clone)
    // const $div = document.createElement("div");
    // $div.classList.add("box");

    // const $nombre = document.createElement("p");
    // $nombre.textContent = `Nombre: ${usuario.name}`;
    // $div.appendChild($nombre);

    // const $email = document.createElement("p");
    // $email.textContent = `Email: ${usuario.email}`;
    // $div.appendChild($email);

    // const $telefono = document.createElement("p");
    // $telefono.textContent = `Teléfono: ${usuario.phone}`;
    // $div.appendChild($telefono);

    // const $company = document.createElement("p");
    // $company.textContent = `Company: ${usuario.company.name}`;
    // $div.appendChild($company);

    // const $direccion = document.createElement("p");
    // $direccion.textContent = `Dirección: ${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}`;
    // $div.appendChild($direccion);

    // const $website = document.createElement("p");
    // $website.textContent = `Website: ${usuario.website}`;
    // $div.appendChild($website);

    // // Añadir el div al fragmento
    // $fragment.appendChild($div);
  });$root.appendChild($card); }).catch()


  // Añadir el fragmento al contenedor #root

  // Añadir la clase al contenedor #root
  // $root.classList.add("otra_clase");

// const $root = document.querySelector("#root");

// usuarios().then((listado) => {
//   listado.forEach((usuario) => {
//     const $div = document.createElement("div");
//     $div.classList.add("box");

//     // Crear un párrafo para cada propiedad del usuario
//     const $nombre = document.createElement("h1");
//     $nombre.textContent = `Nombre: ${usuario.name}`;
//     $div.appendChild($nombre);

//     const $email = document.createElement("p");
//     $email.textContent = `Email: ${usuario.email}`;
//     $div.appendChild($email);

//     const $telefono = document.createElement("p");
//     $telefono.textContent = `Teléfono: ${usuario.phone}`;
//     $div.appendChild($telefono);

//     const $company = document.createElement("p");
//     $company.textContent = `Company: ${usuario.company.name}`;
//     $div.appendChild($company);

//     const $direccion = document.createElement("p");
//     $direccion.textContent = `Dirección: ${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}`;
//     $div.appendChild($direccion);

//     const $website = document.createElement("p");
//     $website.textContent = `Website: ${usuario.website}`;
//     $div.appendChild($website);

//     // Añadir el div al contenedor #root
//     $root.appendChild($div);
//   });

//   // Ejemplo de añadir otra clase al contenedor #root
//   $root.classList.add("otra_clase");
// });