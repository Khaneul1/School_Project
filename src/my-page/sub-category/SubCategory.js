import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import './SubCategory.css';

//나의 찜 / 나의 복용 이력 / q&a
//각각 해당 페이지로 넘어가도록...
const SubCategory = () => {
  return (
    <div className="sub-category-section">
      <div className="sub-category-box">
        <p>나의 찜</p>
        <FavoriteIcon className="sub-category-icon" />
      </div>
      <div className="sub-category-box">
        <p>복용 이력</p>
        <LocalHospitalIcon className="sub-category-icon" />
      </div>
      <div className="sub-category-box">
        <p>Q&A</p>
        <QuestionMarkIcon className="sub-category-icon" />
      </div>
    </div>
  );
};

export default SubCategory;
