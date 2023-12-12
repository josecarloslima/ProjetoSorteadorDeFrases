var frases = [
    {
      categoria: "MacGuffin",
      titulo: "Vivendo Perigosamente",
      texto: "Adicione o GLITCH DIE ao teste /combate."
    },
    {
      categoria: "Interrupção",
      titulo: "Meu corpo, minhas regras",
      texto: "Ao se definir a iniciativa. Você decide em que momento seu personagem irá agir."
    },
    {
      categoria: "Interrupção",
      titulo: "Run!",
      texto: "Em uma ação de movimento. Seu personagem tem uma ação de movimento extra, contando como duas ações de movimento em seu turno, tanto para perto quanto para longe."
    },
    {
      categoria: "Plot Twist",
      titulo: "Presente Surpresa",
      texto: "Um grupo de 8 menos quantas cartas sobraram em sua mão, feito de guardas /vigias aparecem de surpresa na cena. Além disso quem jogou a carta compra uma carta."
    },
    {
      categoria: "MacGuffin",
      titulo: "Primeiros Socorros",
      texto: "Recupere um ponto de dano do tipo S ou P a sua escolha. Se estiver staggered ou KIA /KO recupera-se para ficar com um ponto de dano restante daquele tipo."
    },
    {
      categoria: "Plot Twist",
      titulo: "Isso nunca me aconteceu antes...",
      texto: "Escolha um equipamento biônico (ou AMP cibernético). Ele vai apresentar uma falha e reiniciar ficando inativo no próximo round. Ou seja o dono dele não poderá usá-lo em sua próxima ação."
    },
    {
      categoria: "Plot Twist",
      titulo: "Click! Click! Click!",
      texto: "Escolha uma arma de fogo (ou AMP). Ele esta sem balas e precisa ser recarregado ficando inativo no próximo round. Ou seja o dono dele não poderá usá-lo em sua próxima ação."
    },
    {
      categoria: "Plot Twist",
      titulo: "Tela azul",
      texto: "Escolha um equipamento eletrônico (ou AMP, ou armadilha revelada na cena). Ele vai apresentar uma falha e reiniciar ficando inativo no próximo round. Ou seja ele não funciona no próximo round."
    },
    {
      categoria: "Interrupção",
      titulo: "Deixa comigo",
      texto: "Um outro personagem vai receber um dano. Seu personagem recebe o dano por ele, se interpondo entre o amigo e a fonte de dano."
    },
    {
      categoria: "Interrupção",
      titulo: "Quem com ferro fere...",
      texto: "Seu personagem acaba de receber um dano. Seu personagem ganha um ataque extra e bônus a ser realizado agora. Nada como uma boa retribuição num sábado à noite!"
    },
    {
      categoria: "Rebuliço",
      titulo: "Na volta a gente compra",
      texto: "Escolha um participante da mesa, ele é obrigado a descartar uma carta."
    },
    {
      categoria: "Interrupção",
      titulo: "Eu estou te vendo!",
      texto: "O personagem está protegido por algum tipo de cover. Você pode realizar um ataque ignorando o cover neste ataque."
    },
    {
      categoria: "Rebuliço",
      titulo: "Pague a moça",
      texto: "Você baixa esta carta e todos os participantes da mesa te dão uma carta de suas mãos de forma aleatória. Se ao receber suas cartas você ultrapassou o limite, descarte quantas cartas precisar até ficar no limite. Quem não tem carta não participa."
    },
    {
      categoria: "MacGuffin",
      titulo: "O GPS mandou virar",
      texto: "Escolha dois personagens ativos na cena. Agora troque-os de posição com um assumindo a posição do outro. Um dos personagens pode ser o seu. Os personagens podem ser aliados ou oponentes, mas os dois devem ser do mesmo tipo (dois PCs, dois aliados ou dois oponentes)."
    },
    {
      categoria: "Plot Twist",
      titulo: "Isso não estava nos planos",
      texto: "Escolha dois personagens oponentes e ativos na cena. Agora troque-os de posição fazendo-os enfrentar um único personagem aliado. Que pode ou não ser o seu personagem. Por fim compare o pior Monitor de cada um dos lados; se o menor Monitor do aliado, ou de seu personagem, for menor do que os Monitores dos oponentes (um ou os dois), ganhe um ponto extra de Karma no fim da sessão e compre uma carta agora. Caso contrário apenas compre uma carta agora. "
    },
    {
      categoria: "MacGuffin",
      titulo: "Você no topo da prateleira!",
      texto: "Descarte quantas cartas quiser e puder de sua mão além desta. Cada carta descartada recupera um ponto de dano de seu pior Monitor."
    },
    {
      categoria: "MacGuffin",
      titulo: "Está chovendo balas!",
      texto: "Você dispara uma quantidade obscena de balas em seu oponente, adicione um ponto extra de dano (do mesmo tipo que sua arma de fogo) se causar dano em seu oponente."
    },
    {
      categoria: "MacGuffin",
      titulo: "Pau para toda obra",
      texto: "Você arremata seu oponente com tantos golpes de uma vez que é difícil acompanhar com os olhos, adicione um ponto extra de dano (do mesmo tipo da arma de mão, arremesso ou luta desarmada que está usando) se causar dano em seu oponente."
    },
    {
      categoria: "MacGuffin",
      titulo: "Do Astral, com amor",
      texto: "Você dispara seu feitiço com a potência máxima de sua existência mágica, adicione um ponto extra de dano (do mesmo tipo que seu feitiço) se causar dano em seu oponente."
    },
    {
      categoria: "Plot Twist",
      titulo: "O destino de todos é compartilhado por cada um",
      texto: "Ao baixar esta carta compare os Monitores de cada personagem aliado que esteja em cena e ativo. Você escolhe o tipo de Monitor, se S ou P. Aquele(s) que tiver(em) em melhor condição recebem um ponto de dano naquele Monitor. Aquele que receber este dano, compra uma carta."
    },
    {
      categoria: "Plot Twist",
      titulo: "Nós treinamos para isso",
      texto: "Ao baixar esta carta você pode descartar até mais três outras cartas de sua mão. Cada carta que descartar vale um ponto bônus de Karma."
    },
    {
      categoria: "Plot Twist",
      titulo: "Granada",
      texto: "Escolha dois aliados para tomar um ponto de dano cada, você escolhe o tipo. Os oponentes que eles estão enfrentando e mais dois oponentes adjacentes aos seus oponentes recebem dois pontos de dano cada indo direto para o Monitor deles. Ignorando possiveis proteções (Armor e cover). Os aliados atingidos compram uma carta cada."
    },
    {
      categoria: "Plot Twist",
      titulo: "Preciso de uma mão aqui",
      texto: "Escolha um aliado que esteja enfrentando um oponente. No próximo round se ele se recusar a atacar seu oponente (ficando apenas na defesa), vocês dois compram uma carta."
    },
    {
      categoria: "Plot Twist",
      titulo: "Jogo sujo",
      texto: "Baixe esta carta e escolha um oponente que esteja ativo na cena. Se ele der dano em algum aliado, ou em seu personagem, ele vai recuperar uma quantidade de pontos de dano no seu pior Monitor igual aos pontos de dano que conferiu. Você rceberá esta quantidade em cartas e um ponto extra de Karma."
    },
    {
      categoria: "MacGuffin",
      titulo: "Combate focado",
      texto: "Seu oponente não pode atacar outro alvo que não seja você. Ele está trancado em você ignorando qualquer outra opção de ataque. A única forma dele ignorar você em um ataque é se ele for atingido pelo efeito de outra carta."
    },
    {
      categoria: "Interrupção",
      titulo: "Jogada de mestre",
      texto: "Ao terminar seu turno, antes de passar a vez. Você age de novo. Podendo fazer novamente o que quiser, inclusive baixando uma nova carta. Mas atenção se você tiver duas destas cartas não pode as jogar em seguida, mas pode usar em rounds diferentes. Não fique bravo comigo, eu só faço as regras, ok!"
    },
    {
      categoria: "Plot Twist",
      titulo: "Um minuto insuportável",
      texto: "Ao baixar esta carta você pode baixar duas outras cartas do tipo Plot Twist que tenha e somar os dois efeitos. Além dos efeitos acumulados das duas cartas você receberá as benesses delas e mais um ponto bônus de Karma."
    },
    {
      categoria: "Plot Twist",
      titulo: "Você só pode estar brincando",
      texto: "No próximo round todos os oponentes que seu personagem e seus aliados estão enfrentando receberão um dado extra no ataque, +1d, e vão curar um ponto de dano em seu pior Monitor. Você compra uma carta."
    },
    {
      categoria: "Rebuliço",
      titulo: "Vasculhando as oportunidades",
      texto: "Cada participante da mesa pega uma carta aleatória de sua mão e passa para o particpante à direita. Quem não tem carta não participa."
    },
    {
      categoria: "Plot Twist",
      titulo: "Rei morto, rei posto",
      texto: "Todos os personagens humanos ativos na cena recebem mais um dado, +1d, em seu próximo teste /combate. Você compra uma carta."
    },
    {
      categoria: "Plot Twist",
      titulo: "Os primeiros a acordar",
      texto: "Todos os personagens Elfos e Anões ativos na cena recebem mais um dado, +1d, em seu próximo teste /combate. Você compra uma carta."
    },
    {
      categoria: "Plot Twist",
      titulo: "Nação Goblin",
      texto: "Todos os personagens Troll e Orcs ativos na cena recebem mais um dado, +1d, em seu próximo teste /combate. Você compra uma carta."
    },
    {
      categoria: "Rebuliço",
      titulo: "F.U.B.A.R.",
      texto: "Cada Jogador que tiver mais do que três cartas na mão, é obrigado a descartar (sem evocar efeito algum) até ficar com apenas três cartas na mão. O GM descarta faz a mesma coisa, mas se tiver mais do que 6 cartas na mão; ele descarta até ficar apenas com seis cartas na mão."
    },
    {
      categoria: "Interrupção",
      titulo: "Hoje não Satã",
      texto: "Ao atingir o nível Staggered, K.I.A, ou K.O. Use esta carta e recupere os pontos de dano suficiente para você recuar para um ponto antes de Staggered."
    },
    {
      categoria: "Plot Twist",
      titulo: "Chummers",
      texto: "Todos os personagens humanos ativos na cena recebem mais um dado, +1d, em seu próximo teste /combate. Você compra uma carta."
    },
    {
      categoria: "Plot Twist",
      titulo: "A hora da humanidade",
      texto: "Todos os personagens humanos ativos na cena recebem um ponto de dano a menos em seu pior Monitor a menos que descartem uma carta. Os Jogadores gastam por seus personagens, o GM faz um gasto pelo conjunto de NPCs aliados dos PCs presentes na cena, e outro pelos oponentes dos PCs."
    },
  ];
  
  