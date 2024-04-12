const controlMissao = document.getElementById("bt-sobre-missao")
const controlVisao = document.getElementById("bt-sobre-visao")
const controlValores = document.getElementById("bt-sobre-valores")
let currentItem = 0;
const items = document.querySelectorAll(".sobre-carousel-container-item")
const maxItems = items.length;
const controls = [controlMissao, controlVisao, controlValores]
const sections = document.querySelectorAll("main section")
const navLinks = document.querySelectorAll("header nav ul li a")
const eHeader = document.querySelector("header")

// ================ scroll sections active =========================

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight
        let id = sec.getAttribute('id');
        console.log('top: ', top, 'offset: ', offset, 'height: ', height, 'id: ', id)
        if (top > 10 && top < 300) {
            eHeader.classList.add('sticky')
        } else if (top < 10) {
            eHeader.classList.remove('sticky')
        }
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active')
            })
        }

        if (id === 'contact') {

        }
    })
}


// ====================== buttoms sobre nos ========================

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
