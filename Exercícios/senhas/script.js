function gerarSenha() {
    let senha = '';
    let senhas = '';
    let carac = 'abcdefghijklmnopqrstuvwxyz';
    let tamanho = document.getElementById('tamSen').value;
    let quantidade = document.getElementById('qtdSen').value;

    // .checked --> booleana para verificar se o checkbox foi pressionado
    let car = document.getElementById('incCar').checked;
    let nu = document.getElementById('incNum').checked;
    let mai = document.getElementById('incLetMa').checked;

    if (car == true){carac += '!@#$%¨&*()`´';}
    if (nu == true){carac += '1234567890';}
    if (mai == true){carac += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';}

    for (let i = 1; i <= quantidade; i++) {
        senha = '';
        for (let i = 1; i <= tamanho; i++) {
            let aleatorio = Math.floor(Math.random() * carac.length);
            senha = senha + carac.charAt(aleatorio);
    
        }

        senhas = senha + '\n' + senhas;
    }

    document.getElementById('resposta').value = senhas;

}

function limparSenha() {
    document.getElementById('resposta').value = '';
}