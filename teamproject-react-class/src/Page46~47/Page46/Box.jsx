import React, { useState, useEffect } from 'react';
import './Box.css';
import NextButton from './NextButton';

const essentialNutrientsForElderly = [
  '비타민 D',
  '칼슘',
  '비타민 B12',
  '오메가-3',
  '마그네슘',
  '단백질',
  '비타민 C',
  '식이섬유',
  '엽산',
  '칼륨',
  '철분',
  '아연',
];

const allNutrients = [
  '비타민 A',
  '비타민 E',
  '비타민 K',
  '망간',
  '구리',
  '세레늄',
  '크롬',
  '요오드',
  '코엔자임 Q10',
  '리코펜',
  '이소플라본',
  '폴리페놀',
  '아르기닌',
  '글루타민',
  '비타민 B6',
  '비타민 B1',
  '비타민 B2',
  '비타민 B5',
  '비타민 B7',
  '비타민 B9',
  '비타민 H',
  '플라보노이드',
  '셀레늄',
  '코르티솔',
  '콜레스테롤',
  '프로바이오틱스',
  '엘라그산',
  '디클로로에시트산',
  '타우린',
];

function Box() {
  const [nutrients, setNutrients] = useState([]);
  const [selectedNutrients, setSelectedNutrients] = useState([]);

  useEffect(() => {
    const getRandomNutrients = () => {
      const randomCount = Math.floor(Math.random() * 12) + 1;
      const selectedEssential = essentialNutrientsForElderly
        .sort(() => Math.random() - 0.5)
        .slice(0, randomCount);

      const remainingNutrients = allNutrients
        .filter((nutrient) => !selectedEssential.includes(nutrient))
        .sort(() => Math.random() - 0.5)
        .slice(0, 12 - randomCount);

      return [...selectedEssential, ...remainingNutrients].sort(
        () => Math.random() - 0.5
      );
    };
    setNutrients(getRandomNutrients());
  }, []);

  const handleClick = (nutrient) => {
    if (
      essentialNutrientsForElderly.includes(nutrient) &&
      !selectedNutrients.includes(nutrient)
    ) {
      setSelectedNutrients((prevSelected) => [...prevSelected, nutrient]);
    }
  };

  return (
    <div className="nutrient-box">
      <div className="grid">
        {nutrients.map((nutrient, index) => (
          <div
            key={index}
            className={`nutrient-item ${
              selectedNutrients.includes(nutrient) ? 'selected' : ''
            }`}
            onClick={() => handleClick(nutrient)}
          >
            {nutrient}
          </div>
        ))}
      </div>

      <NextButton />
    </div>
  );
}

export default Box;
