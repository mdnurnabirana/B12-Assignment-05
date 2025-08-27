// Mobile Menu Hambarger
document.getElementById("header-bar").addEventListener("click", function () {
    const mobileMenu = document.getElementById("header-hamburger");
    if (mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.replace("hidden", "flex");
    } else if (mobileMenu.classList.contains("flex")) {
        mobileMenu.classList.replace("flex", "hidden");
    }
});

// Heart Icon Functionalities
let buttons = document.getElementsByClassName("heart-icon-click");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (e) {
        let heartCountElem1 = document.getElementById("heart-count1");
        let heartCnt1 = parseInt(heartCountElem1.innerText, 10);
        heartCnt1++;
        heartCountElem1.innerText = heartCnt1;

        let heartCountElem2 = document.getElementById("heart-count2");
        let heartCnt2 = parseInt(heartCountElem2.innerText, 10);
        heartCnt2++;
        heartCountElem2.innerText = heartCnt2;
    });
}

// Calling Functionality
let callButtons = document.getElementsByClassName("call-btn");

for (let i = 0; i < callButtons.length; i++) {
    callButtons[i].addEventListener("click", function (e) {
        e.preventDefault();

        let coinElem = document.querySelector(".coin");
        if (!coinElem) return;

        let coins = parseInt(coinElem.innerText, 10);
        if (isNaN(coins) || coins < 20) {
            alert("Not enough coins to make the call!");
            return;
        }

        let card = this.parentElement;
        while (card && card !== document.body) {
            if (card.querySelector(".service-name") && card.querySelector(".service-number")) break;
            card = card.parentElement;
        }
        if (!card) card = document;

        let serviceNameElem = card.querySelector(".service-name");
        let serviceNumberElem = card.querySelector(".service-number");

        let serviceName = serviceNameElem ? serviceNameElem.innerText.trim() : "Unknown Service";
        let serviceNumber = serviceNumberElem ? serviceNumberElem.innerText.trim() : "Unknown Number";

        coins -= 20;
        coinElem.innerText = coins;

        alert("Calling " + serviceName + " at " + serviceNumber);

        // Add to call history
        let historyDiv = document.getElementById("history");
        if (!historyDiv) return;

        let now = new Date();
        let hours = now.getHours() % 12 || 12;
        let minutes = now.getMinutes().toString().padStart(2, "0");
        let ampm = now.getHours() >= 12 ? "PM" : "AM";
        let time = `${hours}:${minutes} ${ampm}`;

        let historyHTML = `
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
    });
}