let formulario = document.querySelector("#formulario");

let nomeCompleto = document.querySelector("#nomeCompleto");

let dataNascimento = document.querySelector("#dataNascimento"); //

let inserirTexto = document.querySelector(".inserirSigno");

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
let dia, mes, resultad;

function descobrirSigno(dia, mes) {
  if ((dia <= 19 && mes === 1) || (dia >= 22 && mes === 12)) {
    alert(
      `Seu Signo é ${capricornio}, clique no link abaixo para descobrir seu Horóscopo.`
    );
  } else if ((dia >= 20 && mes === 1) || (dia <= 18 && mes === 2)) {
    alert(
      `Seu Signo é ${aquario}, clique no link abaixo para descobrir seu Horóscopo.`
    );
  } else if ((dia >= 19 && mes === 2) || (dia <= 20 && mes === 3)) {
    alert(
      `Seu Signo é ${peixe}, clique no link abaixo para descobrir seu Horóscopo.`
    );
  } else if ((dia >= 21 && mes === 3) || (dia <= 19 && mes === 4)) {
    alert(
      `Seu Signo é ${aries}, clique no link abaixo para descobrir seu Horóscopo.`
    );
  } else if ((dia >= 20 && mes === 4) || (dia <= 20 && mes === 5)) {
    alert(
      `Seu Signo é ${touro}, clique no link abaixo para descobrir seu Horóscopo.`
    );
  } else if ((dia >= 21 && mes === 5) || (dia <= 21 && mes === 6)) {
    alert(
      `Seu Signo é ${gemeos}, clique no link abaixo para descobrir seu Horóscopo.`
    );
  } else if ((dia >= 22 && mes === 6) || (dia <= 22 && mes === 7)) {
    alert(
      `Seu Signo é ${cancer}, clique no link abaixo para descobrir seu Horóscopo.`
    );
  } else if ((dia >= 23 && mes === 7) || (dia <= 22 && mes === 8)) {
    alert(
      `Seu Signo é ${leao}, clique no link abaixo para descobrir seu Horóscopo.`
    );
  } else if ((dia >= 23 && mes === 8) || (dia <= 22 && mes === 9)) {
    alert(
      `Seu Signo é ${virgem}, clique no link abaixo para descobrir seu Horóscopo.`
    );
  } else if ((dia >= 23 && mes === 9) || (dia <= 22 && mes === 10)) {
    alert(
      `Seu Signo é ${libra}, clique no link abaixo para descobrir seu Horóscopo.`
    );
  } else if ((dia >= 23 && mes === 10) || (dia <= 21 && mes === 11)) {
    alert(
      `Seu Signo é ${escorpiao}, clique no link abaixo para descobrir seu Horóscopo.`
    );
  } else if ((dia >= 22 && mes === 11) || (dia <= 21 && mes === 12)) {
    alert(
      `Seu Signo é ${sagitario}, clique no link abaixo para descobrir seu Horóscopo.`
    );
  }
}

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  let resultado;
  dia = Number(dataNascimento.value.slice(-2));
  mes = Number(dataNascimento.value.slice(5, 7));
  // console.log(
  //   `Olá ${nomeCompleto.value}, seu nascimento foi ${dia}/${mes}, portante seu Signo é `
  // );
  descobrirSigno(dia, mes);
});
