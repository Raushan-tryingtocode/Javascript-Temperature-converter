const toCelcius = document.getElementById("toCelcius");
const toFarenheit = document.getElementById("toFarenheit");
const temparature = document.getElementById("temparature");
const result = document.getElementById("result");

function convert(){
    if(toCelcius.checked){
        temp=Number(temparature.value);
        temp=(temp-32)*(5/9);
        result.textContent= temp + "°C";
    }
    else if(toFarenheit.checked){
        temp=Number(temparature.value);
        temp=(temp*9/5)+32;
        result.textContent= temp + "°F";

    }
    else{
        result.textContent="Please select a unit";
    }
    
}


