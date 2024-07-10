let peso = 100
let altura = 1.84


let imc = peso / (altura ** 2);


console.log("IMC: " + imc);


if (imc < 18.5) {
    console.log(`abaixo do peso.`);
  } else if (imc >= 18.6 && imc <= 24.9) {
    console.log(`ideal (parabéns)!`);
  } else if (imc >= 25.0 && imc <= 29.9) {
    console.log(`levemente acima do peso.`);
  } else if (imc >= 30.0 && imc <= 34.9) {
    console.log(`obesidade grau I.`);
  } else if (imc >= 35.0 && imc <= 39.9) {
    console.log(`obesidade grau II (severa).`);
  } else {
    console.log(`obesidade grau III (mórbida).`);
  }