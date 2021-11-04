const EXERC_02 = document.getElementById("exerc02");
const EXERC_03 = document.getElementById("exerc03");
const EXERC_04 = document.getElementById("exerc04");
const EXERC_05 = document.getElementById("exerc05");
const EXERC_06 = document.getElementById("exerc06");
const EXERC_07 = document.getElementById("exerc07");
const EXERC_08 = document.getElementById("exerc08");
const EXERC_09 = document.getElementById("exerc09");
const EXERC_10 = document.getElementById("exerc10");
const EXERC_11 = document.getElementById("exerc11");

function showAlert(){
    window.alert("M1S02 - Exercício 02");
}

function confirmAction(){
    if (window.confirm("Deseja realmente executar essa ação?")){
        window.alert("Ação executada!");
    }
}

function getAndShowName(){
    let name = window.prompt("Informe o seu nome:")
    window.alert(`O nome informado foi: ${name}.`);
}

function getNameToConsoleLog(){
    return  window.prompt("Informe o seu nome:");    
}

function getAgeToConsoleLog(){    
        return parseInt(window.prompt("Informe a sua idade:"));        
}

function likesSports(){
    return window.confirm("Gosta de praticar esportes?");
}

function showInfoInConsole(){
    let name = getNameToConsoleLog();
    let age = 0;
    //como o exercício exige para obter o dado usando prompt, realizei uma validação basica
    do {
        age = getAgeToConsoleLog();
    } while (age <= 0 || isNaN(age))

    let sports = likesSports() ? "gosta" : "não gosta";

    console.log(`O nome informado foi: ${name}. Sua idade é: ${age} anos. Você ${sports} de praticar esportes.`);
}

function showFullName(){
    let lastName = window.prompt("Informe o seu ultimo nome:");
    let firstName = window.prompt("Informe o seu primeiro nome:");

    window.alert(`O seu nome completo é: ${firstName} ${lastName}`);
}

function countCharName(){
    let lastName = window.prompt("nome");        
    window.alert(`Olá ${lastName.toUpperCase()}. Seu sobrenome tem ${lastName.length} letras.`);
    
}

function calcAge(){    
    let birthdayYear = parseInt(window.prompt("Informe o ano de seu nascimento"));     
    if((birthdayYear <= 0) || (isNaN(birthdayYear))){
         do {
             birthdayYear = parseInt(window.prompt("Informe um ano de nascimento válido"));
         } while ((birthdayYear <= 0) || (isNaN(birthdayYear)));
    }

    let currentYear = parseInt(window.prompt("Informe o ano atual"));
    if((typeof(currentYear) !== 'number') || (isNaN(currentYear))){
        do {
            currentYear = window.prompt("Informe o ano atual válido");
        } while((typeof(currentYear) !== 'number') || (isNaN(currentYear)));
    }

    let alreadyCelebrated = window.confirm("Já comemorou aniversário este ano?");

    let age = currentYear - birthdayYear;

    window.alert(alreadyCelebrated ? `Você tem ${age} anos.` : `Você irá fazer ${age} anos.`);
}

function calculator(){
    let operator = window.prompt("Qual o tipo de operação deseja realizar? +, -, * ou / ");

    if((operator !== "+") && (operator !== "-") && 
        (operator !== "*") && (operator !== "/")) {
        do {
            operator = window.prompt("Operador inválido, informe '+', '-' , '*' ou '/'");
        } while ((operator !== "+") && (operator !== "-") &&
                 (operator !== "*") && (operator !== "/"));
    }

     let numA = parseInt(window.prompt("Informe o primeiro número."));
     if(isNaN(numA)){
        do {
            numA = parseInt(window.prompt("O primeiro número não é válido."));
        } while (isNaN(numA));
    }

    let numB = parseInt(window.prompt("Informe o segundo número."));
    if(isNaN(numB)){
        do {
            numB = parseInt(window.prompt("O segundo número não é válido."));
        } while (isNaN(numB));
    }

    if((operator === "/") && (numB === 0)){
        do {
            numB = parseInt(window.prompt("O segundo número não pode ser zero para a operação de divisão."));
        } while (numB === 0);    
    }    

    switch(operator){
        case "+":             
            window.alert(`O resultado do seu cálculo é: ${numA + numB}`);
            break;
        
        case "-":
            window.alert(`O resultado do seu cálculo é: ${numA - numB}`);
            break;

        case "*":
            window.alert(`O resultado do seu cálculo é: ${numA * numB}`);
            break;

        case "/":
            window.alert(`O resultado do seu cálculo é: ${numA / numB}`);
            break;
    }
}

function showTime(){
    let date = new Date();    
    //window.alert(`Hora de acesso: ${date.toLocaleTimeString()}`); formato HH mm ss
    window.alert(`Hora de acesso: ${date.getHours()}:${date.getMinutes()}`); //formato HH mm
}

function calcPA(){
    let startValue = parseInt(window.prompt("Informe o valor inicial da PA"));
    if(isNaN(startValue)){
        do {
            startValue = parseInt(window.prompt("Informe o valor inicial válido para a PA"));
        } while (isNaN(startValue));
    }

    let rootValue = parseInt(window.prompt("Informe o valor de razão da PA"));
    if(isNaN(rootValue)){
        do {
            rootValue = parseInt(window.prompt("Informe o valor de razão válido para a PA"));
        } while(isNaN(rootValue));
    }

    let classification = "";
    if (rootValue > 0) {
        classification = "crescente";
    } else if(rootValue < 0){
        classification = "decrescente";
    } else{
        classification = "constante";
    }
    
    let arrayPA = [startValue];
    let calcPA = startValue;
    for (let index = 1; index < 10; index++) {
        calcPA += rootValue;
        arrayPA.push(calcPA)
    }
    window.alert(`Sua PA é classificada como ${classification} \n ${arrayPA}`);
}

EXERC_02.addEventListener("click", showAlert);
EXERC_03.addEventListener("click", confirmAction);
EXERC_04.addEventListener("click", getAndShowName);
EXERC_05.addEventListener("click", showInfoInConsole);
EXERC_06.addEventListener("click", showFullName);
EXERC_07.addEventListener("click", countCharName);
EXERC_08.addEventListener("click", calcAge);
EXERC_09.addEventListener("click", calculator);
EXERC_10.addEventListener("click", showTime);
EXERC_11.addEventListener("click", calcPA);