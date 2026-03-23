import React from 'react';
import './TimeTable.css';

const timeSlots = [
  { time: '오전 5시~8시', description: '일어나서 한 일' },
  { time: '오전 8시~12시', description: '아침식사 후에 한 일' },
  { time: '오후 12시~5시', description: '오후에 한 일' },
  { time: '오후 5시~10시', description: '저녁식사 후에 한 일' },
];

const TimeTable = ({ tasks, handleTaskChange }) => {
  return (
    <div className="time-table">
      <table>
        <thead>
          <tr>
            <th className="th-time">시각</th>
            <th className="th-importantThing">중요한 일</th>
          </tr>
        </thead>
      </table>
      <tbody className="time-table-section">
        {timeSlots.map(({ time, description }) => (
          <tr key={time} className="time-table-box">
            <td className="time-table-time">{time}</td>
            <td className="time-table-des-box">
              <div>
                <span>{description}</span>
              </div>
            </td>
            <td className="time-table-input-box">
              <textarea
                type="text"
                value={tasks[time] || ''}
                onChange={(e) => handleTaskChange(time, e.target.value)}
                className="time-table-input"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </div>
  );
};

export default TimeTable;
