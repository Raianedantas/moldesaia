
   //função para cintura
function evalInput(strInput) {
    // Valor fixo
    var valorFixo = "cintura=";

    // Adiciona o valor fixo ao valor inserido pelo usuário
    var resultado = valorFixo + strInput;

    // Executa o comando com o resultado
    ggbApplet.evalCommand(resultado.toString());

    // Limpa o campo de entrada
    document.getElementById('campo').value = '';

    // Retorna falso para evitar o envio do formulário
    return false;
    }
    
    //função para o quadril 
		function evalInput1(strInput) {
    // Valor fixo
    var valorFixo = "quadril=";

    // Adiciona o valor fixo ao valor inserido pelo usuário
    var resultado = valorFixo + strInput;

    // Executa o comando com o resultado
    ggbApplet.evalCommand(resultado.toString());

    // Limpa o campo de entrada
    document.getElementById('campo').value = '';

    // Retorna falso para evitar o envio do formulário
    return false;
    }

//função para a altura do quadril 
		function evalInput2(strInput) {
    // Valor fixo
    var valorFixo = "alturadoquadril=";

    // Adiciona o valor fixo ao valor inserido pelo usuário
    var resultado = valorFixo + strInput;

    // Executa o comando com o resultado
    ggbApplet.evalCommand(resultado.toString());

    // Limpa o campo de entrada
    document.getElementById('campo').value = '';

    // Retorna falso para evitar o envio do formulário
    return false;
    }
    
    //função para o comprimento total
		function evalInput3(strInput) {
    // Valor fixo
    var valorFixo = "comprimentototal=";

    // Adiciona o valor fixo ao valor inserido pelo usuário
    var resultado = valorFixo + strInput;

    // Executa o comando com o resultado
    ggbApplet.evalCommand(resultado.toString());

    // Limpa o campo de entrada
    document.getElementById('campo').value = '';

    // Retorna falso para evitar o envio do formulário
    return false;
    }
function enviarValores() {
            var alturaQuadrilValue = document.getElementsByName('inputField2')[0].value;
            var cinturaValue = document.getElementsByName('inputField')[0].value;
            var comprimentoTotalValue = document.getElementsByName('inputField3')[0].value;
            var quadrilValue = document.getElementsByName('inputField1')[0].value;

            evalInput2(alturaQuadrilValue);
            evalInput(cinturaValue);
            evalInput3(comprimentoTotalValue);
            evalInput1(quadrilValue);
}
