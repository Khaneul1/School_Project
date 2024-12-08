import React, { useState } from 'react';
import MedicineCalender from './medicine-calendar/MedicineCalendar';

//달력 nav bar처럼 나타낼 것
//내복약 / 영양제 복용 진행 상황 -> progress bar로 나타낼 것
//사용자가 약 등록/추가 페이지에서 설정한 정보 불러와서 progress bar 밑에 다음 먹어야 할 복용약 및 시간대 렌더링
//체중 및 운동 시간 border
const CheckCurrentProgress = () => {
  //약 데이터.. 우선 초기값 설정
  const [medicineData, setMedicineData] = useState({
    '2024-12-08': [
      { name: '감기약', time: '16:00', progress: 70 },
      { name: '비타민C', time: '16:30', progress: 30 },
    ],
    '2024-12-09': [
      { name: '해열제', time: '08:00', progress: 50 },
      { name: '오메가3', time: '12:00', progress: 20 },
    ],
  });

  //선택된 날짜
  const [selectedDate, setSelectedDate] = useState(
    new Date().toLocaleDateString('ko-KR')
  );

  //날짜 선택시 선택된 날짜 업데이트
  const handleDateSelect = (date) => {
    const dateString = date.toLocaleDateString('ko-KR');
    setSelectedDate(dateString);
  };

  return (
    <div>
      <h3>복약 진행 상황</h3>
      <MedicineCalender onDateSelect={handleDateSelect} />
      <h4>{selectedDate} 약 리스트</h4>
      <ul>
        {medicineData[selectedDate] && medicineData[selectedDate].length > 0 ? (
          medicineData[selectedDate].map((medicine, index) => (
            <li key={index}>
              {medicine.name} ({medicine.time}) - {medicine.progress}% 완료
            </li>
          ))
        ) : (
          <li>선택된 날짜에 복용할 약이 없습니다</li>
        )}
      </ul>
    </div>
  );
};

export default CheckCurrentProgress;
