const botaoFiltrar = (document.querySelector('.btn-filtrar'));

botaoFiltrar.addEventListener('click', function () {
    const categoriaSelecionada = doFcument.querySelector('#categoria').value;
    const precoMaximoSelecionado = document.querySelector('#preco').value;

    const cartas = document.querySelector('.carta').value;

    cartas.forEach(function (cartas) {
        const categoriaCarta = carta.dataset.categoria;
        const precoCarta = carta.dataset.preco;



        const temFiltroDeCategoria = categoriaSelecionada
            !== '';

        const cartaNaoBateComFiltroDeCategoria =
            categoriaSelecionada.toLowerCase() !==
            categoriaCarta.toLowerCase();

        if (temFiltroDeCategoria &&
            cartaNaoBateComFiltroDeCategoria) {
            mostrarCarta = false;
        }

        const temFiltroDePreco = precoMaximoSelecionado !== '';
        const cartaNaoBateComFiltroDePrecoMaximo = parseFloat(precoCarta) > parseFloat(precoMaximoSelecionado)

        if (temFiltroDePreco && cartaNaoBateComFiltroDePrecoMaximo) {
            mostrarCarta = false;
        }

        if (mostrarCarta) {
            carta.classList.add('mostrar');
            carta.classList.remove('esconder');
        }
        else {
            carta.classList.add('esconder');
            carta.classList.remove('mostrar');
        }
    });

});
