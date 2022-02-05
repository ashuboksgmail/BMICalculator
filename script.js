const userName = document.getElementById('userName');

const heightInput = document.getElementById('heightInput');
const weightInput = document.getElementById('weightInput');

const resultBMI = document.getElementById('resultBMI');
const fitnessStatus = document.getElementById('fitnessStatus');
const calculate = document.getElementById('calculate');

let resetButton;


calculateBMI = () =>{

    const userHeight = (heightInput.value);
    const userWeight = (weightInput.value);
    
    const BMI = userWeight/(userHeight^2)
    console.log(BMI)
    resultBMI.textContent = `Your BMI is ${BMI}`;

    if (BMI < 16 ){
        fitnessStatus.textContent = "You are Severly Thin";
        resultBMI.style.backgroundColor = "red";
        fitnessStatus.style.backgroundColor = "red";
    }
    else if (BMI > 16 && BMI < 17){
        fitnessStatus.textContent = "You are Moderately Thin";
        resultBMI.style.backgroundColor = "red";
        fitnessStatus.style.backgroundColor = "red";
    }
    else if(BMI > 17 && BMI < 18.5){
        fitnessStatus.textContent = "You are Mildly Thin";
        resultBMI.style.backgroundColor = "orange";
        fitnessStatus.style.backgroundColor = "orange";
    }
    else if(BMI > 18.5 && BMI < 28){
        fitnessStatus.textContent = "You are Normal";
        resultBMI.style.backgroundColor = "green";
        fitnessStatus.style.backgroundColor = "green";
    }
    else{
        fitnessStatus.textContent = "You are FAT";
        resultBMI.style.backgroundColor = "red";
        fitnessStatus.style.backgroundColor = "red";
    }
    resetButton = document.createElement('button');
resetButton.textContent = "Reset";
document.body.append(resetButton);
resetButton.addEventListener('click', reset);


}

reset = () =>{
   
    const resetResults = document.querySelectorAll('.results p')

    for (const resetResult of resetResults){
        resetResult.textContent = " ";
    }

    resetButton.parentNode.removeChild(resetButton);
    heightInput.value = " ";
    weightInput.value = " ";
    
   
}

calculate.addEventListener('click', calculateBMI);






