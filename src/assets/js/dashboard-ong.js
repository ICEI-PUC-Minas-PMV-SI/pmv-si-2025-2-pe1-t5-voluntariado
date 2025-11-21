function carregarFiltros(vagas) {
    const area = document.getElementById("filtroArea");
    const local = document.getElementById("filtroLocal");
    const tempo = document.getElementById("filtroTempo");

    const areas = [...new Set(vagas.map(v => v.area))];
    const locais = [...new Set(vagas.map(v => v.local))];
    const tempos = [...new Set(vagas.map(v => v.tempo))];

    areas.forEach(a => area.innerHTML += `<option value="${a}">${a}</option>`);
    locais.forEach(l => local.innerHTML += `<option value="${l}">${l}</option>`);
    tempos.forEach(t => tempo.innerHTML += `<option value="${t}">${t}</option>`);
}

function carregarVagasAgrupadas() {
    const vagas = JSON.parse(localStorage.getItem("vagasCadastradas")) || [];

    carregarFiltros(vagas);

    const lista = document.getElementById("listaVagasOng");
    const pesquisa = document.getElementById("pesquisa").value.toLowerCase();
    const filtroA = document.getElementById("filtroArea").value;
    const filtroL = document.getElementById("filtroLocal").value;
    const filtroT = document.getElementById("filtroTempo").value;

    lista.innerHTML = "";

    let filtradas = vagas.filter(v => 
        v.instituicao.toLowerCase().includes(pesquisa) &&
        (filtroA === "" || v.area === filtroA) &&
        (filtroL === "" || v.local === filtroL) &&
        (filtroT === "" || v.tempo === filtroT)
    );

    if (filtradas.length === 0) {
        lista.innerHTML = "<p class='nao-tem'>Nenhuma vaga encontrada.</p>";
        return;
    }

    const grupos = {};

    filtradas.forEach(vaga => {
        if (!grupos[vaga.instituicao]) grupos[vaga.instituicao] = [];
        grupos[vaga.instituicao].push(vaga);
    });

    for (const inst in grupos) {
        lista.innerHTML += `
            <h2 class="titulo-instituicao">${inst}</h2>
            <div class="grupo-vagas">
                ${grupos[inst].map((v, index) => `
                    <div class="card-vaga">
                        <button class="btn-excluir" onclick="excluirVaga('${v.id}', '${v.senha}')">Excluir</button>

                        <h3>${v.tituloVaga}</h3>
                        <p><strong>Local:</strong> ${v.local}</p>
                        <p><strong>Área:</strong> ${v.area}</p>
                        <p><strong>Tempo:</strong> ${v.tempo}</p>
                    </div>
                `).join("")}
            </div>
        `;
    }
}

function excluirVaga(id, senhaCorreta) {
    const senha = prompt("Digite a senha da instituição para excluir:");

    if (senha !== senhaCorreta) {
        alert("Senha incorreta.");
        return;
    }

    let vagas = JSON.parse(localStorage.getItem("vagasCadastradas")) || [];
    vagas = vagas.filter(v => v.id !== id);

    localStorage.setItem("vagasCadastradas", JSON.stringify(vagas));

    alert("Vaga excluída com sucesso!");
    carregarVagasAgrupadas();
}

/* Eventos de busca e filtros */
document.getElementById("pesquisa").addEventListener("input", carregarVagasAgrupadas);
document.getElementById("filtroArea").addEventListener("change", carregarVagasAgrupadas);
document.getElementById("filtroLocal").addEventListener("change", carregarVagasAgrupadas);
document.getElementById("filtroTempo").addEventListener("change", carregarVagasAgrupadas);

carregarVagasAgrupadas();
