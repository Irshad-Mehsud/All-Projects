
document.addEventListener("DOMContentLoaded", () => {
    const allCategoriesButton = document.getElementById("Allcatagories");
    const categoriesDiv = document.querySelector(".Allcatagories");
    categoriesDiv.style.display = "none";
    allCategoriesButton.addEventListener("click", () => {
        categoriesDiv.style.display = categoriesDiv.style.display === "none" || categoriesDiv.style.display === "" ? "flex" : "none";
    });



const mobileData = [
    {
        imgSrc: './asset/mobilphones/firstmobil.webp',
        price: 'RS 39,000',
        description: 'Iphone | Vivo | Samsung | Tecno',
        location: 'Gulshan-eqbal Karachi',
        time: '3 Days ago'
    },
    {
        imgSrc: './asset/mobilphones/scnd-mbl.webp',
        price: 'RS 45,000',
        description: 'Xiaomi | OnePlus | Nokia',
        location: 'Clifton Karachi',
        time: '5 Days ago'
    },
    {
        imgSrc: './asset/mobilphones/trd-mbl.webp',
        price: 'RS 50,000',
        description: 'Oppo | Realme | Sony',
        location: 'Bahria Town Karachi',
        time: '1 Week ago'
    },
    {
        imgSrc: './asset/mobilphones/frth-mbl.webp',
        price: 'RS 60,000',
        description: 'Huawei | LG | Motorola',
        location: 'North Nazimabad Karachi',
        time: '2 Days ago'
    }
];

const carsData = [
    // Car data objects
    {
        imgSrc: './asset/Cars/cars1.webp',
        price: 'RS 39,07000',
        description: 'Iphone | Vivo | Samsung | Tecno',
        location: 'Gulshan-eqbal Karachi',
        time: '3 Days ago'
    },
    {
        imgSrc: './asset/Cars/car2.webp',
        price: 'RS 450000',
        description: 'Xiaomi | OnePlus | Nokia',
        location: 'Clifton Karachi',
        time: '5 Days ago'
    },
    {
        imgSrc: './asset/Cars/cars3.webp',
        price: 'RS 500000',
        description: 'Oppo | Realme | Sony',
        location: 'Bahria Town Karachi',
        time: '1 Week ago'
    },
    {
        imgSrc: './asset/Cars/car4.webp',
        price: 'RS 600000',
        description: 'Huawei | LG | Motorola',
        location: 'North Nazimabad Karachi',
        time: '2 Days ago'
    }
];

const BikesData = [
    // Bike data objects
    {
        imgSrc: './asset/Bikes/bike1.webp',
        price: 'RS 39,07000',
        description: 'Iphone | Vivo | Samsung | Tecno',
        location: 'Gulshan-eqbal Karachi',
        time: '3 Days ago'
    },
    {
        imgSrc: './asset/Bikes/bike2.webp',
        price: 'RS 450000',
        description: 'Xiaomi | OnePlus | Nokia',
        location: 'Clifton Karachi',
        time: '5 Days ago'
    },
    {
        imgSrc: './asset/Bikes/bike3.webp',
        price: 'RS 500000',
        description: 'Oppo | Realme | Sony',
        location: 'Bahria Town Karachi',
        time: '1 Week ago'
    },
    {
        imgSrc: './asset/Bikes/bike4.webp',
        price: 'RS 600000',
        description: 'Huawei | LG | Motorola',
        location: 'North Nazimabad Karachi',
        time: '2 Days ago'
    }
];

const HousesData = [
    // House data objects
    {
        imgSrc: './asset/Houses/House1.webp',
        price: 'RS 39,07000',
        description: 'Iphone | Vivo | Samsung | Tecno',
        location: 'Gulshan-eqbal Karachi',
        time: '3 Days ago'
    },
    {
        imgSrc: './asset/Houses/House2.webp',
        price: 'RS 450000',
        description: 'Xiaomi | OnePlus | Nokia',
        location: 'Clifton Karachi',
        time: '5 Days ago'
    },
    {
        imgSrc: './asset/Houses/House3.webp',
        price: 'RS 500000',
        description: 'Oppo | Realme | Sony',
        location: 'Bahria Town Karachi',
        time: '1 Week ago'
    },
    {
        imgSrc: './asset/Houses/House4.webp',
        price: 'RS 600000',
        description: 'Huawei | LG | Motorola',
        location: 'North Nazimabad Karachi',
        time: '2 Days ago'
    }
];

const VideosData = [
    // Video data objects
    {
        imgSrc: './asset/Houses/Video1.webp',
        price: 'RS 39,07000',
        description: 'Iphone | Vivo | Samsung | Tecno',
        location: 'Gulshan-eqbal Karachi',
        time: '3 Days ago'
    },
    {
        imgSrc: './asset/Houses/Video2.webp',
        price: 'RS 450000',
        description: 'Xiaomi | OnePlus | Nokia',
        location: 'Clifton Karachi',
        time: '5 Days ago'
    },
    {
        imgSrc: './asset/Houses/Video3.webp',
        price: 'RS 500000',
        description: 'Oppo | Realme | Sony',
        location: 'Bahria Town Karachi',
        time: '1 Week ago'
    },
    {
        imgSrc: './asset/Houses/Video4.webp',
        price: 'RS 600000',
        description: 'Huawei | LG | Motorola',
        location: 'North Nazimabad Karachi',
        time: '2 Days ago'
    }
];

const TabletsData = [
    // Tablet data objects
    {
        imgSrc: './asset/Houses/tab1.webp',
        price: 'RS 39,07000',
        description: 'Iphone | Vivo | Samsung | Tecno',
        location: 'Gulshan-eqbal Karachi',
        time: '3 Days ago'
    },
    {
        imgSrc: './asset/Houses/tab2.webp',
        price: 'RS 450000',
        description: 'Xiaomi | OnePlus | Nokia',
        location: 'Clifton Karachi',
        time: '5 Days ago'
    },
    {
        imgSrc: './asset/Houses/tab3.webp',
        price: 'RS 500000',
        description: 'Oppo | Realme | Sony',
        location: 'Bahria Town Karachi',
        time: '1 Week ago'
    },
    {
        imgSrc: './asset/Houses/tab4.webp',
        price: 'RS 600000',
        description: 'Huawei | LG | Motorola',
        location: 'North Nazimabad Karachi',
        time: '2 Days ago'
    }
];

const LandsData = [
    // Land data objects
    {
        imgSrc: './asset/Houses/land1.webp',
        price: 'RS 39,07000',
        description: 'Iphone | Vivo | Samsung | Tecno',
        location: 'Gulshan-eqbal Karachi',
        time: '3 Days ago'
    },
    {
        imgSrc: './asset/Houses/land2.webp',
        price: 'RS 450000',
        description: 'Xiaomi | OnePlus | Nokia',
        location: 'Clifton Karachi',
        time: '5 Days ago'
    },
    {
        imgSrc: './asset/Houses/land3.webp',
        price: 'RS 500000',
        description: 'Oppo | Realme | Sony',
        location: 'Bahria Town Karachi',
        time: '1 Week ago'
    },
    {
        imgSrc: './asset/Houses/land4.webp',
        price: 'RS 600000',
        description: 'Huawei | LG | Motorola',
        location: 'North Nazimabad Karachi',
        time: '2 Days ago'
    }
];
const JobsData = [
    // Land data objects
    {
        imgSrc: './asset/Houses/job1.webp',
        price: 'RS 39,07000',
        description: 'Iphone | Vivo | Samsung | Tecno',
        location: 'Gulshan-eqbal Karachi',
        time: '3 Days ago'
    },
    {
        imgSrc: './asset/Houses/job2.webp',
        price: 'RS 450000',
        description: 'Xiaomi | OnePlus | Nokia',
        location: 'Clifton Karachi',
        time: '5 Days ago'
    },
    {
        imgSrc: './asset/Houses/job3.webp',
        price: 'RS 500000',
        description: 'Oppo | Realme | Sony',
        location: 'Bahria Town Karachi',
        time: '1 Week ago'
    },
    {
        imgSrc: './asset/Houses/job4.webp',
        price: 'RS 600000',
        description: 'Huawei | LG | Motorola',
        location: 'North Nazimabad Karachi',
        time: '2 Days ago'
    }
];

const dataSets = [
    { data: mobileData, containerClass: '.cards-container' },
    { data: carsData, containerClass: '.cars-cards-container' },
    { data: BikesData, containerClass: '.Bike-cards-container' },
    { data: HousesData, containerClass: '.House-cards-container' },
    { data: VideosData, containerClass: '.Video-cards-container' },
    { data: TabletsData, containerClass: '.Tablet-cards-container' },
    { data: LandsData, containerClass: '.Land-cards-container' },
    { data: JobsData, containerClass: '.Job-cards-container' }
];

function createCard(item) {
    return `
        <div id="crds-img-div">
            <img src="${item.imgSrc}" alt="" id="crds-img">
        </div>
        <div class="price">
            <p>${item.price}</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" id="svg">
                <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
            </svg>
        </div>
        <div class="mbl-discrip">
            <p>${item.description}</p>
            <div id="location">
                <p>${item.location}</p>
                <p>${item.time}</p>
            </div>
        </div>
    `;
}

function renderCards(data, containerClass) {
    const container = document.querySelector(containerClass);
    if (container) {
        data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'cards';
            card.innerHTML = createCard(item);
            container.appendChild(card);
        });
    }
}

dataSets.forEach(({ data, containerClass }) => {
    renderCards(data, containerClass);
});
});