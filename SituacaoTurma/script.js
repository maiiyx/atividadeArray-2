const nome = document.getElementById('nome');
const aluno = document.getElementById('mediaAluno');
const turma = document.getElementById('mediaTurma');
const outName = document.getElementById('outName');
const outMedia = document.getElementById('outMedia');
const outTurma = document.getElementById('outTurma');

aluno.addEventListener('click', ()=>{
    let nota1 = +document.getElementById('nota1').value;
    let nota2 = +document.getElementById('nota2').value;
    let result = ((nota1 + nota2)/2)
    outMedia.textContent = `A média do aluno é ${result}`

    if(result >= 7){
        outName.textContent = `Parabéns ${nome.value}! Você foi aprovado(a)!`
    }else if(result < 7 & result >= 3){
        outName.textContent = `Atenção!!! ${nome.value}, você está de recuperação.`
    }else if(result < 3){
        outName.textContent = `Ops! ${nome.value}, você foi reprovado(a).`
    }
});

let  notas = [9, 8, 7, 6, 5, 4, 3, 2, 1];

turma.addEventListener('click', ()=>{
    let nota1 = +document.getElementById('nota1').value;
    let nota2 = +document.getElementById('nota2').value;
    let result = ((nota1 + nota2)/2)
    
    turma.push(result)

    let soma = 0;
    for(var i = 0; i < turma.length; i++){
        soma += turma[i]
    }
    outTurma.textContent = `A média da turma é ${soma/10}`
});