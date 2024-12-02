import React, { useState } from 'react';
import './UserBodyInfo.css';

const UserBodyInfo = () => {
  const [userData, setUserData] = useState({
    height: '',
    age: '',
    weight: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit data:', userData);
  };
  return (
    <div className="user-body-info-section">
      <p>직접 입력</p>
      <div className="user-input-form">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>
              키
              <input
                type="number"
                name="height"
                value={userData.height}
                onChange={handleChange}
                placeholder="입력"
              />
              <span>cm</span>
            </label>
          </div>

          <div className="input-group">
            <label>
              나이
              <input
                type="number"
                name="age"
                value={userData.age}
                onChange={handleChange}
                placeholder="입력"
              />
              <span>세</span>
            </label>
          </div>

          <div className="input-group">
            <label>
              몸무게
              <input
                type="number"
                name="weight"
                value={userData.weight}
                onChange={handleChange}
                placeholder="입력"
              />
              <span>kg</span>
            </label>
          </div>

          <button type="submit" className="submit-btn">
            등록
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserBodyInfo;
