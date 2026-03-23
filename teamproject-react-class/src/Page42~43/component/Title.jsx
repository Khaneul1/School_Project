import React from 'react';
import Plant from './image/plant.png';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: '15px',
    gap: '2px',
  },
  image: {
    width: '20px',
    height: '20px',
  },
  h4Tag: {
    marginBottom: '17px',
  },
};

const Title = (props) => {
  return (
    <div style={styles.wrapper}>
      <img src={Plant} style={styles.image}></img>
      <h4 style={styles.h4Tag}>{props.title}</h4>
    </div>
  );
};

export default Title;
