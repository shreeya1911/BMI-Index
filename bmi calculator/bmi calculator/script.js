function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    if (weight > 0 && height > 0) {
        var bmi = weight / ((height / 100) * (height / 100));
        var bmiResult = document.getElementById('bmi-result');
        bmiResult.innerHTML = 'Your BMI is ' + bmi.toFixed(2);

        var weightLossPlan = document.getElementById('diet-plan-weight-loss');
        var weightGainPlan = document.getElementById('diet-plan-weight-gain');

        if (bmi < 18.5) {
            bmiResult.innerHTML += ' - You are underweight.';
            weightGainPlan.style.display = 'block';
            weightLossPlan.style.display = 'none';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            bmiResult.innerHTML += ' - You have a normal weight.';
            weightGainPlan.style.display = 'none';
            weightLossPlan.style.display = 'none';
        } else if (bmi >= 25 && bmi < 29.9) {
            bmiResult.innerHTML += ' - You are overweight.';
            weightLossPlan.style.display = 'block';
            weightGainPlan.style.display = 'none';
        } else {
            bmiResult.innerHTML += ' - You are obese.';
            weightLossPlan.style.display = 'block';
            weightGainPlan.style.display = 'none';
        }
    } else {
        alert('Please enter valid weight and height.');
    }
}
