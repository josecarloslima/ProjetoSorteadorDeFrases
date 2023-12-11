function embaralharFrases() {
    // Embaralhar o array de frases usando o algoritmo de Fisher-Yates
    for (let i = frases.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [frases[i], frases[j]] = [frases[j], frases[i]];
    }

    // Sortear frase
    var indiceSorteado = Math.floor(Math.random() * frases.length);
    var fraseSorteada = frases[indiceSorteado];
  
    // Atualizar os elementos na página com as informações da frase
    document.getElementById("categoria").textContent = fraseSorteada.categoria;
    document.getElementById("titulo").textContent = fraseSorteada.titulo;
    document.getElementById("fraseSorteada").textContent = fraseSorteada.texto;  
  }
  
  // Conectar a função de embaralhar ao botão correspondente
  document.getElementById("embaralharButton").addEventListener("click", embaralharFrases);