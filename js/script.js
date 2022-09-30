let formulario = document.querySelector("#formulario");

let nomeCompleto = document.querySelector("#nomeCompleto");

let dataNascimento = document.querySelector("#dataNascimento"); //

let enviar = document.querySelector("#enviar");

let capricornio = "Capricórnio";
let aquario = "Aquário";
let peixe = "Peixes";
let aries = "Áries";
let touro = "Touro";
let gemeos = "Gêmeos";
let cancer = "Câncer";
let leao = "Leão";
let virgem = "Virgem";
let libra = "Libra";
let escorpiao = "Escorpião";
let sagitario = "Sagitário";
let dia, mes;

function descobrirSigno(dia, mes) {
  if ((dia <= 19 && mes === 1) || (dia >= 22 && mes === 12)) {
    console.log(`Seu Signo é ${capricornio}.`);
  } else if ((dia >= 20 && mes === 1) || (dia <= 18 && mes === 2)) {
    console.log(`Seu Signo é ${aquario}.`);
  } else if ((dia >= 19 && mes === 2) || (dia <= 20 && mes === 3)) {
    console.log(`Seu Signo é ${peixe}.`);
  } else if ((dia >= 21 && mes === 3) || (dia <= 19 && mes === 4)) {
    console.log(`Seu Signo é ${aries}.`);
  } else if ((dia >= 20 && mes === 4) || (dia <= 20 && mes === 5)) {
    console.log(`Seu Signo é ${touro}.`);
  } else if ((dia >= 21 && mes === 5) || (dia <= 21 && mes === 6)) {
    console.log(`Seu Signo é ${gemeos}.`);
  } else if ((dia >= 22 && mes === 6) || (dia <= 22 && mes === 7)) {
    console.log(`Seu Signo é ${cancer}.`);
  } else if ((dia >= 23 && mes === 7) || (dia <= 22 && mes === 8)) {
    console.log(`Seu Signo é ${leao}.`);
  } else if ((dia >= 23 && mes === 8) || (dia <= 22 && mes === 9)) {
    console.log(`Seu Signo é ${virgem}.`);
  } else if ((dia >= 23 && mes === 9) || (dia <= 22 && mes === 10)) {
    console.log(`Seu Signo é ${libra}.`);
  } else if ((dia >= 23 && mes === 10) || (dia <= 21 && mes === 11)) {
    console.log(`Seu Signo é ${escorpiao}.`);
  } else if ((dia >= 22 && mes === 11) || (dia <= 21 && mes === 12)) {
    console.log(`Seu Signo é ${sagitario}.`);
  }
}
// descobrirSigno();

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  dia = Number(dataNascimento.value.slice(-2));
  mes = Number(dataNascimento.value.slice(5, 7));
  console.log(`Seu nascimento foi ${dia}/${mes};`);
  descobrirSigno(dia, mes);
});
