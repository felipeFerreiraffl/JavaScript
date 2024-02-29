var qtdAlunos = 3;
var qtdNotas = 4;

function calcula() {
    let mediaGeral;
    let mediaSoma = 0;

    // Repetições em cada aluno
    for (let aluno = 1; aluno <= qtdAlunos; aluno++){
        let notaParcial;
        let notaTotal = 0;    
      
        // Armazenamento das notas dos alunos
        for (let nota = 1; nota <= qtdNotas; nota++) {
            notaParcial = Number(document.getElementById(`nota${aluno}${nota}`).value);
            notaTotal += notaParcial;

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

        mediaSoma += media;

    }

    mediaGeral = mediaSoma / qtdAlunos;
    document.getElementById('mediaGeral').innerText = `Média geral: ${mediaGeral}`;

}