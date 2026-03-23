import React from 'react';
import './MyDaySection.css';

const MyDaySection = ({ dayInputs, handleInputChange }) => {
  return (
    <div className="my-day-section">
      <h3 className="my-day-title">나의 하루</h3>
      <div className="my-day-table">
        <div className="row">
          <span>방문한 장소</span>
          <textarea
            type="text"
            value={dayInputs.visitedPlace}
            onChange={(e) => handleInputChange('visitedPlace', e.target.value)}
            className="my-day-input-box"
          />
          <span className="diary-met-people">오늘 만난 사람</span>
          <textarea
            type="text"
            value={dayInputs.metPeople}
            onChange={(e) => handleInputChange('metPeople', e.target.value)}
            className="my-day-input-box"
          />
        </div>
        <div className="row">
          <span>구입한 물건</span>
          <textarea
            type="text"
            value={dayInputs.purchasedItems}
            onChange={(e) =>
              handleInputChange('purchasedItems', e.target.value)
            }
            className="my-day-input-box"
          />
          <span className="diary-expenses">지출 금액</span>
          <textarea
            type="text"
            value={dayInputs.expenses}
            onChange={(e) => handleInputChange('expenses', e.target.value)}
            className="my-day-input-box"
          />
        </div>
        <div className="row">
          <span>오늘의 뉴스</span>
          <textarea
            type="text"
            value={dayInputs.todayNews}
            onChange={(e) => handleInputChange('todayNews', e.target.value)}
            className="todayNews-input-box"
          />
        </div>
      </div>
    </div>
  );
};

export default MyDaySection;
