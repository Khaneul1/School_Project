import React from 'react';
import Title from './component/Title';
import DateWeather from './component/DateWeather';
import RememberingNutrients from './component/RememberingNutrients';
import FirstQuestionTable from './component/FirstQuestionTable';
import LinkBtn from './component/LinkBtn';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '600px',
    margin: '0 auto',
    marginTop: '30px',
  },
};

const FirstPage = () => {
  return (
    <div style={styles.wrapper}>
      <Title title="오늘의 날짜를 적고, 날씨에 동그라미하세요" />
      <DateWeather />
      <RememberingNutrients
        subtitle={<p>&nbsp;영양소 기억하기</p>}
        question={
          <>
            다음은 노인에게 결핍되기 쉬운{' '}
            <span style={{ color: 'red' }}>영양소 5가지</span>입니다.
            <br />
            소리 내어 읽어보세요.
          </>
        }
      />
      <FirstQuestionTable isRandom={false} />
      <LinkBtn link="/page2"></LinkBtn>
    </div>
  );
};

export default FirstPage;
