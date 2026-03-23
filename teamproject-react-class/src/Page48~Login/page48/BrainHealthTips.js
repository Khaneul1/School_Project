import React from 'react';
import './BrainHealthTips.css';

const brainHealthTips = [
  {
    title: '대뇌활동을 열심히 합시다',
    description:
      '독서나 퍼즐 등과 같은 두뇌활동은 뇌를 자극하여 뇌의 구조와 기능에 좋은 영향을 미칩니다.',
  },
  {
    title: '규칙적인 운동이 중요합니다',
    description:
      '규칙적인 운동은 뇌 건강에 중요한 영향을 미치며 기억력과 집중력을 향상시킵니다.',
  },
  {
    title: '충분한 수면을 취하세요',
    description: '충분한 수면은 뇌의 재충전과 기억력 향상에 필수적입니다.',
  },
  {
    title: '건강한 식습관을 유지합시다',
    description:
      '뇌에 좋은 음식을 섭취하는 것은 뇌 기능에 중요한 영향을 미칩니다.',
  },
];

const randomTip =
  brainHealthTips[Math.floor(Math.random() * brainHealthTips.length)];

const BrainHealthTips = () => {
  return (
    <div className="brain-health-tips">
      <div className="brain-health-container">
        <div className="category-title">뇌 건강을 위한 생활 습관</div>
        <div className="subsection">
          <h4>{randomTip.title}</h4>
          <p>{randomTip.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BrainHealthTips;
