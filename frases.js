
var frases = [
  {
    categoria: "MacGuffin",
    titulo: "Vivendo Perigosamente",
    texto: "Adicione o GLITCH DIE ao teste /combate."
  },
  {
    categoria: "Interrupção",
    titulo: "Meu corpo, minhas regras",
    texto: "Após a iniciativa ser definida. Você ativa esta carta e decide em que momento seu personagem irá agir, independente da iniciativa."
  },
  {
    categoria: "Interrupção",
    titulo: "Corra!",
    texto: "Em uma ação de movimento. Seu personagem tem uma ação de movimento extra, ou seja ele se move duas vezes, tanto para perto quanto para longe."
  },
  {
    categoria: "Plot Twist",
    titulo: "Presente Surpresa",
    texto: "Escolha um dado (menos o glitch die) da rolagem de um personagem e diga um numero que substituirá o numero sorteado naquele momento."
  },
{
    categoria: "Plot Twist",
    titulo: "Árvore de Natal",
    texto: "Escolha um dado (menos o glitch die) da rolagem de um personagem e diga um numero que substituirá o numero sorteado naquele momento. Além disso você pode descartar mais cartas de sua mão e para cada carta acrescentar este efeito em mais um dado!"
  },
{
    categoria: "Plot Twist",
    titulo: "Ho Ho Ho!",
    texto: "Na rolagem de um personagem, escolha um numero de dados igual ao numero de cartas que tem nas mãos (menos o glitch die). Agora diga os números que substituirão os numero sorteados de cada dado naquele momento."
  },
  {
    categoria: "MacGuffin",
    titulo: "Primeiros Socorros",
    texto: "Recupere uma caixa de dano (escolha se do tipo S ou P). Esta carta pode ser usada mesmo se o personagem estiver num estado de Staggered, KIA, ou KO. E nestes casos ele recupera automaticamente sua consciência."
  },
  {
    categoria: "Plot Twist",
    titulo: "Isso nunca me aconteceu antes...",
    texto: "Um equipamento elétrico, eletrônico ou cibernético (pode ser um AMP) sendo ativado na cena. O equipamento não funciona naquele round."
  },
  {
    categoria: "Plot Twist",
    titulo: "Click! Click! Click!",
    texto: "Uma arma de fogo (pode ser um AMP) sendo usada na cena. Ops, as balas acabaram! A arma não funciona neste round, ela está sendo recarregada."
  },
  {
    categoria: "Plot Twist",
    titulo: "Malditos Gremlins!",
    texto: "Um equipamento mecânico (pode ser um AMP) sendo usado na cena. O equipamento falha e para de funcionar naquele round. Essa carta usada em veículos pode causar sérios acidentes!"
  },
  {
    categoria: "Interrupção",
    titulo: "Deixa comigo",
    texto: "Um personagem dentro da mesma cena e distância vai receber um dano. Você pula na frente e recebe o dano por ele."
  },
  {
    categoria: "Interrupção",
    titulo: "Quem com chumbo fere...",
    texto: "Seu personagem acaba de perder qualquer quantidade de caixas de dano. Você reage com um ataque extra e gratuito neste instante, com forças vindo do âmago do seu ser. Nada como uma boa retribuição num sábado à noite!"
  },
  {
    categoria: "Rebuliço",
    titulo: "Na volta a gente compra",
    texto: "Alguém ia comprar uma carta.. não vai mais. Você cancela uma compra de carta."
  },
  {
    categoria: "Interrupção",
    titulo: "Sério?! Eu estou te vendo!",
    texto: "O personagem está protegido por algum tipo de cover. Você pode realizar o ataque ignorando o cover dele."
  },
  {
    categoria: "Rebuliço",
    titulo: "Paguem a moça!",
    texto: "Os outros participantes da mesa (Jogadores e GM) perdem uma carta aleatória que vai para a sua mão. Se com isso você ultrapassou seu limite de mão, você pode escolher com quais irá ficar e quais descartará."
  },
{
    categoria: "Rebuliço",
    titulo: "Alguém aqui não sabe brincar",
    texto: "Os outros participantes da mesa (Jogadores e GM) perdem uma carta aleatória que vai para a sua mão substituindo aleatoriamente as cartas que você tem. Se o numero final for maior que o seu limite você descarta aleatoriamente até voltar ao limite."
  },
  {
    categoria: "Plot Twist",
    titulo: "O GPS mandou virar",
    texto: "Dois personagens em distâncias diferentes entre eles. Você troca a posição deles."
  },
  {
    categoria: "Plot Twist",
    titulo: "Isso não estava nos planos",
    texto: "Dois personagens em distâncias diferentes entre eles. Você troca a posição deles e cada um perde uma caixa de dano (escolha entre S ou P, lembrando que os dois recebem o mesmo tipo). "
  },
  {
    categoria: "MacGuffin",
    titulo: "Peça sempre uma segunda opinião",
    texto: "Inverta um dos Monitores de condição de um personagem."
  },
  {
    categoria: "MacGuffin",
    titulo: "Está chovendo balas! Alelúia!",
    texto: "O Santo das Balas Infinitas sorriu para você, e você dispara tantas balas contra seu alvo que este vai diretamente para o estado de Staggered."
  },
  {
    categoria: "MacGuffin",
    titulo: "Pau para toda obra",
    texto: "O Santo das Pauladas Indiscriminadas sorriu para você, e você atinge seu alvo com tantos golpes que ele vai diretamente para o estado de Staggered."
  },
  {
    categoria: "MacGuffin",
    titulo: "Do Astral, com amor",
    texto: "O Santo do Tsunami de Mana sorriu para você, e você atinge seu alvo com uma sobrecarga de mana tão poderosa que ele vai diretamente para o estado de Staggered. "
  },
{
    categoria: "MacGuffin",
    titulo: "Na mosca!",
    texto: "O Santo do Tiro Perfeito sorriu para você, e você dispara com tamanho precisão contra seu alvo que o manda diretamente para o estado de Staggered."
  },
  {
    categoria: "Plot Twist",
    titulo: "O destino de um é compartilhado por todos",
    texto: "Um personagem perde qualquer quantidade de caixas de dano. Todos seus aliados na cena perdem uma caixa também, e do mesmo tipo."
  },
  {
    categoria: "Plot Twist",
    titulo: "Nós treinamos para isso",
    texto: "Uma carta de plot twist foi ativada contra você. Você cancela o efeito dela."
  },
  {
    categoria: "Plot Twist",
    titulo: "Nós treinamos para isso, lembra?",
    texto: "Uma carta de plot twist foi ativada contra você. Você cancela o efeito dela e aquele que jogou a carta é obrigado a descartar uma carta extra aleatoriamente."
  },
  {
    categoria: "Plot Twist",
    titulo: "Preciso de uma mão aqui",
    texto: "Um aliado do personagem que não esteja na cena. Ele aparece na cena para ajudar. Conveniente, não?"
  },
  {
    categoria: "Plot Twist",
    titulo: "Jogo sujo",
    texto: "Um personagem acabou de perder uma quantidade de caixas de dano. Você muda o tipo de dano de S para P ou de P para S."
  },
  {
    categoria: "MacGuffin",
    titulo: "Ei, você! Aqui, vem!",
    texto: "Escolha um inimigo, este só pode atacar você e ninguém mais até você ser derrotado. Ele perde um dado ao atacar você e você ganha um dado ao atacar ele até o fim do combate."
  },
  {
    categoria: "Interrupção",
    titulo: "Jogada de mestre",
    texto: "Você acaba de realizar seu turno encerrando-o. E vejam só que jogada de mestre: você pode realizar uma nova ação imediatamente, inclusive com a ativação de uma outra carta. "
  },
{
    categoria: "Interrupção",
    titulo: "Jogada de... pera eu já vi isso!",
    texto: "Um personagem acaba de realizar seu turno de ação. Você pula a vez do próximo personagem na ordem da iniciativa, não deixando-o jogar neste round. "
  },
  {
    categoria: "Plot Twist",
    titulo: "Uma regra insuportável",
    texto: "Uma carta do tipo plot twist foi ativada contra você. Você reverte o efeito para quem a baixou. O efeito refletido vai direto ao finalmente com o alvo, se a carta culminaria em dano a você, ela confere dano a quem lançou, e assim por diante."
  },
  {
    categoria: "Plot Twist",
    titulo: "Mas isso é uma boa coisa não?",
    texto: "Após a determinação da iniciativa de todos os personagens da cena. Você decide se os personagens aliados, ou inimigos, receberão um glitch die em suas rolagens neste turno."
  },
  {
    categoria: "Plot Twist",
    titulo: "Até que enfim uma boa notícia",
    texto: "O personagem acaba de perder qualquer quantidade de caixas de dano. Em vez disso ele cura uma caixa de dano."
  },
  {
    categoria: "Rebuliço",
    titulo: "Vasculhando as oportunidades",
    texto: "Os participantes da mesa (Jogadores e GM) vão escolher uma carta de suas mãos, e descartá-la. Só que em vez desta carta ir embora ela vai para a mão do participante à esquerda."
  },
  {
    categoria: "MacGuffin",
    titulo: "Rei morto, rei posto",
    texto: "Todos os personagens humanos na cena recebem um glith die."
  },
  {
    categoria: "MacGuffin",
    titulo: "Os primeiros a acordar",
    texto: "Todos os personagens Elfos e Anões na cena recebem um glitch die."
  },
  {
    categoria: "MacGuffin",
    titulo: "Nação Goblin",
    texto: "Todos os personagens Troll e Orcs na cena recebem um glitch die."
  },
  {
    categoria: "Rebuliço",
    titulo: "Batata Quente",
    texto: "Aquele que baixar esta carta escolhe outro participante da mesa que será obrigado a descartar uma carta aleatória. Este escolhe um outro participante para fazer a mesma coisa, desde que não seja nem quem baixou ou quem lhe escolheu. E assim vai até não terem mais opções viáveis na mesa."
  },
  {
    categoria: "MacGuffin",
    titulo: "A hora da meta humanidade",
    texto: "Todos os personagens não humanos na cena recebem um dado bônus em sua próxima ação."
  },
  {
    categoria: "MacGuffin",
    titulo: "A hora da humanidade",
    texto: "Todos os personagens humanos na cena recebem um dado bônus em sua próxima ação."
  },
  {
    categoria: "Rebuliço",
    titulo: "Não se reprima",
    texto: "Você pode descartar quantas cartas quiser de sua mão e para cada carta descartada comprar uma aleatória, renovando sua mão."
  },
  {
    categoria: "Plot Twist",
    titulo: "Necro-economia",
    texto: "Um personagem morreu. Você ganha um ponto de Karma extra no final da sessão."
  },
  {
    categoria: "Plot Twist",
    titulo: "Hora da vingança, palhaço!",
    texto: "Um personagem morreu. Aliados aparecem na cena para vingar o companheiro morto."
  },
  {
    categoria: "Interrupção",
    titulo: "Escolha...",
    texto: "Pare o jogo! Agora escolha: recupere uma caixa de dano do seu personagem; ou compre uma carta; ou tire seu personagem desta cena maldita. Escolha feita, segue o jogo."
  },
  {
    categoria: "Rebuliço",
    titulo: "Sobreviver é supervalorizado hoje em dia",
    texto: "Escolha um participante da mesa que irá descartar todas as cartas que ele tiver nas mãos. Se ele for um Jogador o personagem dele receberá +1 ponto de Karma no final da sessão; se for o GM ele trará de volta um inimigo derrotado que ele quiser."
  },
  {
    categoria: "Rebuliço",
    titulo: "A hora dos heróis",
    texto: "Se um Jogador ativar esta carta ele e os outros jogadores podem escolher e trocar uma carta um com o outro. Se o GM ativar esta carta ele pega três cartas aleatórias e pode escolher qual ficará e qual ele irá descartar."
  },
  {
    categoria: "Rebuliço",
    titulo: "Puro caos",
    texto: "Todos os participantes devem descartar todas as cartas de suas mãos e substituirem por cartas novas."
  },
  {
    categoria: "Interrupção",
    titulo: "Queridinho da Mamãe",
    texto: "Uma carta ativado afetou um personagem que você não queria que fosse alvo. Você baixa esta carta e diz que o alvo está protegido, assim quem baixou a carta que iria atingir o personagem que você salvou precisa achar outro alvo ou descartar a carta."
  },
  {
    categoria: "MacGuffin",
    titulo: "Defesa coordenada",
    texto: "A defesa do seu personagem até o próximo ele agir novamente será aumentada em +3 pontos."
  },
  {
    categoria: "Interrupção",
    titulo: "Pega ladrão!",
    texto: "Um participante compra uma carta. Você pára a compra e rouba a carta dele colocando-a na sua mão."
  },
  {
    categoria: "Interrupção",
    titulo: "Remédios vencidos",
    texto: "Um personagem, por qualquer efeito, situação ou carta recupera caixas de dano. Você impede a ação e ainda confere uma caixa de dano a ele."
  },
  {
    categoria: "Interrupção",
    titulo: "Problemas de comunicação",
    texto: "Um participante compra uma carta. Você impede a compra e faz o participante descartar uma carta a escolha dele."
  },
  {
    categoria: "Interrupção",
    titulo: "Cérebros tem um gosto horrível",
    texto: "Um personagem perdeu qualquer quantidade de caixas de dano do tipo P. Você baixa esta carta e além de perder as caixas o personagem alvo perde um dado extra até a sua próxima ação."
  },
  {
    categoria: "Interrupção",
    titulo: "Hey isso é sangue?",
    texto: "Um personagem perdeu qualquer quantidade de caixas de dano do tipo S. Você baixa esta carta e além de perder as caixas o personagem alvo perde um dado extra até a sua próxima ação."
  },
  {
    categoria: "MacGuffin",
    titulo: "Altamente Contagioso",
    texto: "Escolha um personagem, ele recebe um glitch die, e o efeito do glitch die vai afetar todos seus aliados naquele turno."
  },
  {
    categoria: "MacGuffin",
    titulo: "Orgulho da profissão",
    texto: "Escolha um personagem para receber um ponto de Karma extra no final da sessão, ou quem o controla comprar uma carta."
  },
];