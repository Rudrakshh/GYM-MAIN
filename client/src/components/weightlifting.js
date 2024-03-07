import React from 'react';
import './weightlifting.css'

function WeightLiftingProgram() {
  return (
    <div className="weight-lifting-program">
      <h1>Weight Lifting Program</h1>
      <p>
        In this program, you will be trained to improve your strength through various exercises.
        Weight lifting is an excellent way to build muscle, increase your metabolism, and enhance your overall
        physical performance.
      </p>
      <h2>Program Details:</h2>
      <ul>
        <li>Duration: 12 weeks</li>
        <li>Sessions per week: 3</li>
        <li>Focus areas: Upper body, lower body, core</li>
      </ul>
      <h2>Benefits:</h2>
      <ul>
        <li>Increased muscle strength</li>
        <li>Improved muscle tone</li>
        <li>Enhanced metabolism</li>
        <li>Better posture and balance</li>
        <li>Boosted confidence</li>
      </ul>
      <h2>Equipment Needed:</h2>
      <ul>
        <li>Dumbbells</li>
        <li>Barbell</li>
        <li>Bench</li>
        <li>Kettlebells</li>
        {/* Add more equipment items as needed */}
      </ul>
      <h2>Sample Exercises:</h2>
      <ul>
        <li>Squats</li>
        <li>Deadlifts</li>
        <li>Bench press</li>
        <li>Rows</li>
        {/* Add more exercises as needed */}
      </ul>
    </div>
  );
}

export default WeightLiftingProgram;
