let changeOfTheme = document.getElementById("page");
let button = document.getElementById("switchTheme");

button.addEventListener("click", function () {
    changeOfTheme.classList.toggle("dark");
    localStorage.theme = document.body.className || "light";
});

if (!localStorage.theme) localStorage.theme = "light";
document.body.className = localStorage.theme;


// lesson 10
const data = [
    {
        name: 'Hotel Leopold',
        city: 'Saint Petersburg',
        country: 'Russia',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
    },
    {
        name: 'Apartment Sunshine',
        city: 'Santa  Cruz de Tenerife',
        country: 'Spain',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
    },
    {
        name: 'Villa Kunerad',
        city: 'Vysokie Tatry',
        country: 'Slowakia',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
    },
    {
        name: 'Hostel Friendship',
        city: 'Berlin',
        country: 'Germany',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
    },
    // {
    //     name: 'Radisson Blu Hotel',
    //     city: 'Kyiv',
    //     country: 'Ukraine',
    //     imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
    // },
    // {
    //     name: 'Paradise Hotel',
    //     city: 'Guadalupe',
    //     country: 'Mexico',
    //     imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
    // },
    // {
    //     name: 'Hotel Grindewald',
    //     city: 'Interlaken',
    //     country: 'Switzerland',
    //     imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
    // },
    // {
    //     name: 'The Andaman Resort',
    //     city: 'Port Dickson',
    //     country: 'Malaysia',
    //     imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
    // },
];

const section = document.getElementById("hgl_section");

const title = document.getElementById("hgl_title");
title.innerHTML = "Homes guests loves";

const container = document.getElementById("hgl-img_container");

data.forEach((element) => {
    container.innerHTML += `
    <div class="hgl-container-image">
    <img class="hgl-image" src=${element.imageUrl} alt=${element.name} />
    <p class="hgl-label-homes">${element.name}</p>
    <p class="hgl-label-location">${element.city}, ${element.country}</p>
    </div>
`});

section.appendChild(container);


































