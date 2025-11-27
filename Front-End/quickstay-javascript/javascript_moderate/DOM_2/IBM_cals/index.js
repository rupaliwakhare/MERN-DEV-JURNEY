function calculateBMI() {
  let weightInput = document.getElementById("weight").value;
  let heightInput = document.getElementById("height").value;

  let weight = Number(weightInput);
  let height = Number(heightInput);

  if (!weight || !height || height <= 0) {
    document.getElementById("result").textContent =
      "Please enter valid weight and height.";
    return;
  }

  let  bmi = weight / (height * height);
  let status = "";

  if (bmi <= 18.4) {
    status = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    status = "Normal Weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    status = "Overweight";
  } else {
    status = "Obese";
  }

  document.getElementById("result").textContent =
    "Your BMI is " + bmi.toFixed(2) + " (" + status + ")";
}
