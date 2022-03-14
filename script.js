btnPal = document.getElementById("pal");
btnOddEven = document.getElementById("oddeven");

btnPal.addEventListener("click", function () {

    var str = prompt("Inserire una parola");
    str = str.split(' ').join('');

    function palindrome(strReverse) {
        strReverse = str.split('').reverse().join('');

        if (str.toLowerCase() == strReverse.toLowerCase()) {
            return true;
        }
        else {
            return false;
        }

    }

    let check = palindrome();

    if (check) {
        alert("E' palindromo!");
    }
    else {
        alert("Non è palindromo!");
    }

})


btnOddEven.addEventListener("click", function () {

    let scelta = prompt("Pari o dispari?");
    let num = 0;
    do {
        num = parseInt(prompt("Ins numero da 1 a 5"));
    } while (num == 0 || num > 5);

    function randomCpu() {
        return Math.floor(Math.random() * 5) + 1;
    }

    const random = randomCpu();
    console.log(random);

    let somma = num + random;


    function isOddOrEven() {
        if (somma % 2 === 0) {
            return "pari";
        }
        else {
            return "dispari";
        }
    }

    if (scelta === isOddOrEven()) {
        alert("Hai vinto: " + somma);
    }
    else {
        alert("Hai perso: " + somma);
    }

})