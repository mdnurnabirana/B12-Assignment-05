// Dynamic card data
const data = [
    {
        id: 1,
        icon: './assets/emergency.png',
        name: 'National Emergency Service',
        type: 'Police, Fire, Ambulance',
        number: '999',
        tag: 'All'
    },
    {
        id: 2,
        icon: './assets/fire-service.png',
        name: 'Fire Service & Civil Defence',
        type: 'Fire & Rescue',
        number: '16163',
        tag: 'All'
    },
    {
        id: 3,
        icon: './assets/ambulance.png',
        name: 'National Ambulance Service',
        type: 'Emergency Transport',
        number: '16263',
        tag: 'All'
    },
    {
        id: 4,
        icon: './assets/police.png',
        name: 'Bangladesh Police Help Desk',
        type: 'Police Emergency',
        number: '100',
        tag: 'All'
    },
    {
        id: 5,
        icon: './assets/emergency.png',
        name: 'Women & Child Abuse Prevention',
        type: 'Helpline for Women',
        number: '109',
        tag: 'All'
    },
    {
        id: 6,
        icon: './assets/emergency.png',
        name: 'National Mental Health Helpline',
        type: 'Mental Health Support',
        number: '16263',
        tag: 'All'
    },
    {
        id: 7,
        icon: './assets/emergency.png',
        name: 'Disaster Management',
        type: 'Natural Disaster Helpline',
        number: '1090',
        tag: 'All'
    },
    {
        id: 8,
        icon: './assets/emergency.png',
        name: 'Road Accident Emergency',
        type: 'Road Accident Emergency',
        number: '16402',
        tag: 'All'
    },
    {
        id: 9,
        icon: './assets/emergency.png',
        name: 'National COVID-19 Hotline',
        type: 'Health & Government Information',
        number: '333',
        tag: 'All'
    }
];

// Function to generate cards dynamically
const container = document.getElementById('cards-container');
data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-xl shadow-md p-8';
    card.innerHTML = `
        <div class="flex justify-between items-center">
            <div class="bg-[#FFE3E2] rounded-xl p-3 flex items-center justify-center">
                <img src="${item.icon}" class="h-8 w-8" alt="icon">
            </div>
            <div class="heart-icon-click my-auto cursor-pointer">
                <img src="./assets/heart1.png" alt="heart_icon">
            </div>
        </div>
        <div class="mt-4">
            <h2 class="font-inter font-bold text-[22px] service-name">${item.name}</h2>
            <p class="font-semibold text-lg text-[#5C5C5C] mt-2 service-type">${item.type}</p>
            <h1 class="hotline font-inter font-bold text-2xl mt-6 service-number">${item.number}</h1>
            <p class="bg-[#F2F2F2] rounded-2xl p-3 max-w-[30%] text-center text-[#5C5C5C] text-lg mt-3">${item.tag}</p>
        </div>
        <div class="flex gap-2 mt-6">
            <button class="copy-btn flex items-center justify-center gap-2 w-full px-3 py-2 rounded-lg border-2 border-[#D4D6D5] hover:bg-gray-100">
                <img src="./assets/copy.png" alt="copy_icon" class="h-5 w-5">
                <span>Copy</span>
            </button>
            <a href="tel:${item.number}" class="call-btn flex items-center justify-center gap-2 w-full px-3 py-2 rounded-lg bg-[#00A63E] hover:bg-green-700">
                <img src="./assets/call.png" alt="call_icon" class="h-5 w-5">
                <span class="text-white">Call</span>
            </a>
        </div>
    `;
    container.appendChild(card);
});

// Mobile Menu Hamburger
document.getElementById("header-bar").addEventListener("click", function () {
    const mobileMenu = document.getElementById("header-hamburger");
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
});

// Heart Icon Functionality (increment)
container.addEventListener('click', function(e) {
    if (e.target.closest('.heart-icon-click')) {
        const heartCount1 = document.getElementById('heart-count1');
        const heartCount2 = document.getElementById('heart-count2');
        heartCount1.innerText = parseInt(heartCount1.innerText, 10) + 1;
        heartCount2.innerText = parseInt(heartCount2.innerText, 10) + 1;
    }
});

// Copy Button Functionality
container.addEventListener('click', function(e) {
    if (e.target.closest('.copy-btn')) {
        const card = e.target.closest('.bg-white');
        const numberElem = card.querySelector('.service-number');
        const number = numberElem.innerText.trim();
        if (number) {
            navigator.clipboard.writeText(number).then(() => {
                alert("Copied: " + number);
                const count1 = document.getElementById("copy-count1");
                const count2 = document.getElementById("copy-count2");
                if (count1) count1.innerText = parseInt(count1.innerText, 10) + 1;
                if (count2) count2.innerText = parseInt(count2.innerText, 10) + 1;
            });
        }
    }
});

// Call Button Functionality
container.addEventListener('click', function(e) {
    if (e.target.closest('.call-btn')) {
        e.preventDefault();
        const coinElems = document.getElementsByClassName('coin');
        if (!coinElems || coinElems.length === 0) return;

        let coinsAvailable = parseInt(coinElems[0].innerText, 10);
        if (isNaN(coinsAvailable) || coinsAvailable < 20) {
            alert("Not enough coins to make the call!");
            return;
        }

        // Deduct 20 coins from each coin element
        for (let i = 0; i < coinElems.length; i++) {
            let coins = parseInt(coinElems[i].innerText, 10);
            if (!isNaN(coins)) {
                coinElems[i].innerText = coins - 20;
            }
        }

        const card = e.target.closest('.bg-white');
        const serviceName = card.querySelector('.service-name').innerText.trim();
        const serviceNumber = card.querySelector('.service-number').innerText.trim();

        alert(`Calling ${serviceName} at ${serviceNumber}`);

        // Add to history
        const historyDiv = document.getElementById('history');
        const now = new Date();
        const hours = now.getHours() % 12 || 12;
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const ampm = now.getHours() >= 12 ? "PM" : "AM";
        const time = `${hours}:${minutes} ${ampm}`;

        const historyHTML = `
            <div class="bg-[#D4D6D5] flex justify-between rounded-lg p-4 mt-4 gap-1">
                <div>
                    <h2 class="font-bold font-inter">${serviceName}</h2>
                    <h2 class="font-semibold font-inter text-sm text-[#5C5C5C]">${serviceNumber}</h2>
                </div>
                <div class="my-auto">
                    <p class="font-bold">${time}</p>
                </div>
            </div>
        `;
        historyDiv.insertAdjacentHTML('beforeend', historyHTML);

        // finally trigger the actual call
        window.location.href = `tel:${serviceNumber}`;
    }
});

// Clear call history
document.getElementById("history-clear-btn").addEventListener('click', () => {
    const historyDiv = document.getElementById('history');
    historyDiv.innerHTML = '';
    alert("Call history cleared!");
});