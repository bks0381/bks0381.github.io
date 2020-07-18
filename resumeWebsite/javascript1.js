let hidden = document.querySelectorAll('.hidecategories');
let shown = document.querySelectorAll('.showcategories');
let buttonswap = document.querySelectorAll('.center');
let x;
let y = 0;
let mathAnswer = document.querySelectorAll('.correctAnswerMath');
let scienceAnswer = document.querySelectorAll('.correctAnswerScience')
let techAnswer = document.querySelectorAll('.correctAnswerTech')
let geoAnswer = document.querySelectorAll('.correctAnswerGeo')
let scoreMath = 0;
let scoreScience = 0;
let scoreTech = 0;
let scoreGeo = 0;
let totalScore = 0;

//button functions
function nextdiv() {
    //shown[0] = math
    shown[0].classList.remove('showcategories');
    //math is now hidden[0]
    shown[0].classList.add('hidecategories');
    hidden[0].classList.remove('hidecategories');
    hidden[0].classList.add('showcategories');
    //buttonswap[0] = button going to science removed
    buttonswap[0].classList.add('hidecategories');
    //buttonswap [1] = button going to technology added
    buttonswap[1].classList.remove('hidecategories');
}

function techdiv() {
    hidden[0].classList.remove('showcategories');
    hidden[0].classList.add('hidecategories');
    hidden[2].classList.remove('hidecategories');
    hidden[2].classList.add('showcategories');
    buttonswap[1].classList.add('hidecategories');
    buttonswap[2].classList.remove('hidecategories');
}

function geodiv() {
    hidden[2].classList.remove('showcategories');
    hidden[2].classList.add('hidecategories');
    hidden[3].classList.add('showcategories');
    buttonswap[2].classList.add('hidecategories');
    buttonswap[3].classList.remove('hidecategories');
}

function finish() {
    hidden[3].classList.remove('showcategories');
    hidden[4].classList.remove('hidecategories');
    hidden[4].classList.add('showcategories');
    buttonswap[2].classList.add('hidecategories');
    buttonswap[3].classList.add('hidecategories');

    //scoring
    //will apply loop using array
    for (x = 0; x < mathAnswer.length; x++) {
        if (mathAnswer[x].checked) {
            scoreMath++;
        }
    }

    for (x = 0; x < scienceAnswer.length; x++) {
        if (scienceAnswer[x].checked) {
            scoreScience++;
        }
    }

    for (x = 0; x < techAnswer.length; x++) {
        if (techAnswer[x].checked) {
            scoreTech++;
        }
    }

    for (x = 0; x < geoAnswer.length; x++) {
        if (geoAnswer[x].checked) {
            scoreGeo++;
        }
    }

    totalScore = scoreMath + scoreScience + scoreTech + scoreGeo;
    document.getElementById('finalScore').innerHTML = ('Final Score: ') + totalScore;
    document.getElementById('mathScore').innerHTML = ('Math - ') + scoreMath;
    document.getElementById('scienceScore').innerHTML = ('Science - ') + scoreScience;
    document.getElementById('techScore').innerHTML = ('Technology - ') + scoreTech;
    document.getElementById('geoScore').innerHTML = ('Geography - ') + scoreGeo;
}