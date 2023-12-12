var frases = [
    {
      categoria: "MacGuffin",
      titulo: "Vivendo Perigosamente",
      texto: "Adicione o GLITCH DIE ao teste /combate."
    },
    {
      categoria: "Interrupção",
      titulo: "Carteirada",
      texto: "Decida seu momento de agir na INICIATIVA."
    },
    {
      categoria: "MacGuffin",
      titulo: "Just in Time",
      texto: "Execute DUAS ações de movimento para perto de seu alvo, ou para longe dele."
    },
    {
      categoria: "Edição de Cena",
      titulo: "Presente Surpresa",
      texto: "Adicione à cena um grupo de guardas /seguranças iual ao numero de participantes da mesa."
    },
    {
      categoria: "MacGuffin",
      titulo: "Recuperando o Fôlego",
      texto: "Recupere um ponto de dano. Escolha se do tipo S ou P."
    },
    {
      categoria: "Edição de Cena",
      titulo: "Tela Azul",
      texto: "Um equipamento eletrônico presente na cena apresenta um erro fatal e reinicia, perdendo assim o próximo turno de ação. No próximo turno o equipamento eletrônico escolhido não funciona."
    },
    {
      categoria: "Edição de Cena",
      titulo: "Click!Click!Click!",
      texto: "Uma arma de fogo presente na cena esgotou sua munição e precisa ser recarregada, perdendo assim o próximo turno de ação. No próximo turno a arma de fogo escolhida não dispara."
    },
    {
      categoria: "Edição de Cena",
      titulo: "Isso Nunca me Aconteceu Antes...",
      texto: "Um equipamento cibernético (AMP) presente na cena apresenta uma disfunção e reinicia, perdendo assim o próximo turno de ação. No próximo turno o equipamento cibernético (AMP) escolhido não funciona."
    },
    {
      categoria: "Interrupção",
      titulo: "Deixa Comigo",
      texto: "Troque de lugar com um personagem que está sendo alvo de um ataques neste turno. Você usa sua defesa e se for atingido recebe o dano."
    },
    {
      categoria: "MacGuffin",
      titulo: "Oferecendo a Outra Face",
      texto: "Depois de receber um dano você pode usar esta carta. Você automaticamente faz um ataque extra contra seu oponente. O ataque procede normalmente, mas não conta como uma ação, é apenas uma retribuição! Normal numa sexta-feira à noite!"
    },
    {
      categoria: "Rebuliço",
      titulo: "Paguem a Moça!",
      texto: "Você baixa esta carta e todos os presentes na mesa devem baixar uma carta também, a escolha de cada um, e sem efeito. As vezes um pouco de caos é só um prouco de caos mesmo."
    },
    {
      categoria: "Interrupção",
      titulo: "Na Mosca!",
      texto: "Ao atacar um oponente a PROTEÇÃO dele (Armor) não funcionará, fazendo com que seu dano vá direto para o Monitor dele. Em outras palavras neste ataque você impede a proteção de seu oponente."
    },
    {
      categoria: "Rebuliço",
      titulo: "Escravos de Jó",
      texto: "Todos os particpantes da mesa, que tiverem cartas nas mãos, vão passar uma carta aleatória para o particpante sentado à direita deles. Quem não tem carta fica de fora."
    },
    {
      categoria: "Edição de Cena",
      titulo: "Jogada Ensaiada",
      texto: "Escolha dois personagens que estejam na mesma cena, um deles pode ser o seu ou aliados do seu personagem. E os faça trocarem de oponentes. Mesmo que um tenha acado de derrotar um oponente, a troca ainda é válida."
    },
    {
      categoria: "Edição de Cena",
      titulo: "Isso Fazia Parte do Plano?!",
      texto: "Escolha um meta-tipo que tem mais de um representante na cena em questão. Um golpe de sorte os atinge e no próximo teste /combate que fizerem recebem um bônus de situação de +1d."
    },
    {
      categoria: "Edição de Cena",
      titulo: "Algo está errado e não está certo!",
      texto: "Escolha um meta-tipo que tem mais de um representante na cena em questão. Um golpe de azar os atinge e no próximo teste /combate que fizerem perdem um dado, -1d."
    },
    {
      categoria: "Edição de Cena",
      titulo: "Isso vai doer mais em você do que em nós",
      texto: "Baixe esta carta e escolha entre seu personagem e seus aliados presentes na cena quem tomará um ponto de dano S ou P a sua escolha. Depois, escolha um oponente presente na cena. Ele vai tomar a soma dos pontos que você distribuiu com mais dois pontos extra. O tipo de dano segue o escolhido para seus aliados, todos tomam o mesmo teipo de dano. Narre uma situação explosiva de área que atingiu a todos que tomaram dano na cena."
    },
    {
      categoria: "MacGuffin",
      titulo: "Nivelando o Jogo",
      texto: "Se o seu oponente está com um dos Monitores MAIOR do que o seu (você escolhe qual medir, se o S ou P), ele toma um ponto de dano naquele monitor específico."
    },
    {
      categoria: "Interrupção",
      titulo: "É isso que você chama de golpe de sorte?",
      texto: "Depois que tomar um dano, seja S ou P, escolha um dos seus aliados presente na cena. Em vez de você tomar o dano, ele toma o dano. Em compensação, no próximo turno em que ele agir, ele ganha um bônus em dados igual ao dano recebido."
    },
    {
      categoria: "Interrupção",
      titulo: "Jogo Sujo",
      texto: "Escolha um personagem presente na cena, ele PERDE -1d no teste /combate."
    },
    {
      categoria: "Rebuliço",
      titulo: "Trocando Farpas",
      texto: "Escolha dois participantes da mesa que tenham a mesma quantidade de cartas na mão. Pode ser você. Agora eles devem trocar todas suas cartas um com o outro."
    },
    {
      categoria: "Rebuliço",
      titulo: "Mudando o Ritmo",
      texto: "Escolha um participante da mesa. Pode ser você mesmo. Descarte todas as cartas que tem em mãos e pegue a mesma quantidade em cartas novas."
    },
    {
      categoria: "Rebuliço",
      titulo: "Por quê isso Agora?",
      texto: "Ao receber esta carta descarte-a automaticamente. O participante a sua direita e a sua esquerda também devem descartar uma carta aleatória de suas mãos. Se não tiverem carta, então é o participante seguinte que descarta. Agora você, e os que descartaram pegam uma carta nova."
    },
    {
      categoria: "Rebuliço",
      titulo: "F.U.B.A.R.",
      texto: "Todos os participantes na mesa que tiverem mais do que três cartas nas mãos, são obrigados a descartar cartas até ficarem com três cartas apenas nas mãos. O participante que for o G.M. pode ficar com quatro cartas na mãos. Hey, não me olhe assim, eu só faço as regras!"
    },
    {
      categoria: "Edição de Cena",
      titulo: "Os Primeiros a Despertar",
      texto: "Todos os Elfos e Anões presentes na cena, aliados ou oponentes, recebem um bônus de +1d em seus testes /combate em seu próximo turno. Narre uma situação que favoreça este grupo."
    },
    {
      categoria: "Edição de Cena",
      titulo: "Nação Goblin",
      texto: "Todos os Trolls e Orcs presentes na cena, aliados ou oponentes, recebem um bônus de +1d em seus testes /combate em seu próximo turno. Narre uma situação que favoreça este grupo."
    },
    {
      categoria: "Edição de Cena",
      titulo: "Chummers",
      texto: "Todos os Humanos presentes na cena, aliados ou oponentes, recebem um bônus de +1d em seus testes /combate em seu próximo turno. Narre uma situação que favoreça este grupo."
    },
    {
      categoria: "Edição de Cena",
      titulo: "Fortuna e o Reverso",
      texto: "Qualquer personagem na cena que esteja staggered recupera um ponto de dano seja S ou P. Se algum personagem não tomou dano algum, ele recebe um ponto de dano. Ele escolhe se S ou P. Narre esta situação."
    },
    {
      categoria: "Interrupção",
      titulo: "Não se Reprima",
      texto: "Um personagem presente na cena recebe um numero de pontos de dano diretamente em seu Monitor igual a 5 menos quantas cartas sobraram em suas mãos. E ganha um numero de pontos de proteção (Armor) extras no mesmo montante."
    },
    {
      categoria: "Rebuliço",
      titulo: "Coisas Esquisitas Acontecem",
      texto: "Todos os participantes da mesa que estiverem controlando personagens humanos na cena descartam uma carta de sua mão. Se não tiverem cartas na mão, seu personagem toma um ponto de dano S ou P a escolha de quem baixou esta carta. Todos os personagens não humanos na cena ganham uma carta."
    },
    {
      categoria: "Interrupção",
      titulo: "Péssimo Negócio",
      texto: "Se você rolou seus dados e obteve uma falha ou um Glitch Crítico, você ainda pode gastar um ponto de Karma e aliviar a sua barra. Tornando o Glitch Crítico numa falha e uma falha numa nova chance re-rolando todos os dados do teste /combate."
    },
    {
      categoria: "Rebuliço",
      titulo: "Sacrifício é o nome do Jogo",
      texto: "Baixe esta carta. Ela vai ficar com você até o fim da sessão, e com isso diminuir sua mão máxima em uma carta. Em compensação você pode agora escolher para as próximas cartas que pegar usar o efeito descrito nelas ou baixar para reduzir o dano do tipo S recebido em um ponto."
    },
    {
      categoria: "Rebuliço",
      titulo: "Sacrifício é o nome do Jogo",
      texto: "Baixe esta carta. Ela vai ficar com você até o fim da sessão, e com isso diminuir sua mão máxima em uma carta. Em compensação você pode agora escolher para as próximas cartas que pegar usar o efeito descrito nelas ou baixar para reduzir o dano do tipo P recebido em um ponto."
    },
  ];
  
  