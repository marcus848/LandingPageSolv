const controlMissao = document.getElementById("bt-sobre-missao")
const controlVisao = document.getElementById("bt-sobre-visao")
const controlValores = document.getElementById("bt-sobre-valores")
const items = document.querySelectorAll(".sobre-carousel-container-item")
const maxItems = items.length;
const controls = [controlMissao, controlVisao, controlValores]
const sections = document.querySelectorAll("main section")
const navLinks = document.querySelectorAll("header nav ul li a")
const eHeader = document.querySelector("header")
const servicesCards = document.querySelectorAll(".servicos-container-cards-card")
const servicesItems = document.querySelectorAll(".servicos-container-items-item")
const buttonsFeedback = document.querySelectorAll(".feedbacks-carousel-button")
const feedbacksItems = document.querySelectorAll(".feedbacks-carousel-items-item")
const feedbacksDots = document.querySelector(".feedbacks-dots")
let currentItemFeedback = 0;
let currentItemFeedbackDot = 0;
// ================ scroll sections active =========================

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight
        let id = sec.getAttribute('id');
        console.log('top: ', top, 'offset: ', offset, 'height: ', height, 'id: ', id)
        if (top > 10) {
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

        // console.log(id)
    })
}


// ====================== buttoms sobre nos ========================

function selectMVV(ItemIndex) {
    const currentButton = controls[ItemIndex];

    controls.forEach((Buttons) => Buttons.classList.remove('button-sobre-active'))
    currentButton.classList.add('button-sobre-active')

    items[ItemIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest"
    })
}

controlMissao.addEventListener('click', () => selectMVV(0))
controlVisao.addEventListener('click', () => selectMVV(1))
controlValores.addEventListener('click', () => selectMVV(2))


// ======================== services =================================


servicesCards.forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        let cardIndex = Array.from(servicesCards).indexOf(e.target)

        servicesCards.forEach((eCard) => eCard.classList.remove('active'))
        servicesCards[cardIndex].classList.add('active')

        servicesItems.forEach((eService) => eService.classList.remove('active'))
        servicesItems[cardIndex].classList.add('active')


    }); // Passando apenas a referência da função
})

// ========================== feedbacks ===================================
function changeFeedback(indexFeedback) {
    console.log("Índice recebido:", indexFeedback);

    const test = document.querySelectorAll(".feedbacks-dots-dot")
    test.forEach(dot => dot.classList.remove("active"));

    test[indexFeedback].classList.add("active");

    if (indexFeedback >= 0 && indexFeedback < feedbacksItems.length) {
        feedbacksItems[indexFeedback].scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest"
        });
    } else {
        console.log("Índice fora dos limites:", indexFeedback);
    }
}
buttonsFeedback.forEach(bt => {

    bt.addEventListener("click", (e) => {
        let qntdItemsFeedbacks = feedbacksItems.length - 1

        let isBack = e.currentTarget.classList.contains("feedbacks-button-back");

        console.log(isBack)
        if (isBack) {
            currentItemFeedback -= 1
        } else {
            currentItemFeedback += 1
        }

        if (currentItemFeedback > qntdItemsFeedbacks) {
            currentItemFeedback = 0
        }
        if (currentItemFeedback < 0) {
            currentItemFeedback = qntdItemsFeedbacks
        }

        changeFeedback(currentItemFeedback)

    })
})

feedbacksItems.forEach((item, index) => {
    var newfeedbacksDot = document.createElement("div");
    newfeedbacksDot.className = "feedbacks-dots-dot";
    feedbacksDots.appendChild(newfeedbacksDot);
    if (index === 0) {
        newfeedbacksDot.classList.add("active")
    }
    newfeedbacksDot.addEventListener("click", (e) => {
        currentItemFeedback = index



        changeFeedback(index);
    });
});



