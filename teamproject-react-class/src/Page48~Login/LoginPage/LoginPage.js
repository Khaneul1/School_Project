import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [username, SetUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'haneul1219' && password === 'password123') {
      navigate('/page1');
    } else {
      alert('아이디 또는 비밀번호가 일치하지 않습니다');
    }
  };

  const goToSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>로그인</h2>
        <div className="login-section">
          <input
            type="text"
            placeholder="아이디를 입력하세요"
            value={username}
            onChange={(e) => SetUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>로그인</button>
          <button onClick={goToSignUp}>회원가입</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
