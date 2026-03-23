import React, { useState, useEffect } from 'react';
import NextButton from './NextButton';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '45%',
    position: 'relative',
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: '100px',
    height: '100px',
    marginBottom: '15px',
  },
  dot: {
    position: 'absolute',
    width: '10px',
    height: '10px',
    backgroundColor: 'black',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  leftDot: {
    top: '40px',
    right: '-40px',
  },
  rightDot: {
    top: '40px',
    left: '-40px',
  },
  svg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
  },
};

const foodToNutrientMapping = {
  굴: '아연',
  간: '비타민B12',
  계란: '칼슘',
  우유: '비타민D',
  토마토: '비타민A',
};

const ProblemComponent = ({}) => {
  const [lines, setLines] = useState([]);
  const [startPoint, setStartPoint] = useState(null);

  const leftImages = [
    { id: '굴', image: '굴.png' },
    { id: '간', image: '간.png' },
    { id: '계란', image: '계란.png' },
    { id: '우유', image: '우유.png' },
    { id: '토마토', image: '토마토.png' },
  ];

  const rightImages = [
    { id: '아연', image: '아연.png' },
    { id: '비타민B12', image: '비타민B12.png' },
    { id: '칼슘', image: '칼슘.png' },
    { id: '비타민D', image: '비타민D.png' },
    { id: '비타민A', image: '비타민A.png' },
  ];

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const [shuffledLeftImages, setShuffledLeftImages] = useState([]);
  const [shuffledRightImages, setShuffledRightImages] = useState([]);

  useEffect(() => {
    const shuffledFoodImages = shuffleArray(leftImages);
    const shuffledNutrientImages = shuffleArray(rightImages);

    setShuffledLeftImages(shuffledFoodImages);
    setShuffledRightImages(shuffledNutrientImages);
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const startLine = (foodId, event) => {
    setStartPoint({
      foodId,
      x: event.clientX,
      y: event.clientY,
    });
  };

  const endLine = (nutrientId, event) => {
    if (startPoint) {
      const correctNutrientId = foodToNutrientMapping[startPoint.foodId];
      if (correctNutrientId === nutrientId) {
        const newLine = {
          startX: startPoint.x,
          startY: startPoint.y,
          endX: event.clientX,
          endY: event.clientY,
          startId: startPoint.foodId,
          endId: nutrientId,
        };
        setLines((prevLines) => [...prevLines, newLine]);
      }
      setStartPoint(null);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.column}>
        {shuffledLeftImages.map(({ id, image }, index) => (
          <div key={index} style={styles.imageWrapper}>
            <img src={image} alt={`Food Image ${id}`} style={styles.image} />
            <div
              style={{ ...styles.dot, ...styles.leftDot }}
              onClick={(e) => startLine(id, e)}
            ></div>
          </div>
        ))}
      </div>

      <div style={styles.column}>
        {shuffledRightImages.map(({ id, image }, index) => (
          <div key={index} style={styles.imageWrapper}>
            <img
              src={image}
              alt={`Nutrient Image ${id}`}
              style={styles.image}
            />
            <div
              style={{ ...styles.dot, ...styles.rightDot }}
              onClick={(e) => endLine(id, e)}
            ></div>
          </div>
        ))}
      </div>

      <svg style={styles.svg}>
        {lines.map((line, index) => (
          <line
            key={index}
            x1={line.startX - 18}
            y1={line.startY - 245}
            x2={line.endX - 18}
            y2={line.endY - 243}
            stroke="black"
            strokeWidth={2}
          />
        ))}
      </svg>

      <NextButton />
    </div>
  );
};

export default ProblemComponent;
