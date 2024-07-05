"use script"
window.alert("2º Enunciado.");

//Faça um programa que calcule a média de 3 notas e diga se a pessoa foi aprovada (média maior ou igual a 60) ou reprovada (média menor que 60). Não existe recuperação nesse enunciado.

var noTa1, noTa2, noTa3
    
noTa1=parseFloat (prompt("Digite a 1º nota:"));
noTa2=parseFloat (prompt("Digite a 2º nota:"));
noTa3=parseFloat (prompt("Digite a 3º nota:"));

if((noTa1+noTa2+noTa3)/2 >= 6.0){
    window.alert("Parabéns " + noMe + ", você está APROVADO!");
}else if((noTa1+noTa2+noTa3)/2 < 6.0){
    window.alert(noMe + ", você está Reprovado.");
}