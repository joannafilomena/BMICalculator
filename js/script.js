let heightBMI = document.querySelector(".js-height");
let weightBMI = document.querySelector(".js-weight");
let buttonBMI = document.querySelector(".sumButton");
let buttonReset = document.querySelector(".resetButton");
let bmiSubmit = document.querySelector(".bmiSubmit");
let bmiType = document.querySelector(".bmiType");
let sum;

buttonBMI.addEventListener("click", (event) => {
    event.preventDefault();
    sum = weightBMI.value / ((heightBMI.value)/100)**2;
    bmiSubmit.innerText = sum.toFixed(2);
    if (sum<18.5 && sum>16.9) {
        bmiType.innerText = "Masz niedowagę.";
    } else if (sum >= 18.5 && sum <= 24.9) {
        bmiType.innerText = "Twoje BMI ma wartość prawidłową.";
    } else if (sum <=16.9) {
        bmiType.innerText = "Twoje BMI wskazuje na wychudzenie.";
    } else if (sum >24.9 && sum <= 29.9) {
        bmiType.innerText = "Masz nadwagę.";
    } else if (sum >29.9 && sum <=34.9) {
        bmiType.innerText = "Masz otyłość I stopnia.";
    } else if (sum > 34.9) {
         bmiType.innerText = "Masz otyłość II stopnia.";
    } else {bmiType.innerText= "Wpisz wzrost i wagę, aby dowiedzieć się, co oznacza Twoje BMI."}
});

buttonReset.addEventListener("click", () =>{
    bmiType.innerText = "Wpisz wzrost i wagę, aby dowiedzieć się, co oznacza Twoje BMI.";
    bmiSubmit.innerText ="N/A";
});