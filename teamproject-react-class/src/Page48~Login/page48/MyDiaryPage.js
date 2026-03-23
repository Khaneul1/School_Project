import React, { useState } from 'react';

import './MyDiaryPage.css';
import DiaryInput from './DiaryInput';
import WeatherSelector from './WeatherSelector';
import MyDaySection from './MyDaySection';
import TimeTable from './TimeTable';
import BrainHealthTips from './BrainHealthTips';

const MyDiaryPage = () => {
  const [dateInput, setDateInput] = useState({
    year: '',
    month: '',
    day: '',
    weekday: '',
  });
  const [selectedWeather, setSelectedWeather] = useState('');
  const [correctDate, setCorrectDate] = useState(new Date());

  const resetInputs = () => {
    const correctDateString = {
      year: correctDate.getFullYear(),
      month: correctDate.getMonth() + 1,
      day: correctDate.getDate(),
      weekday: ['일', '월', '화', '수', '목', '금', '토'][correctDate.getDay()],
    };

    setDateInput(correctDateString);
  };

  const [tasks, setTasks] = useState({
    '오전 5시~8시': '',
    '오전 8시~12시': '',
    '오후 12시~5시': '',
    '오후 5시~10시': '',
  });

  const handleInputChange = (field, value) => {
    setDateInput((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleTaskChange = (timeSlot, value) => {
    setTasks((prev) => ({
      ...prev,
      [timeSlot]: value,
    }));
  };

  const handleSubmit = () => {
    const currentDate = new Date();
    const isCorrect =
      parseInt(dateInput.year, 10) === currentDate.getFullYear() &&
      parseInt(dateInput.month, 10) === currentDate.getMonth() + 1 &&
      parseInt(dateInput.day, 10) === currentDate.getDate() &&
      dateInput.weekday ===
        ['일', '월', '화', '수', '목', '금', '토'][currentDate.getDay()];

    if (!isCorrect) {
      alert('오답입니다!');
      resetInputs();
    } else {
      alert('정답입니다!');
    }
  };

  return (
    <div className="my-diary-page">
      <div className="diary-header">
        <h3>일기</h3>
        <div className="diary-user-input-section">
          <DiaryInput dateInput={dateInput} setDateInput={setDateInput} />
          <WeatherSelector
            selectedWeather={selectedWeather}
            setSelectedWeather={setSelectedWeather}
          />
          <button onClick={handleSubmit} className="diary-weather-submit-btn">
            등록
          </button>
        </div>
      </div>
      <MyDaySection
        dayInputs={dateInput}
        handleInputChange={handleInputChange}
      />
      <TimeTable tasks={tasks} handleTaskChange={handleTaskChange} />
      <table className="tomorrow-plan-table">
        <tbody>
          <tr className="tomorrow-plan-table-section">
            <td className="plan-title">내일 계획</td>
            <td>
              <textarea type="text" className="plan-input" />
            </td>
          </tr>
        </tbody>
      </table>
      <BrainHealthTips />
    </div>
  );
};

export default MyDiaryPage;
