const divPai = $('.divPai')
let input = $('.input').val()
const data = document.querySelector('.input')

// Função que muda a tela de acordo com a nova data
const botao = $('.btn')
botao.on('click', function() {
    let valorData = data.value
    input = valorData
    console.log(input)
    apod()
})

// Função para buscar os elementos
function apod() {
    const xhr = $.ajax({
        method: 'GET',
        url: `https://api.nasa.gov/planetary/apod?api_key=fPYCd2Epp6jDc2uLnSnZfG1RM9Ed4q4W2YpCbxaz&date=${input}`,

        // Em casop de sucesso, executa a função:
        success: function() {
            // Adiciona elementos à tela
            let titulo = $('.titleNasa').text(xhr.responseJSON.title)
            let explanation = $('.textNasa').text(xhr.responseJSON.explanation)
            console.log(xhr.responseJSON)
            // Pego media type para saber se é imagem ou vídeo
            let mediaType = xhr.responseJSON.media_type

            // Pego o elemento de video e imagem
            let img = $('.imgNasa')
            let video = $('.videoNasa')

            // Variável para segurar a url
            let url = xhr.responseJSON.url

            // Faço a comparação
            if (mediaType == 'image') {
                img.attr('src', url)

                // Removo a classe desativada do elemento
                img.removeClass("desativada")
                video.addClass("desativada")
            } else {
                video.attr('src', url)

                // Removo a classe desativada do elemento
                video.removeClass("desativada")
                img.addClass("desativada")
            }
        }
    })
}