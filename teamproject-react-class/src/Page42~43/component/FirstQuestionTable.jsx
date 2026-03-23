import React, { useState, useEffect } from 'react';
import './FirstQuestionTable.css';
import Remember from './image/remember.png';
import Exam from './Exam';
import Milk from './image/milk.png';
import Tomato from './image/tomato.png';
import Egg from './image/egg.png';
import Cow from './image/cow.png';
import Oyster from './image/oyster.png';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '16px',
    padding: '16px',
  },
  table: {
    cursor: 'pointer',
    display: 'inline-block',
    textAlign: 'center',
    border: '2px solid black',
    borderCollapse: 'collapse',
    borderRadius: '10px',
    overflow: 'hidden',
    marginBottom: '20px',
  },
  img: {
    width: '150px',
    height: '70px',
    objectFit: 'cover',
  },
  block: {
    cursor: 'pointer',
    pointerEvents: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '100%',
    whiteSpace: 'pre-line',
    transform: 'scale(1)',
    transition: 'transform 0.3s ease-in-out',
    paddingLeft: '11px',
    paddingTop: '5px',
  },
  scaling: {
    display: 'inline-block',
    transition: 'transform 0.3s ease-out',
  },
  td: {
    width: '130px',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid silver',
  },
  th: {
    width: '100px',
    height: '16px',
    border: '1px solid silver',
  },
  tr: {
    width: '100px',
  },
};

const VitaminInfo = [
  {
    food: Milk,
    nutrient: '칼슘',
    effect: '골다공증 예방',
    recommend: '우유\n요구르트\n치즈',
  },
  {
    food: Tomato,
    nutrient: '비타민 A',
    effect: '시력보호',
    recommend: '당근\n고구마\n토마토',
  },
  {
    food: Egg,
    nutrient: '비타민 D',
    effect: '골다공증,\n암 예방',
    recommend: '계란노른자\n햇빛노출\n등푸른생선',
  },
  {
    food: Cow,
    nutrient: '비타민\nB12',
    effect: '빈혈 예방',
    recommend: '소 간\n조개\n생선',
  },
  {
    food: Oyster,
    nutrient: '아연',
    effect: '면역력 강화',
    recommend: '굴\n꽃게\n소고기',
  },
];

const CreateRandomKey = () => {
  const columnKeys = ['food', 'nutrient', 'effect', 'recommend'];
  const randomColumn = Math.floor(Math.random() * (columnKeys.length - 1)) + 1;
  const randomColumnKey = columnKeys[randomColumn];
  return randomColumnKey;
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

const FirstQuestionTable = ({ isRandom }) => {
  const [updatedData, setUpdatedData] = useState(VitaminInfo);
  const [emptyValue, setEmptyValue] = useState([]);

  useEffect(() => {
    if (isRandom) {
      const selectRandomKey = CreateRandomKey();
      const tempEmptyValue = [];

      const newData = VitaminInfo.map((item) => {
        const currentValue = item[selectRandomKey];
        tempEmptyValue.push(currentValue);
        return {
          ...item,
          [selectRandomKey]: '',
        };
      });
      setEmptyValue(shuffleArray(tempEmptyValue));
      setUpdatedData(newData);
    } else {
      setUpdatedData(VitaminInfo);
    }
  }, [isRandom]);

  let firstClickedValue = null;
  let firstClickedTarget = null;

  const handleClick = (e, index, column) => {
    const clickedValue = e.target.textContent;
    const targetElement = e.target;
    const clickedTagName = e.target.tagName;

    if (firstClickedValue === null && clickedTagName === 'SPAN') {
      firstClickedValue = clickedValue;
      firstClickedTarget = targetElement;
    } else {
      if (
        (firstClickedValue !== null && clickedTagName !== 'SPAN') ||
        targetElement.style.backgroudColor === '#FFFFFA'
      ) {
        targetElement.style.backgroudColor = '#FFFFFA';
        const newData = [...updatedData];
        newData[index][column] = firstClickedValue;
        setUpdatedData(newData);

        firstClickedValue = null;
        firstClickedTarget = null;
      }
    }
  };

  const handleScaleUp = (e) => {
    e.target.style.transform = 'scale(1.01)';
  };

  const handleScaleDown = (e) => {
    e.target.style.transform = 'scale(1)';
  };

  const checkCorrect = () => {
    const isCorrects =
      JSON.stringify(VitaminInfo) === JSON.stringify(updatedData);

    if (isCorrects) {
      alert('정답입니다');
    } else {
      alert('오답입니다');
    }
  };

  if (isRandom) {
    return (
      <div style={styles.wrapper}>
        <Exam
          {...emptyValue.reduce((props, item, index) => {
            const key = `base${index + 1}`;
            props[key] = (
              <td style={{ ...styles.td, height: '91px' }}>
                <span
                  style={styles.block}
                  onClick={handleClick}
                  onMouseEnter={handleScaleUp}
                  onMouseLeave={handleScaleDown}
                  className="hoverEffect"
                >
                  {item}
                </span>
              </td>
            );
            return props;
          }, {})}
        />

        <table style={styles.table}>
          <thead>
            <tr style={styles.tr}>
              <th style={{ ...styles.th, width: '150px' }}>식품</th>
              <th style={styles.th}>영양소</th>
              <th style={styles.th}>효과</th>
              <th style={styles.th}>권장</th>
            </tr>
          </thead>
          <tbody>
            {updatedData.map((item, index) => (
              <tr key={index} style={styles.tr}>
                <td>
                  <img
                    src={item.food}
                    style={{ ...styles.td, width: '150px' }}
                  />
                </td>
                <td
                  onClick={(e) => handleClick(e, index, 'nutrient')}
                  style={styles.td}
                >
                  {item.nutrient === '' ? '' : item.nutrient}
                </td>
                <td
                  style={{ ...styles.td, whiteSpace: 'pre-line' }}
                  onClick={(e) => handleClick(e, index, 'effect')}
                >
                  {item.effect === '' ? '' : item.effect}
                </td>
                <td
                  style={{ ...styles.td, whiteSpace: 'pre-line' }}
                  onClick={(e) => handleClick(e, index, 'recommend')}
                >
                  {item.recommend === '' ? '' : item.recommend}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <img src={Remember} style={{ height: '30px' }}></img>
          <button onClick={checkCorrect}>정답 확인</button>
        </div>
      </div>
    );
  } else {
    return (
      <div style={styles.wrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{ ...styles.th, width: '150px' }}>식품</th>
              <th style={styles.th}>영양소</th>
              <th style={styles.th}>효과</th>
              <th style={styles.th}>권장</th>
            </tr>
          </thead>
          <tbody>
            {updatedData.map((item, index) => (
              <tr key={index}>
                <td style={styles.td}>
                  <img
                    src={item.food}
                    alt={`food-${index}`}
                    style={styles.img}
                  />
                </td>
                <td style={styles.td}>{item.nutrient}</td>
                <td style={{ ...styles.td, whiteSpace: 'pre-line' }}>
                  {item.effect}
                </td>
                <td style={{ ...styles.td, whiteSpace: 'pre-line' }}>
                  {item.recommend}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ display: 'inline' }}>
          <img
            src={Remember}
            style={{ height: '30px', float: 'left', marginRight: '400px' }}
          />
        </div>
      </div>
    );
  }
};

export default FirstQuestionTable;
