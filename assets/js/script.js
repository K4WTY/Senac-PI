const tituloColorido = document.getElementById('titulo-colorido')
const subtitulo = document.getElementById('subtitulo')
const conteudo = document.getElementById('conteudo')
const botaoTras = document.getElementById('btn-one')
const botaoFrente = document.getElementById('btn-two')
const indice = document.getElementById('indice')
const mainContent = document.getElementById('mainContent')
const alterarImg = document.getElementById('alterarImg')
const segundaDiv = document.getElementById('segundaDiv')
const finalDiv = document.getElementById('final')

let page = 1
let backupContent = null

indice.innerHTML = page

function changeContent(title, subtitle, content) {
    tituloColorido.innerHTML = title
    subtitulo.innerHTML = subtitle
    conteudo.innerHTML = content
}

function changeMainContent(content) {
    let target = document.getElementById(content)
    if (backupContent != null && content != backupContent) {
        document.getElementById(backupContent).classList.add('d-none')
    }
    if (target.classList.contains('d-none')) {
        target.classList.remove('d-none')
    }
    backupContent = content
}

function final() {
    segundaDiv.classList.add('d-none')
    finalDiv.classList.remove('d-none')
    finalDiv.classList.add('d-flex')
}

function checkPage(numberPage) {
    if (numberPage == 1) {
        changeContent('Início do projeto', 'O que desenvolmemos?', 'O projeto foi criado para a área do aluno com o intuito de facilitar as necessidades básicas. A ideia do projeto foi desenvolvida pelos instrutores Marcelo Garcia e Bruno Wuo.')
        changeMainContent('primeiroConteudo')
    } else if (numberPage == 2) {
        changeContent('Montagem da equipe', 'Como foi desenvolvido?', 'Para realizar o desenvolvimento do projeto foi necessária a criação de uma equipe que fosse capaz de concluir cada etapa, como, por exemplo, brainstorm, criar o esqueleto do site, protótipo, entre outras etapas...<br>Sabendo disso, a sala se reuniu e criou a equipe Seed Devs.')
        changeMainContent('segundoConteudo')
    } else if (numberPage == 3) {
        changeContent('O começo', 'Brainstorm', 'Brainstorm é uma técnica que consiste em reunir duas ou mais pessoas com o objetivo de gerar novas ideias ou para debater sobre soluções.')
        changeMainContent('terceiroConteudo')
    } else if (numberPage == 4) {
        changeContent('Esqueleto do site', 'Wireframe', 'Um wireframe web é uma ilustração semelhante do layout de elementos fundamentais na interface.<br>Ao lado está o wireframe do site na versão mobile.')
        changeMainContent('quartoConteudo')
    } else if (numberPage == 5) {
        changeContent('Figma', 'Prototipação', 'Diferente do Wireframe, na prototipagem vamos criar o visual do site com as paletas de cores e definir os trajetos de cada botão.<br>As imagens ao lado ilustram a prototipagem de algumas telas.')
        changeMainContent('quintoConteudo')
    } else if (numberPage == 6) {
        changeContent('Desenvolvimento', 'Mão na massa', 'Após as estruturas estabelecidas iniciou-se a etapa de transformar a ideia em algo funcional.<br>E para isso foi utilizada algumas tecnologias, como, HTML, CSS, JS, PHP e MySQL.<br><br>HTML: Linguagem de marcação.<br>CSS: Linguagem de estilização.<br>JS: Linguagem de programação.<br>PHP: Linguagem de programação.<br>MySQL: Gerenciamento de banco de dados.')
        changeMainContent('sextoConteudo')
    } else if (numberPage == 7) {
        changeContent('Conclusão', 'Fim do projeto', 'Foram necessários 9 meses de produção para concluir o projeto, foi um desafio e tanto, mas cada etapa foi incrível e com certeza sentiremos falta desse ambiente.')
        changeMainContent('setimoConteudo')
    } else if (numberPage == 8) {
        final()
    }
}

checkPage(page)

botaoTras.addEventListener('click', function() {
    if (page > 1) {
        page--
        checkPage(page)
        indice.innerHTML = page
        return
    } if (page == 1) {
        const recarregarPagina = confirm('Deseja recarregar a página?')
        if (recarregarPagina) {
            location.reload()
        }
    }
})

botaoFrente.addEventListener('click', function() {
    if (page >= 1 && page < 8) {
        page++
        checkPage(page)
        indice.innerHTML = page
    }
})

alterarImg.addEventListener('click', function() {
    if (this.innerHTML == 'Visual') {
        document.getElementById('exemploCode').src =  './assets/imgs/Login_.png'
        this.innerHTML = 'Código'
        return
    }
    this.innerHTML = 'Visual'
    document.getElementById('exemploCode').src =  './assets/imgs/vscode.gif'
})