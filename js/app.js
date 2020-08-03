// Moidificación de la barra de nevagacion según el scroll

// window.addEventListener('scroll', () => {
//   const nav = document.querySelector('.menu');
//   const img = document.querySelector('.menu_logo img');
//   const dDown = document.querySelectorAll('.menu_list__dropdown');

//   if(screen.width <= 1600) {
//     nav.classList.toggle('sticky', window.scrollY > 100)
//   } else {
//     nav.classList.toggle('sticky--1600', window.scrollY > 100)
//   }

//   dDown.forEach(element => {
//     element.classList.toggle('dropdown', window.scrollY > 100);
//   });

//   if(window.scrollY > 100) {
//     img.setAttribute('src', './img/logo/dashHelpColor.svg');
//     nav.setAttribute('height', '80px');
//     img.setAttribute('width', '80%');
//   } else {
//     img.setAttribute('src', './img/logo/dashHelpWhite.svg');
//     nav.setAttribute('height', '100px');
//     img.setAttribute('width', '100%');
//   }
// });

// Obtoner valor dash en dolares y bolivares

// let currentcy_dollar = document.querySelector('#currentcy_dollar');
// let currentcy_ves = document.querySelector('#currentcy_ves');

//   function getCurrentcy() {
//     const API = 'https://rates2.dashretail.org/rates?symbol=dashves&nested=1';

//     fetch(API)
//       .then(response => response.json())
//       .then(myJson => {
//         let USD, VES;
//         let usd = myJson[0].nested[0].price;
//         let ves = myJson[0].price;
//         USD = new Intl.NumberFormat("de-DE", {style: "currency", currency: "USD"}).format(usd);
//         VES = new Intl.NumberFormat("de-DE", {style: "currency", currency: "VES"}).format(ves);

//         currentcy_dollar.innerHTML = `${USD}`;
//         currentcy_ves.innerHTML = `${VES}`;
//       });
//   }
//   getCurrentcy();
//   setInterval (getCurrentcy, 10000);



// Splide

new Splide( '.splide',{
  type   : 'loop',
  autoplay: 'true',
  interval: 5000
} ).mount();
