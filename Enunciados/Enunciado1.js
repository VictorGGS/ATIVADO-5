"use script"
window.alert("1º Enunciado.");

//Faça um programa que entre com um nome, um dia e um mês. Se o Nome de Celso Portiolli, do dia 11 e do mês 9, estampa "O Celso Portiolli não tem nada a ver com o 11 de Setembro". Se o dia e o mês corresponderem à data de hoje (04/07) e o nome do seu, imprima "Faça a prova com atenção".

var noMe, dataDia, dataMes

noMe=prompt("Quem é você?");
dataDia=parseFloat(prompt("Informe dia:"));
dataMes=parseFloat(prompt("Informe mês:"));

if(noMe=="Celso Portiolli" && dataDia==11 && dataMes==9){
    window.alert("O Celso Portiolli não tem nada a ver com o 11 de Setembro.");
}else if(dataDia==4 && dataMes==7){
    window.alert("Faça a prova com atenção.");
}else{
    window.alert("Acertei?");
}