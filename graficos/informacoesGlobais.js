
async function visualizarinformacoesglobais() {
    const res = await fetch(uri)
    const dados = res.json()
    console.log(dados);
}
visualizarinformacoesglobais()