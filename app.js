alert('Boas vindas ao jogo da adivinhação')
numeroMax = 5000
numero = parseInt(Math.random()*numeroMax+1);
chute = 0
tentativas = 1
while (chute != numero) {
    chute = prompt(`Escolha um número entre 0 e ${numeroMax}`);
    if (chute == numero) {
        break;
    } else {
        if (chute > numero) {
            alert(`O número secreto é menor que ${chute}.`);
        }
        if (chute < numero) {
            alert(`O número secreto é maior que ${chute}.`);
        }
    }
   tentativas++
}
palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns você acertou depois de ${tentativas} ${palavraTentativa}! O número secreto é ${numero}!`);