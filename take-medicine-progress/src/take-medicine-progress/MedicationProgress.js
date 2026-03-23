import React from 'react';
import './MedicationProgress.css';

const MedicationProgress = ({ category }) => {
  const { name, progress, list } = category;

  const pendingMeds = list.filter((item) => !item.taken);
  return (
    <div className="medication-container">
      <h3>{name}</h3>
      <p>{progress}% 완료</p>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      {pendingMeds.length > 0 ? (
        <ul>
          {pendingMeds.map((item, index) => (
            <li key={index}>
              {item.time} {item.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>모든 약을 복용 완료했습니다!</p>
      )}
    </div>
  );
};

export default MedicationProgress;
