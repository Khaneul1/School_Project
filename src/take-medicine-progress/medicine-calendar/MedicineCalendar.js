import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MedicineCalender = ({ onDateSelect }) => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    onDateSelect(selectedDate);
  };

  return (
    <div>
      <h3>캘린더</h3>
      <Calendar onChange={handleDateChange} value={date} locale="ko-KR" />
      <p>{date.toLocaleDateString('ko-KR')}</p>
    </div>
  );
};

export default MedicineCalender;
