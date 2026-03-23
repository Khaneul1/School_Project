import React from 'react';
import './DiaryInput.css';

const DiaryInput = ({ dateInput, setDateInput }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDateInput((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="diary-input-section">
      <input
        type="number"
        name="year"
        placeholder="연도 입력"
        value={dateInput.year}
        onChange={handleChange}
      />
      <span>년</span>
      <input
        type="number"
        name="month"
        placeholder="월 입력"
        value={dateInput.month}
        onChange={handleChange}
      />
      <span>월</span>
      <input
        type="number"
        name="day"
        placeholder="일 입력"
        value={dateInput.day}
        onChange={handleChange}
      />
      <span>일</span>
      <input
        type="text"
        name="weekday"
        placeholder="요일 입력"
        value={dateInput.weekday}
        onChange={handleChange}
      />
      <span>요일</span>
    </div>
  );
};

export default DiaryInput;
