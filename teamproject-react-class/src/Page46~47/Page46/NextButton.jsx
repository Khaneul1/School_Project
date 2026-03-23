import React from 'react';
import './NextButton.css';
import { useNavigate } from 'react-router-dom';

function NextButton() {
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate('/page47');
  };

  return (
    <div className="next-button-container">
      <button className="next-button" onClick={handleNextPage}>
        다음 페이지
      </button>
    </div>
  );
}

export default NextButton;
