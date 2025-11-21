// ============ ONGs ============

// Carrega as ONGs
function getOngs() {
    return JSON.parse(localStorage.getItem("ongs")) || [];
}

// Salva ONGs
function saveOngs(ongs) {
    localStorage.setItem("ongs", JSON.stringify(ongs));
}

// Adiciona uma ONG
function addOng(ong) {
    const lista = getOngs();
    lista.push(ong);
    saveOngs(lista);
}

// Verifica se instituição já existe
function ongExiste(nome) {
    return getOngs().some(o => o.nome.toLowerCase() === nome.toLowerCase());
}

// Valida acesso da ONG (nome + senha)
function validarAcessoOng(nome, senha) {
    return getOngs().some(o => o.nome === nome && o.senha === senha);
}



// ============ VAGAS ============

// Carrega vagas
function getVagas() {
    return JSON.parse(localStorage.getItem("vagas")) || [];
}

// Salva vagas
function saveVagas(vagas) {
    localStorage.setItem("vagas", JSON.stringify(vagas));
}

// Adiciona vaga
function addVaga(vaga) {
    const lista = getVagas();
    lista.push(vaga);
    saveVagas(lista);
}
