import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Plant from './image/plant.png';
import Back from './image/back.png';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  items: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6FED2',
    fontSize: '15px',
    width: '170px',
    height: '20px',
    borderRadius: '10px',
    margin: '0 auto',
    marginLeft: '150px',
    textAlign: 'left',
  },
  image: {
    width: '30px',
    height: '30px',
  },
  question: {
    marginLeft: '150px',
    paddingLeft: '30px',
  },
  pTag: {
    marginTop: '5px',
    lineHeight: '23px',
  },
  table: {
    margin: '20px auto',
    width: '60%',
    borderCollapse: 'separate',
    borderSpacing: '0',
    textAlign: 'center',
    border: '1px solid #000',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  headerRow: {
    backgroundColor: '#cce5cc',
    fontWeight: 'bold',
  },
  contentRow: {
    backgroundColor: '#ffffff',
  },
  cell: {
    padding: '10px',
  },
  questionList: {
    margin: '20px auto',
    width: '60%',
    textAlign: 'left',
  },
  questionItem: {
    marginBottom: '40px',
    position: 'relative',
  },
  underlineInput: {
    width: '100%',
    border: 'none',
    borderBottom: '1px solid #000',
    marginTop: '15px',
    outline: 'none',
    textAlign: 'left',
    fontSize: '17px',
  },
  feedback: {
    marginTop: '10px',
    fontSize: '15px',
    color: 'green',
  },
  checkButton: {
    marginTop: '10px',
    padding: '5px 10px',
    fontSize: '14px',
    cursor: 'pointer',
  },
};

const Page45 = (props) => {
  const initialQuestions = [
    {
      question:
        '옥희 씨는 주말에 등산을 갔다 온 후 몸이 춥고 열이 38도 이상 올랐습니다. 어느 진료 과에 가야 하나요?',
      answer: '내과',
    },
    {
      question:
        '수경 씨는 요즘 미세먼지로 인해 비염이 더 심해졌습니다. 어느 진료 과에 가야 하나요?',
      answer: '이비인후과',
    },
    {
      question:
        '진호 씨는 자전거를 타다 다리가 골절되었습니다. 어느 진료 과에 가야 하나요?',
      answer: '정형외과',
    },
    {
      question:
        '정민 씨는 전날 있었던 일과 전화번호, 집 주소를 기억하기 어렵습니다. 어느 진료 과에 가야 하나요?',
      answer: '신경과',
    },
    {
      question:
        '건우 씨는 소변이 자주 마렵고 참기 힘든 증상을 자주 보입니다. 어느 진료 과에 가야 하나요?',
      answer: '비뇨기과',
    },
  ];

  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const shuffled = [...initialQuestions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
    setAnswers(Array(shuffled.length).fill(''));
  }, []);

  const handleInputChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const checkAnswer = (index) => {
    const userAnswer = answers[index].trim();
    const correctAnswer = shuffledQuestions[index].answer;
    if (userAnswer === correctAnswer) {
      alert('정답입니다!');
    } else {
      alert('오답입니다. 다시 시도해보세요.');
    }
  };

  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate('/page46');
  };

  return (
    <div style={styles.wrapper} alt="dv1">
      <img src={Back} alt="background" />
      <div style={styles.items} alt="main1">
        <img src={Plant} style={styles.image} />
        <p>{props.subtitle}진료과목 분류하기</p>
      </div>
      <div style={styles.question} alt="subject">
        <h4 style={styles.pTag}>
          다음 증상에 맞는 {'<진료과목>'}을 적어보세요(1~5).
          <br />
          {props.question}
        </h4>
      </div>
      <table style={styles.table} alt="tb">
        <thead>
          <tr style={styles.headerRow} alt="medical">
            <th style={styles.cell}>&lt;진료과목&gt;</th>
          </tr>
        </thead>
        <tr style={styles.contentRow} alt="example">
          <td style={styles.cell}>
            내과, 신경과, 이비인후과, 정형외과, 비뇨기과
          </td>
        </tr>
      </table>
      <div style={styles.questionList} alt="dv2">
        {shuffledQuestions.map((item, index) => (
          <div key={index} style={styles.questionItem} alt="random">
            <p alt="question">
              {index + 1}. {item.question}
            </p>
            <input
              alt="textbox"
              type="text"
              value={answers[index]}
              onChange={(e) => handleInputChange(index, e.target.value)}
              style={styles.underlineInput}
            />
            <button
              alt="button"
              style={styles.checkButton}
              onClick={() => checkAnswer(index)}
            >
              확인
            </button>
          </div>
        ))}
      </div>
      <button className="next-button" onClick={handleNextPage}>
        다음 페이지
      </button>{' '}
    </div>
  );
};

export default Page45;
