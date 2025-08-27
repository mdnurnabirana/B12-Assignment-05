// Mobile Menu Hambarger
document.getElementById("header-bar").addEventListener("click", function() {
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