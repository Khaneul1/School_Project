import React from 'react';
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

const SecondPage = () => {
  return (
    <div style={styles.wrapper}>
      <RememberingNutrients
        subtitle={<p>&nbsp;영양소 기억하기</p>}
        question={
          <>
            앞서 기억해 둔 노인에게 결핍되기 쉬운{' '}
            <span style={{ color: 'red' }}>영양소</span>를 {'<보기>'}에서 찾아
            빈칸에 적어보세요
          </>
        }
      />
      <FirstQuestionTable isRandom={true} />
      <LinkBtn link="/page44"></LinkBtn>
    </div>
  );
};

export default SecondPage;
