function calcula_imc(){
    var altura = document.imcForm.altura.value;
    var peso = document.imcForm.peso.value;

    var calculo = (peso/(altura*altura));

    if(calculo<18.5){
        alert("Você está classificado como Magro com o índice: " + calculo);
    }
    else if(calculo>=18.5 && calculo<24.9){
        alert("Você está classificado como Normal com o índice: " + calculo);
    }
    else if(calculo>=25 && calculo<29.9){
        alert("Você está classificado com Sobrepeso com o índice: " + calculo);
    }
    else if(calculo>=30 && calculo<39.9){
        alert("Você está classificado com Obesidade com o índice: " + calculo);
    }
    else if(calculo>40){
        alert("Você está classificado com Obesidade Grave com o índice: " + calculo);
    }
}