import React from 'react';

const Plant = `${process.env.PUBLIC_URL}/plant.png`;

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: '20px',
  },
  image: {
    width: '200px',
    height: '50px',
    marginBottom: '10px',
    marginLeft: '-50px',
  },
  smallImage: {
    position: 'absolute',
    top: '10px',
    right: '380px',
    width: '250px',
    height: '50px',
  },
  title: {
    fontSize: '25px',
    fontWeight: 'lighter',
  },
  nutrient: {
    color: 'red',
  },
};

const Page46Title = (props) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.titleWrapper}>
        <img src={Plant} style={styles.image} alt="Plant" />
        <h1 style={styles.title}>
          앞서 기억해 둔 노인에게 결핍되기 쉬운{' '}
          <span style={styles.nutrient}>영양소</span>를 찾아 동그라미
          <br />
          하세요.
        </h1>
      </div>
    </div>
  );
};

export default Page46Title;
