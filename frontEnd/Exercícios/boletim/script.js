var qtdAlunos = 3;
var qtdNotas = 4;

function calcula() {
    let mediaSoma;
    let mediaGeral;

    // Repetições em cada aluno
    for (let aluno = 1; aluno <= qtdAlunos; aluno++){
        let notaParcial;
        let notaTotal = 0;    
      
        // Armazenamento das notas dos alunos
        for (let nota = 1; nota <= qtdNotas; nota++) {
            notaParcial = Number(document.getElementById(`nota${aluno}${nota}`).value);
            notaTotal += notaParcial;

            console.log(notaTotal);

        }

        // Cálculo da média
        let media = notaTotal / qtdNotas;
        document.getElementById(`media${aluno}`).innerText = media;

        if (media >= 65) {
            document.getElementById(`situacao${aluno}`).innerText = 'Aprovado';
            document.getElementById(`situacao${aluno}`).style.backgroundColor = 'green';
        } else {
            if (media < 65 && media >= 50) {
                document.getElementById(`situacao${aluno}`).innerText = 'Recuperação';
                document.getElementById(`situacao${aluno}`).style.backgroundColor = 'yellow';

                } else {
                document.getElementById(`situacao${aluno}`).innerText = 'Reprovado';
                document.getElementById(`situacao${aluno}`).style.backgroundColor = 'red';

                }
        }

        // mediaSoma += media;

    }

    // mediaGeral = mediaSoma / qtdAlunos;
    // document.getElementById('mediaGeral').innerText = mediaGeral;

}