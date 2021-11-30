function consultaCep()
{
    $(".barra_progresso").show();
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/"+cep+"/json/";
    $.ajax({
        url:url,
        type: "GET",
        success: function(response){
            console.log(response.logradouro);
            $('#logradouro').html(response.logradouro);
            $('#Localidade').html(response.localidade);
            $('#bairro').html(response.bairro);
            $('#uf').html(response.uf);
            $('#titulo_cep').html("CEP " + response.cep);
            $(".cep").show();
            $(".barra_progresso").hide();
        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barra_progresso").hide();
})
