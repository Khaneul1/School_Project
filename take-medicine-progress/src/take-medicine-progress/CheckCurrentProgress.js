import React, { useState, useEffect } from 'react';
import MedicationProgress from './MedicationProgress';
import './CheckCurrentProgress.css';
const CheckCurrentProgress = () => {
  const [medications, setMedications] = useState({
    oral: {
      name: '내복약',
      progress: 70, //우선 초기값 지정
      list: [
        {
          time: '오후 4:00',
          name: '감기약',
          taken: false,
        },
        { time: '오후 8:00', name: '항생제', taken: false },
      ],
    },

    supplements: {
      name: '영양제',
      progress: 30,
      list: [
        { time: '오후 4:30', name: '비타민C', taken: false },
        { time: '오전 9:00', name: '오메가3', taken: true },
      ],
    },
  });

  const [userStats, setUserStats] = useState({
    weight: 70,
    exerciseTime: 30,
  });

  const getCurrentDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    return `${month}. ${date}`;
  };

  useEffect(() => {
    //setMedications(newData) 여기서 데이터 업데이트!!!!
  }, []);

  return (
    <div className="check-current-progress">
      <h2>{getCurrentDate()} 오늘</h2>
      <MedicationProgress category={medications.oral} />
      <MedicationProgress category={medications.supplements} />
      <div className="user-stats">
        <div className="stat-item">
          <span>체중</span>
          <p>{userStats.weight} Kg</p>
        </div>
        <div className="stat-item">
          <span>운동</span>
          <p>{userStats.exerciseTime} 분</p>
        </div>
      </div>
    </div>
  );
};

export default CheckCurrentProgress;
