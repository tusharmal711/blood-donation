import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { User, CheckCircle, XCircle } from 'lucide-react';


const questionnaire = [
  { id: 'age', question: 'What is your age?', type: 'number', required: true },
  { id: 'weight', question: 'What is your weight in kg?', type: 'number', required: true },
  { id: 'health', question: 'Are you feeling well today?', type: 'radio', options: ['Yes', 'No'], required: true },
  { id: 'medication', question: 'Are you currently taking any medications?', type: 'radio', options: ['Yes', 'No'], required: true },
  { id: 'lastDonation', question: 'When was your last blood donation?', type: 'radio', options: ['Never donated', 'More than 56 days ago', 'Less than 56 days ago'], required: true },
  { id: 'travel', question: 'Have you traveled outside the country in the last 3 months?', type: 'radio', options: ['Yes', 'No'], required: true },
];

const Eligibility_Check = () => {
  const [answers, setAnswers] = useState({});
  const [eligibilityResult, setEligibilityResult] = useState(null);
  const navigate = useNavigate();

  const handleAnswerChange = (id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const checkEligibility = () => {
    let eligible = true;
    const reasons = [];

    if (!answers.age || answers.age < 18 || answers.age > 65) {
      eligible = false;
      reasons.push('Age must be between 18-65 years');
    }
    if (!answers.weight || answers.weight < 50) {
      eligible = false;
      reasons.push('Minimum weight requirement is 50 kg');
    }
    if (answers.health === 'No') {
      eligible = false;
      reasons.push('Must be feeling well to donate');
    }
    if (answers.medication === 'Yes') {
      eligible = false;
      reasons.push('Some medications may affect eligibility');
    }
    if (answers.lastDonation === 'Less than 56 days ago') {
      eligible = false;
      reasons.push('Must wait 56 days between whole blood donations');
    }

    if (eligible) {
      setEligibilityResult({ eligible, reasons });

      Swal.fire({
        icon: 'success',
        title: 'You are eligible to donate!',
        text: 'Please proceed to the donation form.',
        confirmButtonText: 'Donate Now',
        confirmButtonColor: '#d33',
      }).then(result => {
        if (result.isConfirmed) {
          navigate('/Donate');  // change this to your actual donation form route
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Currently Not Eligible',
        html: reasons.length > 0 ? `<ul style="text-align:left;">${reasons.map(r => `<li>${r}</li>`).join('')}</ul>` : '',
        confirmButtonText: 'OK',
        confirmButtonColor: '#6b7280',
      });

      setEligibilityResult({ eligible, reasons }); // Optional: to show reasons on page if you want
      // DO NOT navigate or change step, stay on form so user can fix answers
    }
  };

  const resetForm = () => {
    setAnswers({});
    setEligibilityResult(null);
  };

  const isFormComplete = questionnaire.every(q => answers[q.id]);

  return (
    <div className="max-w-xl mx-auto mt-32 p-12 bg-white rounded-lg shadow-md">
      <div className="text-center mb-6">
        <User className="w-16 h-16 mx-auto text-red-600" />
        <h2 className="text-2xl font-semibold text-gray-800 mb-1">Eligibility Questionnaire</h2>
        <p className="text-gray-500">Please answer all questions honestly and accurately</p>
      </div>

      <div>
        {questionnaire.map(q => (
          <div key={q.id} className="mb-6">
            <h4 className="font-semibold mb-2 text-gray-800">
              {q.question}
              {q.required && <span className="text-red-600">*</span>}
            </h4>

            {q.type === 'number' && (
              <input
                type="number"
                value={answers[q.id] || ''}
                onChange={e => handleAnswerChange(q.id, Number(e.target.value))}
                placeholder="Enter your answer"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            )}

            {q.type === 'radio' && (
              <div className="flex flex-col gap-2">
                {q.options.map(option => (
                  <label key={option} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name={q.id}
                      value={option}
                      checked={answers[q.id] === option}
                      onChange={e => handleAnswerChange(q.id, e.target.value)}
                      className="text-red-600 focus:ring-red-500"
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}

        <button
          onClick={checkEligibility}
          disabled={!isFormComplete}
          className={`mt-8 px-6 py-3 rounded-md text-white mx-auto block ${
            isFormComplete ? 'bg-red-600 hover:bg-red-700' : 'bg-red-300 cursor-not-allowed'
          }`}
        >
          Check My Eligibility
        </button>

        {eligibilityResult && eligibilityResult.eligible && (
          <div className="mt-6 p-4 border border-green-600 bg-green-100 rounded-md text-green-700 flex items-center gap-3">
            <CheckCircle className="w-6 h-6" />
            <span>You are eligible to donate! <button
              className="ml-auto px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700"
              onClick={() => navigate('/Donate')}
            >Donate Now</button></span>
          </div>
        )}

        {eligibilityResult && !eligibilityResult.eligible && (
          <div className="mt-6 p-4 border border-red-600 bg-red-100 rounded-md text-red-700">
            <div className="flex items-center gap-3 mb-2">
              <XCircle className="w-6 h-6" />
              <span>Currently not eligible to donate</span>
            </div>
            <ul className="list-disc list-inside">
              {eligibilityResult.reasons.map((reason, i) => (
                <li key={i}>{reason}</li>
              ))}
            </ul>
          </div>
        )}

        {eligibilityResult && (
          <button
            className="mt-6 px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            onClick={resetForm}
          >
            Reset Form
          </button>
        )}
      </div>
    </div>
  );
};

export default Eligibility_Check;
