
var frases = [
  {
    categoria: "MacGuffin",
    titulo: "Vivendo Perigosamente",
    texto: "Adicione um glitch die ao teste /ataque de um personagem."
  },
  {
    categoria: "MacGuffin",
    titulo: "Está chovendo balas! Alelúia!",
    texto: "O Santo das Balas Infinitas sorriu para você, e um personagem dispara tantas balas contra seu alvo que este vai diretamente para o estado de Staggered."
  },
  {
    categoria: "MacGuffin",
    titulo: "Pau para toda obra",
    texto: "O Santo das Pauladas Indiscriminadas sorriu para você, e um personagem atinge seu alvo com tantos golpes que ele vai diretamente para o estado de Staggered."
  },
  {
    categoria: "MacGuffin",
    titulo: "Do Astral, com amor",
    texto: "O Santo do Tsunami de Mana sorriu para você, e um personagem atinge seu alvo com uma sobrecarga de mana tão poderosa que ele vai diretamente para o estado de Staggered. "
  },
  {
    categoria: "MacGuffin",
    titulo: "Na mosca!",
    texto: "O Santo do Tiro Perfeito sorriu para você, e um personagem dispara com tamanha precisão contra que o manda seu alvo diretamente para o estado de Staggered."
  },
  {
    categoria: "MacGuffin",
    titulo: "Peça sempre uma segunda opinião",
    texto: "Inverta um dos Monitores de condição de um personagem."
  },
  {
    categoria: "MacGuffin",
    titulo: "Sua hora chegou, defenda-se!",
    texto: "Escolha um personagem que seja oponente ao personagem que você controla. Agora ele só pode atacar você e vice versa até um sair vitorioso. Ele ao atacar você perde um dado, você ao atacar ele ganha um dado."
  },
  {
    categoria: "MacGuffin",
    titulo: "Rei morto, rei posto",
    texto: "Todos os personagens humanos na cena recebem um dado extra (que pode ser trocado por um glitch die) neste seu teste /ataque."
  },
  {
    categoria: "MacGuffin",
    titulo: "Os primeiros a acordar",
    texto: "Todos os personagens Elfos e Anões na cena recebem um dado extra (que pode ser trocado por um glitch die) neste seu teste /ataque."
  },
  {
    categoria: "MacGuffin",
    titulo: "Nação Goblin",
    texto: "Todos os personagens Trolls e Orcs na cena recebem um dado extra (que pode ser trocado por um glitch die)neste seu teste /ataque."
  },
  {
    categoria: "MacGuffin",
    titulo: "A hora da meta humanidade",
    texto: "Todos os personagens não humanos na cena recebem dois dados bônus em sua próxima ação (um pode ser substituído por um glitch die) neste seu teste /ataque."
  },
  {
    categoria: "MacGuffin",
    titulo: "A hora da humanidade",
    texto: "Todos os personagens humanos na cena recebem dois dados bônus em sua próxima ação (um pode ser substituído por um glitch die) neste seu teste /ataque."
  },
  {
    categoria: "MacGuffin",
    titulo: "Quem tem a força, afinal?",
    texto: "Escolha um personagem, ele recebe três dados extra (um deles ele pode ser substituído por um glitch die) neste seu teste /ataque."
  },
  {
    categoria: "MacGuffin",
    titulo: "Defesa Surpresa!",
    texto: "Aumente a defesa do seu personagem em +3 para deter um só ataque."
  },
  {
    categoria: "MacGuffin",
    titulo: "Defesa coordenada",
    texto: "Aumente a defesa do um personagem em +1 durante todo o turno, ou passe para um outro personagem +2 na defesa contra um só ataque."
  },
  {
    categoria: "MacGuffin",
    titulo: "Primeiros Socorros",
    texto: "Recupere uma linha de caixas de dano (escolha o tipo) de um personagem. Se o personagem estiver num estado de Staggered ou pior, ele recupera apenas duas caixas de dano."
  },
  {
    categoria: "MacGuffin",
    titulo: "Por um tris!",
    texto: "Recupere uma linha de caixas de dano (escolha o tipo) de um personagem. Se o personagem estiver num estado de Staggered ou pior, ele se recupera além da linha."
  },
  {
    categoria: "MacGuffin",
    titulo: "Orgulho da profissão",
    texto: "Um personagem recebe um ponto de Karma extra no final da sessão, ou quem o controla compra uma carta."
  },
  {
    categoria: "Interrupção",
    titulo: "Jogada de... pera eu já vi isso!",
    texto: "Um personagem acaba de falhar num ataque. Ele imediatamente muda esta situação obtendo um sucesso com teia de sucessos 0. Se a falha veio de um glitch die então ele compra uma carta apenas."
  },
  {
    categoria: "Interrupção",
    titulo: "Pega ladrão!",
    texto: "Um participante compra uma carta. Você pára a compra e ainda rouba a carta dele colocando-a na sua mão."
  },
  {
    categoria: "Interrupção",
    titulo: "Remédios vencidos",
    texto: "Um personagem é curado por um efeito de carta. Você impede a cura e ainda inflige uma caixa de dano a ele."
  },
  {
    categoria: "Interrupção",
    titulo: "Problemas de comunicação",
    texto: "Um participante compra uma carta. Você impede a compra e ainda o obriga a descartar uma carta a escolha dele."
  },
  {
    categoria: "Interrupção",
    titulo: "Queridinho da Mamãe",
    texto: "Uma carta ativada afetou um personagem que você não queria que fosse alvo. Você baixa esta carta e voilà, o personagem está protegido. A carta ativada contra ele é simplesmente descartada."
  },
  {
    categoria: "Interrupção",
    titulo: "Contra-contra-golpe",
    texto: "Alguém ativou uma carta contra sua ação de comprar cartas, ahá ele não contava que você está blindado e este tipo de ação! A carta dele falha, e você pode comprar."
  },
  {
    categoria: "Interrupção",
    titulo: "Deixa comigo",
    texto: "Um personagem dentro da mesma cena e linha de distância que o seu vai receber um dano. Seu personagem pula na frente e recebe o dano por ele."
  },
  {
    categoria: "Interrupção",
    titulo: "Quem com chumbo fere...",
    texto: "Um personagem acaba de perder ao menos uma caixa de dano. Ele reage com um ataque extra e gratuito neste instante, com forças vindo do âmago do seu ser. Nada como uma boa retribuição num sábado à noite!"
  },
  {
    categoria: "Interrupção",
    titulo: "Hey isso é sangue?",
    texto: "Um personagem acaba de perder ao menos uma caixa de dano. Você pode decidir mudar o tipo de dano que o personagem recebeu, para P ou S."
  },
  {
    categoria: "Interrupção",
    titulo: "Jogada de mestre",
    texto: "Um personagem acaba de falhar num teste. Ele imediatamente muda esta situação obtendo um sucesso com rede de acertos 0. Se a falha veio de um glitch die então ele compra uma carta apenas."
  },
  {
    categoria: "Interrupção",
    titulo: "Meu corpo, minhas regras",
    texto: "O começo do turno de ação de qualquer personagem. Você interrompe a ação do personagem em questão e faz a sua ação neste momento, depois de agir ele poderá enfim agir e a iniciativa segue seu curso."
  },
  {
    categoria: "Interrupção",
    titulo: "Corra!",
    texto: "Ao realizar uma ação de movimento; você ativa esta carta e seu personagem tem uma ação de movimento extra, ou seja ele se move duas vezes (você escolhe se para perto ou longe)."
  },
  {
    categoria: "Interrupção",
    titulo: "Sério?! Eu estou te vendo!",
    texto: "Um personagem está protegido por algum tipo de cover. Seu personagem pode realizar um ataque ignorando o cover dele."
  },
  {
    categoria: "Plot Twist",
    titulo: "Presente Surpresa",
    texto: "um dado comum, não glitch die, sorteou qualquer valor abaixo de 5... ele conta como um acerto."
  },
  {
    categoria: "Plot Twist",
    titulo: "Árvore de Natal",
    texto: "Se você não obteve nenhum acerto no seu teste /ataque... você obteve um sucesso com rede de acertos 0."
  },
  {
    categoria: "Plot Twist",
    titulo: "Ho Ho Ho!",
    texto: "Seu glitch die rolou um 1... você obteve sorte e sua ação pende ao espetacular (se você obteve acertos suficientes) e para uma falha amena (se não obteve os acertos necessários)."
  },
  {
    categoria: "Plot Twist",
    titulo: "Nós o treinamos para isso",
    texto: "A quantidade de acertos de seu teste /ataque foi igual ou maior que o mínimo requerido... você contará a rede de acertos como se a dificuldade fosse apenas 1."
  },
  {
    categoria: "Plot Twist",
    titulo: "Nós o treinamos para isso, lembra?",
    texto: "A quantidade de acertos de seu teste /ataque foi igual ou maior que o mínimo requerido... você dobra a rede de acertos que obteve."
  },
  {
    categoria: "Plot Twist",
    titulo: "O destino de um é compartilhado por todos",
    texto: "Um ataque simples é feito contra apenas um alvo... mas você acerta todos os inimigos adjacentes, mesmo com um ataque corpo-a-corpo. A física não é o forte nesse jogo, não é mesmo?"
  },
  {
    categoria: "Plot Twist",
    titulo: "Isso nunca me aconteceu antes...",
    texto: "Alguém aciona um equipamento elétrico, eletrônico, ou cibernético (que pode ser até um AMP)... e ele não funciona neste turno. Desculpe, falha técnica!"
  },
  {
    categoria: "Plot Twist",
    titulo: "Click! Click! Click!",
    texto: "Alguém dispara (ou aciona) uma arma de fogo (que pode ser até um AMP)... e ela não funciona neste turno. Munição travada, espere alguns segundos!"
  },
  {
    categoria: "Plot Twist",
    titulo: "Malditos Gremlins!",
    texto: "Alguém aciona um equipamento mecânico ou veículo (que pode ser até um AMP)... e ele não funciona neste turno. Ãh!? Maldita ignição!!"
  },
  {
    categoria: "Plot Twist",
    titulo: "O GPS mandou virar",
    texto: "Alguém executa uma ação de movimento... e você muda o sentido da movimentação. Se era para perto, você torna para longe, ou vice-versa."
  },
  {
    categoria: "Plot Twist",
    titulo: "Isso não estava nos planos",
    texto: "Alguém num teste /ataque obteve um numero de acertos igual ou maior que o mínimo requerido... a ação falhou."
  },
  {
    categoria: "Plot Twist",
    titulo: "Uma regra insuportável",
    texto: "Uma carta do tipo plot twist foi ativada contra você... ela não tem qualquer efeito."
  },
  {
    categoria: "Plot Twist",
    titulo: "Até que enfim uma boa notícia",
    texto: "Sua perícia usada no teste /ataque tem um foco.. ele adiciona dois acerto à contagem."
  },
  {
    categoria: "Plot Twist",
    titulo: "Mas isso é uma boa coisa não?",
    texto: "Você recebe um glitch die... e pega dois para rolar! Eles não vão se somar, e você rola os dois e fica com o resultado que preferir."
  },
  {
    categoria: "Plot Twist",
    titulo: "Preciso de uma mão aqui",
    texto: "Alguém que não está presente na cena... aparece para ajudar."
  },
  {
    categoria: "Plot Twist",
    titulo: "Jogo sujo",
    texto: "Ao receber um dano... você recupera um numero de caixas de dano igual ao valor de dano e do mesmo tipo dele, melhorando assim um de seus Monitores de Condição."
  },
  {
    categoria: "Plot Twist",
    titulo: "Necro-economia",
    texto: "Alguém morreu... e você ganha um ponto bônus de Karma no fim da sessão, ou pode realizar uma compra."
  },
  {
    categoria: "Plot Twist",
    titulo: "Hora da vingança, palhaço!",
    texto: "Alguém morreu... e seus aliados aparecem na cena para vingar o companheiro morto."
  },
  {
    categoria: "Rebuliço",
    titulo: "Na volta a gente compra",
    texto: "Um participante compra uma carta mas não leva nada, pois você impediu a compra. Pelo menos sorria para o amiguinho!"
  },
  {
    categoria: "Rebuliço",
    titulo: "Paguem a moça!",
    texto: "Você não compra do monte mas sim uma carta aleatória da mão de cada um dos outros participantes. Se você passou do seu limite de mão, descarte até entrar no limite."
  },
  {
    categoria: "Rebuliço",
    titulo: "Alguém aqui não sabe brincar",
    texto: "Você não compra do monte mas sim uma carta aleatória da mão de cada um dos outros participantes. Se você passou do seu limite de mão... paciência, você fica com as cartas até descartá-las e enfim respeitar seu limite, afinal..."
  },
  {
    categoria: "Rebuliço",
    titulo: "Vasculhando as oportunidades",
    texto: "Um participante descartou uma carta, claro que você vai lá ver que carta era, e se quiser poderá comprá-la. Lixo para uns, luxo para outros!"
  },
  {
    categoria: "Rebuliço",
    titulo: "Batata Quente",
    texto: "Escolha um participante da mesa, ele é obrigado a descartar uma carta de sua mão. Mas ele vai poder escolher um outro participante (não pode ser você) para fazer a mesma coisa. E este poderá escolher outro participante (que não pode ser nem você, nem quem o indicou) para fazer o mesmo. E seguimos assim até algum participante não tiver quem escolher."
  },
  {
    categoria: "Rebuliço",
    titulo: "Não se reprima",
    texto: "Você pode descartar quantas cartas quiser de sua mão e para cada carta descartada poderá comprar uma carta."
  },
  {
    categoria: "Rebuliço",
    titulo: "Puro caos",
    texto: "Todos os participantes devem descartar todas as cartas de suas mãos e substituirem por cartas novas."
  },
  {
    categoria: "Rebuliço",
    titulo: "Báh! Foi apenas um ferimento superficial!",
    texto: "Você é obrigado a descartar uma carta, você o faz mas a carta que você descartou tem o efeito ativado na hora, agora, já, nesse instante! Durmam com essa, amiguinhos! "
  },
  {
    categoria: "Rebuliço",
    titulo: "Monalisa de Dafen",
    texto: "Um participante ativou uma carta que você queria, você ativa esta carta e usa o efeito da carta dele nesta aqui."
  },  

];