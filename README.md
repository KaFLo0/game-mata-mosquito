# 🎾🪰 Sobre o game Mata-Mosquito 🎾🪰
### ✨ Introdução
Esse projeto NÃO foi idealizado por mim, por mais que eu tenha feito sozinho,revisando como ficou o projeto apresentado nas aulas e melhorando certas partes (explicarei as melhorias posteriormente), esse projeto faz parte da grade do curso [Desenvolvimento Web Completo - 20 cursos + 20 projetos](https://www.udemy.com/course/web-completo/).
### 📰 Descrição 👾
O jogo "Mata-Mosquito" consiste, utilizando da linguagem JavaScript, em fazer aparecer entidades clicáveis(os mosquitos) na tela do navegador através do BOM. O(a) jogador(a) é redirecionado(a) a tela inicial, onde ele(ela) pode escolher uma dentre 3 dificuldades:
| Dificuldade  | Tempo que os mosquistos ficam na tela(em segundos) |
:---------------:|----------------------------------------------------|
| Normal       | 1.5s |
| Difícil      | 1.0s |
| Chuck Norris | 0.75s |

Uma vez escolhida, o script faz uma verificação para ver se realmente o(a) jogador(a) escolheu uma dificuldade, caso não tenha, é aberto um alert pedindo para o(a) jogador(a) escolher uma dificuldade das 3 existentes, impedindo com que ele(ela) seja redirecionado(a) a página do jogo.<br><br>
Na página do jogo, o(a) jogador(a) começa com 3 vidas❤️ e seu objetivo é não perder todas as vidas ao final de 20 segundos. As dificuldades não afetam o tempo total do jogo, mas a quantidade de tempo que um mosquito permanece na tela antes dele sumir e aparecer outro. Todos os posicionamentos dos mosquitos são feitos de forma aleatória e programática, de forma com que o(a) jogador(a) não consiga prever um padrão aonde os mosquitos vão aparecer. Os mosquitos também não aparecem em cantos fora da tela.<br><br>
Os mosquitos contam com 3 tamanhos, decididos também de forma aleatória, e também podem aparecer com a orientação padrão ou espelhada(normalmente eles aparecem olhando para esquerda, mas espelhados eles ficam olhando para direita). A dificuldade não interfere na frequência com que mosquitos menores apareçam na tela.<br><br>
Se o(a) jogador(a) perder todas as vidas antes da contagem de 20 segundos, ele(ela) é redirecionado(a) para a página de "game over" 🎮🔚, onde ele(ela) pode clicar em tentar novamente e ser redirecionado(a) para a página inicial e escolher a dificuldade do jogo novamente.<br>
Caso o(a) jogador(a) consiga sobreviver os 20 segundos sem perder todas as vidas, o(a) jogador(a) é redirecionado(a) automaticamente para a página de vitória, onde aparece uma mensagem de parabéns pela habilidade do(a) jogador(a)! 👑
### 🛠️ Melhorias 🛠️
🔧Foi adicionada aos elementos da página a propriedade `draggable="false"` para evitar com que os mosquistos acabem sendo clicados e arrastados. O comportamento anterior fazia com que o(a) jogador(a) perdesse vidas mesmo conseguindo clicar a tempo.
### Considerações Finais 👽
Ainda pretendo adicionar um placar de líderes/maiores pontuações.🥇<br>
Esse projeto todo foi bem divertido de fazer, consegui aplicar muitos conhecimentos que eu adquiri no curso, como por exemplo, manipular elementos do DOM e do BOM e ainda fazendo um jogo top!
