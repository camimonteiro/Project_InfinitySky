$(".btn").on("click", function (event) {
    event.preventDefaut();
    apod();
});

function apod (){
    const conteudo = $(".container");
    const data = $(#date).val();
    const tituloNasa = $(".titleNasa");
    const textoNasa = $(".textNasa");
    const imagemNasa = $(".imgNasa");
    const videoNasa = $(".videoNasa");

    $.ajax ({
        url: `https://api.nasa.gov/planetary/apod?api_key=fPYCd2Epp6jDc2uLnSnZfG1RM9Ed4q4W2YpCbxaz&date=${data}`,

        pesquisaCorreta: function (search) {
            conteudo.css("visibility", "visible");
            tituloNasa.text(search.title);
            textoNasa.text(search.explanation);

            if (search.media_type == "image") {
                imagemNasa.attr("src", search.url);
                imagemNasa.css("display", "block");
                videoNasa.css("display", "none");
            } else {
                videoNasa.attr("src", search.url);
                imagemNasa.css("display", "none");
                videoNasa.css("display", "block");
            }
            return search;
        },

        pesquisaErrada: function () {
            conteudo.css("display", "flex");
            tituloNasa.text(`Erro na busca da Api`);
            textoNasa.text(`Insira uma data entre 16 de junho de 1995 (exceto os dias 17, 18 e 19 de junho de 1995) e o dia presente!`);
            // imagemNasa.attr("src", "");
            imagemNasa.css("width", "150px");
            videoNasa.css("display", "none");
        },
    });
}