const controlMissao = document.getElementById("bt-sobre-missao")
const controlVisao = document.getElementById("bt-sobre-visao")
const controlValores = document.getElementById("bt-sobre-valores")
let currentItem = 0;
const items = document.querySelectorAll(".sobre-carousel-container-item");
const maxItems = items.length;
const controls = [controlMissao, controlVisao, controlValores]

function selectMVV(ItemIndex) {
    const currentButton = controls[ItemIndex];

    controls.forEach((Buttons) => Buttons.classList.remove('button-sobre-active'))
    currentButton.classList.add('button-sobre-active')

    items[ItemIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center"
    })
}

controlMissao.addEventListener('click', () => selectMVV(0))
controlVisao.addEventListener('click', () => selectMVV(1))
controlValores.addEventListener('click', () => selectMVV(2))
