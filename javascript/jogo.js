// Criando posições randômicas com base no espaço disponível da página

var largura = 0;
var altura = 0;
var vidas = 3;
var tempo = 20;

// Mudar a dificuldade do jogo
var mosquitoSpawnTimer = 1500;

var dificuldade = window.location.search;
dificuldade = dificuldade.replace('?', '');

if (dificuldade === 'normal') {
    //1500
    mosquitoSpawnTimer = 1500;
} else if(dificuldade === 'dificil') {
    //1000
    mosquitoSpawnTimer = 1000;
} else if(dificuldade === 'chucknorris') {
    //750
    mosquitoSpawnTimer = 750;
}

function ajustarTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(largura, altura);
}

ajustarTamanhoPalcoJogo();

var cronometro = setInterval(function() {
    tempo -= 1;
    if(tempo < 0) {
        clearInterval(cronometro);
        clearInterval(criarMosquito);
        window.location.href = 'vitoria.html';
    } else {
        document.getElementById('cronometro').innerHTML = tempo;
    }
}, 1000)

function criarPosicaoRandomica() {
    // Verificar se já existe o elemento HTML do mosquito, se existir, remover o elemento HTML do mosquito anterior
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();
        // Se o mosquito existir e for removido, entrará na lógica abaixo para diminuir as vidas
        if (vidas < 1) {
            window.location.href = 'fim_de_jogo.html';
        } else {
            document.getElementById('vida' + vidas).src = 'imagens/coracao_vazio.png';
            vidas--;
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 40 : posicaoX;
    posicaoY = posicaoY < 0 ? 40 : posicaoY;

    console.log(posicaoX, posicaoY);

    // Criar o elemento HTML

    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosquito.png';
    mosquito.className = (ajustarTamanhoMosquito() + ' ' + espelharMosquito()).trim();
    mosquito.id = 'mosquito';
    mosquito.draggable = false;
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.onclick = function() {
        this.remove();
    }

    document.body.appendChild(mosquito);

}

// Criar tamanhos randômicos para o mosquito

function ajustarTamanhoMosquito() {
    var mosquito_classe = Math.floor(Math.random() * 3);
    switch (mosquito_classe) {
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }

}

// Definir se o mosquito ficará ou não espelhado

function espelharMosquito() {
    var espelhamento = Math.floor(Math.random() * 2);
    if(espelhamento == 1) {
        return 'espelhar';
    } else {
        return '';
    }

}