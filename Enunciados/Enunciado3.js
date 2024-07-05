"use script"
window.alert("3º Enunciado.");

//Faça um programa que calcule o peso de n gado, até que o peso informado seja 0 (não deve ser contabilizado). Ao final da leitura, imprima o peso do menor ou maior, do maior gado e a média do peso dos gados.

var peSo=0; var pesoMenor=Number.MAX_SAFE_INTEGER; var pesoMaior=0; var pesoMedia=0; var soMa=0; var conTador=0; var inPut=0; var resuLtado=0;

    // "while(){}" equivale a "enquanto"
        // "Number.MAX_SAFE_INTEGER;" Maior número seguro em JavaScript
    while (true) {
            // Solicita o peso do usuário
        inPut = prompt("Informe o peso do gado (0 para terminar):");
        peSo = parseFloat(inPut);
            // Verifica se a entrada é um número válido
        if (isNaN(peSo)) {
            alert("Por favor, insira um número válido.");
            continue;
        }
            // Termina se o peso for 0
        if (peSo === 0) {
            break;
        }
            // Atualiza os valores de menor e maior peso
        if (peSo < pesoMenor) {
            pesoMenor = peSo;
        }
        if (peSo > pesoMaior) {
            pesoMaior = peSo;
        }
            // Adiciona o peso à soma total e incrementa o contador
        soMa += peSo;
        conTador++;
    }   
        // Calcula a média
    pesoMedia = conTador > 0 ? soMa / conTador : 0;    
        // Exibe os resultados
    resuLtado = 'Menor peso: ' + (conTador > 0 ? pesoMenor : 'Nenhum gado registrado') + '\n';
    resuLtado += 'Maior peso: ' + (conTador > 0 ? pesoMaior : 'Nenhum gado registrado') + '\n';
    resuLtado += 'Média dos pesos: ' + (conTador > 0 ? pesoMedia.toFixed(2) : 'Nenhum gado registrado');
    
    alert(resuLtado);