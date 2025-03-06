// Lista que armazena os amigos adicionados
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value.trim(); // Remove espaços extras
    
    if (!nomeAmigo) {
        alert("⚠️ Digite o nome do amigo!");
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert("⚠️ Esse amigo já foi adicionado!");
        return;
    }

    amigos.push(nomeAmigo); // Adiciona o amigo na lista
    inputAmigo.value = ""; // Limpa o campo de entrada
    inputAmigo.focus(); // Mantém o foco no input
    atualizarLista(); // Atualiza a exibição da lista
}

// Função para atualizar a lista na tela
function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista

    amigos.forEach((amigo, index) => {
        let item = document.createElement("li");
        item.innerHTML = `👤 ${amigo} <button onclick="removerAmigo(${index})">❌</button>`;
        listaAmigos.appendChild(item);
    });
}

// Função para remover um amigo da lista
function removerAmigo(index) {
    amigos.splice(index, 1); // Remove o amigo da lista pelo índice
    atualizarLista(); // Atualiza a exibição
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("⚠️ Nenhum amigo na lista para sortear!");
        return;
    }

    let sorteadoIndex = Math.floor(Math.random() * amigos.length); // Sorteia um índice aleatório
    let sorteado = amigos[sorteadoIndex]; // Pega o amigo correspondente

    document.getElementById("resultado").innerHTML = `<span class="success">🎉 O amigo sorteado foi: <b>${sorteado}</b>!</span>`;

    amigos.splice(sorteadoIndex, 1); // Remove o sorteado da lista
    atualizarLista(); // Atualiza a exibição da lista

    // Verifica se todos foram sorteados
    if (amigos.length === 0) {
        alert("🎊 Todos os amigos foram sorteados!");
    }
}
