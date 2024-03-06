let result = 0

let questionOne = {
    question: "En 1945 un groupe clandestin de combattants juifs fut fondé pour punir les criminels de guerre nazis. Quel était leur nom ? ",
    response: ["1) Les Avengers.", "2) La Justice League.", "3) Les Inglorious Basterds.", "4) Les Rabbins des Bois."],
}
questionOne.goodAnswer = questionOne.response[2]

let questionTwo = {
    question: "Quel métier Bernard Tapis n'a-t-il pas fait ? ",
    response: ["1) Chanteur.", "2) Animateur télé.", "3) Vendeur de télé.", "4) Jongleur."],
}
questionTwo.goodAnswer = questionTwo.response[3]

let questionThree = {
    question: "Pourquoi Superman porte-t-il son slip sur son pantalon ? ",
    response: ["1) Pour le salir moins vite.", "2) Parce que personne n'ose lui faire la remarque.", "3) Parce que c'est super dur de se changer dans une cabine téléphonique.", "4) Il n'y a aucune explication officielle a cette question."],
}
questionThree.goodAnswer = questionThree.response[3]

let questionFour = {
    question: "Parmi ces 4 voitures, laquelle a vraiment existé ? ",
    response: ["1) La Skoda « Tapina ».", "2) La Nissan « Gigolo ».", "3) La Mazda « Laputa ».", "4) La Fiat « 500 l'amour et 200 la pipe »."],
}
questionFour.goodAnswer = questionFour.response[2]

let questArr = [questionOne, questionTwo, questionThree, questionFour];
let choice;
let index = 0;
let resultMessage = document.querySelector('#resultMessage');
let isBloqued = false

function displayQuestion() {
    document.querySelector('#questionContainer').innerHTML = questArr[index].question

    questArr[index].response.forEach((el, iterator) => {
        document.querySelectorAll(".reponseContainer")[iterator].innerHTML = el
    })

}

function reply(el) {
    if (isBloqued == true) {
        return
    }
    isBloqued = true
    if (el.innerHTML === questArr[index].goodAnswer) {
        result++
        el.classList.add("succes")
    } else {
        el.classList.add("wrong")
        for (let i = 0; i < document.querySelectorAll('.reponseContainer').length; i++) {
            if (document.querySelectorAll('.reponseContainer')[i].innerHTML == questArr[index].goodAnswer) {
                document.querySelectorAll('.reponseContainer')[i].classList.add("succes")
            }
        }
    }
    index++
    if (index < questArr.length) {
        setTimeout(() => {
            document.querySelectorAll('.reponseContainer').forEach((el) => {
                el.classList.remove("succes", "wrong")
                isBloqued = false
            })
            displayQuestion();
        }, 2000)

    } else if (index > questArr.length - 1) {
        document.querySelector("#resultMessage").classList.remove("hidden")
        document.querySelector("#resultMessage").innerHTML = `Quiz terminé ! Vous avez un score de ${result}/4`;
    }
}
displayQuestion()