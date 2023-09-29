function funcaoCorrigir() {
    var respostaCerta = "correta";
    var respostaUsuario = document.querySelector('input[name="resposta"]:checked');

    if(respostaUsuario){
        if(respostaUsuario.value === respostaCerta){
            document.getElementById("retorno").innerHTML = "Ai sim nene";
        }
        else{
            document.getElementById("retorno").innerHTML = "Errou, Cabaço";
        }
    }
    else{
        alert("tem escolher uma animal!")
    }
    
}