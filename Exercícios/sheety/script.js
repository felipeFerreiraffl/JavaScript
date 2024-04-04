let url = 'https://api.sheety.co/1b4eba9050179bf79740a9f4b34c9563/2Dn/aluno';
fetch(url)
    .then((resp) => resp.json())
        .then(json => {
            // Do something with the data
            console.log(json.aluno);
            // Seleção para poder referenciar no indez
            document.querySelector("#aluno").value = json.aluno[2].nome;
            document.querySelector("#matricula").value = json.aluno[2].matricula;
            document.querySelector("#turno").value = json.aluno[2].turno;
        })
        .catch(() => {
            console.log('Not encontrou');
        });