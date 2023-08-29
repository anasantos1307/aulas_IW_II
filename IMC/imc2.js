function calcula_imc(event){

    event.preventDefault();

    var altura = document.imcForm.altura.value;
    var peso = document.imcForm.peso.value;

    var calculo = (peso/(altura*altura));

    var resultado;

    if(calculo<18.5){
        resultado = "Você está classificado como Magro com o índice: " + calculo;
    } else if(calculo>=18.5 && calculo <24.9){
        resultado = "Você está classificado como Normal com o índice: " + calculo;
    } else if(calculo>=25 && calculo<29.9){
        resultado = "Você está classificado com Sobrepeso com o índice: " + calculo;
    } else if(calculo>=30 && calculo<39.9){
        resultado = "Você está classificado com Obesidade com o índice: " + calculo;
    } else if(calculo>=40){
        resultado = "Você está classificado com Obesidade Grave com o índice: " + calculo;
    }

    document.getElementById('resul').innerHTML = resultado;
}