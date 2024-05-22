const mSections = document.querySelectorAll("section")
const mNavButtons = document.querySelectorAll(".navbar-links li")
const btExplorar = document.querySelector(".home-container-explorar")
let currentSection = 0
let isScrolling = false

const mTextosDestino = [
    {
        destino: "LUA",
        textBody: "Veja nosso planeta como você nunca viu antes. Uma viagem relaxante perfeita para ajudar recupere a perspectiva e volte revigorado. Enquanto estiver lá, conheça um pouco da história visitando os locais de pouso da Luna 2 e da Apollo 11",
        distancia: "384.400 KM",
        tempo: "3 DIAS"
    },
    {
        destino: "MARTE",
        textBody: "Não se esqueça de levar suas botas de caminhada. Você precisará deles para enfrentar o Olympus Mons, a montanha planetária mais alta do nosso sistema solar. É duas vezes e meia o tamanho do Everest!",
        distancia: "225.000 KM",
        tempo: "9 MESES"
    },
    {
        destino: "EUROPA",
        textBody: "A menor das quatro luas galileanas que orbitam Júpiter, Europa é o sonho de qualquer amante do inverno. Com uma superfície gelada, é perfeito para patinar no gelo, curling, hóquei ou simplesmente relaxar em sua confortável cabana de inverno.",
        distancia: "628.000 KM",
        tempo: "3 ANOS"
    },
    {
        destino: "TITAN",
        textBody: "A única lua conhecida por ter uma atmosfera densa além da Terra, Titã é um lar longe de casa (apenas algumas centenas de graus mais frio!). Como bônus, você terá vistas impressionantes dos Anéis de Saturno.",
        distancia: "1.6B KM",
        tempo: "7 ANOS"
    }
]
const mButtonsDestino = document.querySelectorAll(".destino-content-buttons-container li");
const mImgDestino = document.querySelectorAll(".destino-corousel-img-wrapper-items img");
const nomeDestino = document.querySelector(".destino-content h3")
const bodytextDestino = document.querySelector(".destino-content p")
const distanciaDestino = document.querySelector(".destino-content-stats-distace span")
const tempoDestino = document.querySelector(".destino-content-stats-time span")
let currentIndexDestino = 0

const mContentEquipe = [
    {
        cargo: "COMANDANTE",
        nome: "DOUGLAS HURLEY",
        bodyText: "Douglas Gerald Hurley é um engenheiro americano, ex-piloto do Corpo de Fuzileiros Navais e ex-astronauta da NASA. Ele foi lançado ao espaço pela terceira vez como comandante da Crew Dragon Demo-2.",
        img: "assets/crew/image-douglas-hurley.png"
    },
    {
        cargo: "ESPECIALISTA EM MISSÕES",
        nome: "MARK SHUTTLEWORTH",
        bodyText: "Mark Richard Shuttleworth é o fundador e CEO da Canonical, a empresa por trás do sistema operacional Ubuntu baseado em Linux. Shuttleworth se tornou o primeiro sul-africano a viajar ao espaço como turista espacial.",
        img: "assets/crew/image-mark-shuttleworth.png"
    },
    {
        cargo: "PILOTO",
        nome: "VICTOR GLOVER",
        bodyText: "Piloto do primeiro vôo operacional do SpaceX Crew Dragon para a Estação Espacial Internacional. Glover é comandante da Marinha dos EUA, onde pilota um F/A-18. Ele foi membro da tripulação da Expedição 64 e serviu como engenheiro de vôo de sistemas de estação.",
        img: "assets/crew/image-victor-glover.png"
    },
    {
        cargo: "ENGENHEIRA DE VOO",
        nome: "ANOUSHEH ANSARI",
        bodyText: "Anousheh Ansari é um engenheirA iraniana-americana e cofundadora da Prodea Systems. Ansari foi a quarta turista espacial autofinanciada, a primeira mulher autofinanciada a voar para a ISS e a primeira iraniana no espaço.",
        img: "assets/crew/image-anousheh-ansari.png"
    }
]
const mButtonsEquipe = document.querySelectorAll(".equipe-container-content-buttons button")
const cargoEquipe = document.querySelector(".equipe-container-content-texts h5")
const nomeEquipe = document.querySelector(".equipe-container-content-texts h4")
const textoEquipe = document.querySelector(".equipe-container-content-texts p")
const mImgsEquipe = document.querySelectorAll(".equipe-container-imgs img")
let currentIndexEquipe = 0

const mContentTecnologia = [
    {
        nome: "VEÍCULO DE LANÇAMENTO",
        bodyText: "Um veículo de lançamento ou foguete transportador é um veículo movido a foguete usado para transportar uma carga útil da superfície da Terra para o espaço, geralmente para a órbita terrestre ou além. Nosso foguete transportador WEB-X é o mais poderoso em operação. Com 150 metros de altura, é uma visão inspiradora na plataforma de lançamento!"
    },
    {
        nome: "PORTO ESPACIAL",
        bodyText: "Um espaçoporto ou cosmódromo é um local de lançamento (ou recebimento) de espaçonaves, por analogia ao porto marítimo para navios ou ao aeroporto para aeronaves. Baseado no famoso Cabo Canaveral, o nosso espaçoporto está idealmente situado para aproveitar a rotação da Terra para o lançamento."
    },
    {
        nome: "CÁPSULA ESPACIAL",
        bodyText: "Uma cápsula espacial é uma espaçonave frequentemente tripulada que usa uma cápsula de reentrada de corpo rombudo para reentrar na atmosfera da Terra sem asas. Nossa cápsula é onde você passará seu tempo durante o voo. Inclui academia espacial, cinema e muitas outras atividades para mantê-lo entretido."
    }
]
const mButtonsTecnologia = document.querySelectorAll(".tecnologia-container-content-buttons button")
const nomeTecnologia = document.querySelector(".tecnologia-container-content-texts h4")
const textoTecnologia = document.querySelectorAll(".tecnologia-container-content-texts p")
const mImgsTecnologiaPortrait = document.querySelectorAll(".tecnologia-container-imgs-portrait img")
const mImgsTecnologiaLandscape = document.querySelectorAll(".tecnologia-container-imgs-landscape img")



