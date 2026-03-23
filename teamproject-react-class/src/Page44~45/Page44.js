import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Plant from './image/plant.png';
import Back2 from './image/back2.png';
import image1 from './image/image1.png';
import image2 from './image/image2.png';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '800px',
    margin: '0 auto',
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
    marginRight: '500px',
    textAlign: 'left',
  },
  image: {
    width: '30px',
    height: '30px',
  },
  question: {
    marginLeft: '130px',
    paddingLeft: '30px',
  },
  table: {
    border: '1px solid #000',
    textAlign: 'center',
    width: '60%',
    height: '60%',
    margin: '0 auto',
  },
  tableCell: {
    border: '1px solid #000',
    textAlign: 'center',
    verticalAlign: 'middle',
    width: '60px',
    height: '60px',
  },
  clickableCell: {
    cursor: 'pointer',
  },
  selectedCell: {
    backgroundColor: 'gray',
  },
  button: {
    marginTop: '5px',
    fontSize: '15px',
    cursor: 'pointer',
  },
  result: {
    textAlign: 'center',
    marginTop: '10px',
    fontSize: '15px',
  },
  tableHeader: {
    textAlign: 'center',
    padding: '15px 0',
  },
  imageFixed: {
    width: '150px',
    height: '150px',
  },
};

const Page44 = (props) => {
  const [selectedCells, setSelectedCells] = useState({});

  const correctAnswers = {
    front: ['front-0-1', 'front-1-1', 'front-1-0', 'front-1-2'],
    side: ['side-0-0', 'side-0-1', 'side-1-0', 'side-1-1'],
  };

  const handleCellClick = (row, col, section) => {
    setSelectedCells((prev) => {
      const key = `${section}-${row}-${col}`;
      return {
        ...prev,
        [key]: !prev[key],
      };
    });
  };

  const checkCorrectness = (section) => {
    const correctSet = new Set(correctAnswers[section]);
    const selectedSet = new Set(
      Object.keys(selectedCells).filter(
        (key) => selectedCells[key] && key.startsWith(section)
      )
    );
    const isCorrect =
      correctSet.size === selectedSet.size &&
      [...correctSet].every((item) => selectedSet.has(item));

    if (isCorrect) {
      alert('정답입니다!');
    } else {
      alert('오답입니다!');
    }
  };

  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate('/page45');
  };

  return (
    <div style={styles.wrapper} alt="dv">
      <img
        src={Back2}
        alt="background"
        style={{ width: '800px', height: 'auto' }}
      />
      <div style={styles.items} alt="main1">
        <img src={Plant} style={styles.image} />
        <p>{props.subtitle} 평면도 그리기</p>
      </div>
      <div style={styles.question} alt="subject">
        <h4>
          아래는 블록을 쌓은 사진입니다.
          <br />
          사진과 {'<보기>'}를 참고하여 앞과 옆에서 본 평면도를 클릭하여
          완성하세요.
        </h4>
      </div>
      <table style={styles.table} alt="tb">
        <tr alt="tr">
          <td style={styles.tableCell} alt="td">
            <img src={image1} alt="example1" style={styles.imageFixed} />
          </td>
          <td style={styles.tableCell} alt="td">
            <div style={styles.tableHeader} alt="text">
              {'<보기>'} <br />
              위에서 본 평면도
            </div>
            <img src={image2} alt="example2" style={styles.imageFixed} />
          </td>
        </tr>
        <tr alt="tr">
          <td style={styles.tableCell}>
            <div style={styles.tableHeader} alt="text">
              앞에서 본 평면도
            </div>
            {[0, 1].map((row) => (
              <div
                key={row}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                {[0, 1, 2].map((col) => {
                  const key = `front-${row}-${col}`;
                  return (
                    <div
                      alt="question1"
                      key={col}
                      style={{
                        ...styles.tableCell,
                        ...styles.clickableCell,
                        ...(selectedCells[key] ? styles.selectedCell : {}),
                      }}
                      onClick={() => handleCellClick(row, col, 'front')}
                    ></div>
                  );
                })}
              </div>
            ))}
            <button
              style={styles.button}
              alt="button1"
              onClick={() => checkCorrectness('front')}
            >
              확인
            </button>
          </td>
          <td style={styles.tableCell}>
            <div style={styles.tableHeader} alt="text">
              옆에서 본 평면도
            </div>
            {[0, 1].map((row) => (
              <div
                key={row}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                {[0, 1].map((col) => {
                  const key = `side-${row}-${col}`;
                  return (
                    <div
                      alt="question2"
                      key={col}
                      style={{
                        ...styles.tableCell,
                        ...styles.clickableCell,
                        ...(selectedCells[key] ? styles.selectedCell : {}),
                      }}
                      onClick={() => handleCellClick(row, col, 'side')}
                    ></div>
                  );
                })}
              </div>
            ))}
            <button
              style={styles.button}
              alt="button2"
              onClick={() => checkCorrectness('side')}
            >
              확인
            </button>
          </td>
        </tr>
      </table>
      <button className="next-button" onClick={handleNextPage}>
        다음 페이지
      </button>
    </div>
  );
};

export default Page44;
