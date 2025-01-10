//Menu Button
const clickMenu = new Audio('asset/sound/click.mp3');
let button1 = document.querySelectorAll(".block");
let button2 = document.querySelectorAll(".small_block");
const menu = [...button1, ...button2];

menu.forEach((button) => {
    button.addEventListener("click", () => {
        clickMenu.play();
    });
});