// function temporaria responsivo 
// function updateDimensions() {
//     const heightInfo = document.getElementById("height-info");
//     const widthInfo = document.getElementById("width-info");

//     heightInfo.textContent = `Altura: ${window.innerHeight}px`;
//     widthInfo.textContent = `Largura: ${window.innerWidth}px`;
// }

// // Atualiza na inicialização
// updateDimensions();

// // Atualiza a cada redimensionamento da janela
// window.addEventListener("resize", updateDimensions);

function mudaSection(indexSection) {
    const targetSection = mSections[indexSection]

    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth"
    })

    mNavButtons.forEach(bt => bt.classList.remove("active"))

    mNavButtons[indexSection].classList.add("active")
}

btExplorar.addEventListener("click", function () {
    currentSection = 1
    mudaSection(currentSection)
})

mNavButtons.forEach((item, index) => {
    item.addEventListener("click", function () {
        currentSection = index

        mudaSection(currentSection)
    })
})

window.addEventListener("wheel", function (event) {

    if (isScrolling) return

    isScrolling = true

    const delta = event.deltaY

    if (delta > 0) {
        currentSection = Math.min(currentSection + 1, mSections.length - 1)
    } else {
        currentSection = Math.max(currentSection - 1, 0)
    }

    mudaSection(currentSection)

    setTimeout(() => {
        isScrolling = false
    }, 300);

})

mButtonsDestino.forEach((control, index) => {
    control.addEventListener("click", (e) => {

        if (currentIndexDestino !== index) {

            mButtonsDestino.forEach((bt) => bt.classList.remove("active"))
            mButtonsDestino[index].classList.add("active")

            mImgDestino.forEach(img => { img.classList.remove("animationright") })
            mImgDestino.forEach(img => { img.classList.remove("animationleft") })

            // nomeDestino.classList.add('hidden')
            const elementosDestinos = [nomeDestino, bodytextDestino, distanciaDestino, tempoDestino];

            // Adicionar a classe 'hidden' a cada elemento
            elementosDestinos.forEach(elemento => {
                elemento.classList.add("hidden");
            });

            setTimeout(() => {
                nomeDestino.textContent = mTextosDestino[index].destino
                bodytextDestino.textContent = mTextosDestino[index].textBody
                distanciaDestino.textContent = mTextosDestino[index].distancia
                tempoDestino.textContent = mTextosDestino[index].tempo

                elementosDestinos.forEach(elemento => {
                    elemento.classList.remove("hidden");
                });
            }, 300);

            setTimeout(() => {

                if (currentIndexDestino > index) {
                    mImgDestino.forEach(img => { img.classList.add("animationright") })

                } else {
                    mImgDestino.forEach(img => { img.classList.add("animationleft") })

                }
                currentIndexDestino = index
            }, 1);


            mImgDestino[index].scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest"
            })
        }

    });
});

mButtonsEquipe.forEach((control, index) => {
    control.addEventListener("click", () => {
        if (currentIndexEquipe !== index) {
            mButtonsEquipe.forEach(bt => bt.classList.remove("active"))
            mButtonsEquipe[index].classList.add("active")

            const elementosEquipes = [cargoEquipe, nomeEquipe, textoEquipe]

            elementosEquipes.forEach(elemento => {
                elemento.classList.add("hidden");
            });

            mImgsEquipe.forEach(img => {
                img.classList.add("hidden")
            })

            setTimeout(() => {
                cargoEquipe.textContent = mContentEquipe[index].cargo
                nomeEquipe.textContent = mContentEquipe[index].nome
                textoEquipe.textContent = mContentEquipe[index].bodyText
                // imgEquipe.src = mContentEquipe[index].img
                mImgsEquipe.forEach(img => img.classList.remove("active"))
                mImgsEquipe[index].classList.add("active")

                elementosEquipes.forEach(elemento => {
                    elemento.classList.remove("hidden");
                });

                mImgsEquipe.forEach(img => {
                    img.classList.remove("hidden")
                })

                mImgsEquipe[index].classList.add("animation")

            }, 300);

            // nomeEquipe.textContent = ""

            currentIndexEquipe = index


        }
    })
})

mButtonsTecnologia.forEach((control, index) => {
    control.addEventListener("click", () => {
        mButtonsTecnologia.forEach(bt => bt.classList.remove("active"))

        mButtonsTecnologia[index].classList.add("active")

        const elementosTecnologia = [nomeTecnologia, textoTecnologia[1]]

        elementosTecnologia.forEach(elemento => elemento.classList.add("hidden"))

        setTimeout(() => {
            nomeTecnologia.textContent = mContentTecnologia[index].nome
            textoTecnologia[1].textContent = mContentTecnologia[index].bodyText

            mImgsTecnologiaLandscape.forEach(img => img.classList.remove("active"))
            mImgsTecnologiaLandscape[index].classList.add("active")
            mImgsTecnologiaPortrait.forEach(img => img.classList.remove("active"))
            mImgsTecnologiaPortrait[index].classList.add("active")

            elementosTecnologia.forEach(elemento => elemento.classList.remove("hidden"))

            mImgsTecnologiaLandscape[index].classList.add("animation")
            mImgsTecnologiaPortrait[index].classList.add("animation")
        }, 300);




    })
})