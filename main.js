console.log('mains.js loaded');

function checkCardNumber(event) {
    event.preventDefault();
    let cardNumber = document.getElementById('cardNumber').value;
    console.log(`numero de la carte : ${cardNumber}`)
    // your code here
    
    let tabCardNumber = cardNumber.split("");
    console.log(`le tableau des numeros de la carte : ${tabCardNumber}`);
    
    let lastNumber = tabCardNumber[tabCardNumber.length - 1];
    console.log(`le dernier chiffre de la carte : ${lastNumber}`);

    let cardNumber_last = tabCardNumber.splice(-1, 1);

    console.log(`le chiffre retiré du tableau : ${cardNumber_last}`);
    console.log(`le tableau des numeros de la carte sans le dernier chiffre : ${tabCardNumber}`)

    tabCardNumber.reverse()

    console.log(`le tableau des numeros de la carte inversé : ${tabCardNumber}`)

    let tabCardNumber_pair = [];
    let tabcardNumber_impair = [];

    for (i = 0; i < tabCardNumber.length; i++) {
        if (i % 2 == 0) {
            tabCardNumber_pair.push(tabCardNumber[i] * 2);
        }
        else {
            tabcardNumber_impair.push(tabCardNumber[i])
        }
    }

    console.log(`le tableau avec les indices  x2 : ${tabCardNumber_pair}`);

    let tabCardNumber_pair9 = [];

    for (i = 0; i < tabCardNumber_pair.length; i++) {
        if (tabCardNumber_pair[i] > 9) {
            tabCardNumber_pair9.push(tabCardNumber_pair[i] -9)
        }
        else {
            tabCardNumber_pair9.push(tabCardNumber_pair[i])
        }
    }

    console.log(`le tableau avec les valeurs -9 : ${tabCardNumber_pair9}`)

    let result = parseInt(lastNumber);
    console.log(`valeur result avant addition : ${result}`)

    for (i = 0; i < tabCardNumber_pair9.length; i++) {
        result += parseInt(tabCardNumber_pair9[i]);
    }

    for (i = 0; i < tabcardNumber_impair.length; i++) {
        result += parseInt(tabcardNumber_impair[i])
    }
    
    console.log(`Valeur result aprés addition : ${result}`)

    if (result % 10 == 0) {
        alert("cette carte est Valide")
    }
    else {
        alert("Carte Invalide")
    }
    
}