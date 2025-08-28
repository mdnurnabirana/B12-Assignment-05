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

        let coinElems = document.getElementsByClassName("coin");
        if (!coinElems || coinElems.length === 0) return;


        let coinsAvailable = parseInt(coinElems[0].innerText, 10);
        if (isNaN(coinsAvailable) || coinsAvailable < 20) {
            alert("Not enough coins to make the call!");
            return;
        }

        for (let j = 0; j < coinElems.length; j++) {
            let coins = parseInt(coinElems[j].innerText, 10);
            if (!isNaN(coins)) {
                coins -= 20;
                coinElems[j].innerText = coins;
            }
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

// Call history delete function
let clearBtn = document.getElementById("history-clear-btn");
let historyDiv = document.getElementById("history");

clearBtn.addEventListener("click", function () {
    historyDiv.innerHTML = "";
    alert("Call history cleared!");
});

// Copy Button increment Functionality
let copyButtons = document.getElementsByClassName("copy-btn");

for (let i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener("click", function (e) {
        e.preventDefault();

        let card = this.parentElement;
        while (card && !card.querySelector(".service-number")) {
            card = card.parentElement;
        }
        if (!card) return;

        let numberElem = card.querySelector(".service-number");
        let number = numberElem ? numberElem.innerText.trim() : "";

        if (number) {
            navigator.clipboard.writeText(number).then(function () {
                alert("Copied: " + number);

                let count1 = document.getElementById("copy-count1");
                let count2 = document.getElementById("copy-count2");

                if (count1) count1.innerText = parseInt(count1.innerText, 10) + 1;
                if (count2) count2.innerText = parseInt(count2.innerText, 10) + 1;
            });
        }
    });
}