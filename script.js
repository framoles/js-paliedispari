var str = prompt("Inserire una parola");



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