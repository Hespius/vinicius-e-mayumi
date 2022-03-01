jQuery(document).ready(function($) {
    "use strict";
    // Carrosel das fotos
    $('#id-fotos').owlCarousel({
        loop:true,
        center:true,
        itens:3,
        margin:0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1170:{
                items:3
            }
        }
    });
});

function confirmarPresenca(){
    event.preventDefault()
    let url = "https://sheetdb.io/api/v1/5r6mjxdz0jcmf"
    
    let nome = document.getElementById("nome").value
    let quantidade = document.getElementById("quantidade").value
    let presenca = document.getElementById("presenca").value

    body = {
        "Nome": nome,
        "Quantidade": quantidade,
        "Presença": presenca
    }

    enviarPresenca(url, body)
}

function enviarPresenca(url, body){
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function(){
        console.log(this.responseText)
    }

    return request.responseText
}