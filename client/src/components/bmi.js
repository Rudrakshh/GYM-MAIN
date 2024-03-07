import React, { useState } from 'react';
import './bmi.css'; // Import the CSS file

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [interpretation, setInterpretation] = useState('');
  const [calorieRecommendation, setCalorieRecommendation] = useState('');
  const [recommendedFoods, setRecommendedFoods] = useState([]);

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInCm = parseFloat(height);

    if (!weightInKg || !heightInCm) {
      alert('Please enter valid weight and height values.');
      return;
    }

    // Convert height from centimeters to meters
    const heightInM = heightInCm / 100;

    const calculatedBMI = (weightInKg / (heightInM * heightInM)).toFixed(2);
    setBMI(calculatedBMI);

    // Interpret BMI
    if (calculatedBMI < 18.5) {
      setInterpretation('Underweight');
    } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
      setInterpretation('Normal Weight');
    } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
      setInterpretation('Overweight');
    } else {
      setInterpretation('Obese');
    }

    // Calculate a range for calorie recommendation based on weight
    const lowerCalorieRecommendation = (weightInKg * 25).toFixed(0);
    const upperCalorieRecommendation = (weightInKg * 30).toFixed(0);
    setCalorieRecommendation(`${lowerCalorieRecommendation} - ${upperCalorieRecommendation} kcal`);

    // Recommended foods based on BMI category
    let foods = [];
    if (calculatedBMI < 18.5) {
      foods = ['Eggs', 'Lean chicken', 'Salmon', 'Avocado', 'Nuts'];
    } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
      foods = ['Fruits', 'Vegetables', 'Whole grains', 'Lean protein', 'Dairy products'];
    } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
      foods = ['Lean protein', 'Leafy greens', 'Berries', 'Quinoa', 'Greek yogurt'];
    } else {
      foods = ['Portion control', 'Complex carbs in moderation', 'Lean protein', 'Vegetables'];
    }
    setRecommendedFoods(foods);
  };

  return (
    <div className="bmi-container">
      <button className="homepage-button" onClick={()=>{}}>
        Go to Homepage
      </button>
      <h1 className="bmi-heading">BMI Calculator</h1>
      <div>
        <label className="bmi-label">Weight (kg):</label>
        <input className="bmi-input" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div>
        <label className="bmi-label">Height (cm):</label>
        <input className="bmi-input" type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <button className="bmi-button" onClick={calculateBMI}>Calculate BMI</button>
      {bmi && (
        <div>
          <h2 className="bmi-result">Your BMI: {bmi}</h2>
          <p className="bmi-interpretation">Interpretation: {interpretation}</p>
          <p className="bmi-calorie">Recommended Daily Calories: {calorieRecommendation}</p>
          <div className="bmi-foods">
            <p>Recommended Foods:</p>
            <ul>
              {recommendedFoods.map((food, index) => (
                <li key={index}>{food}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );

}

export default BMICalculator;
