import React from 'react';
import Plant from './image/plant.png';
const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  items: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6FED2',
    fontSize: '10px',
    width: '100px',
    height: '20px',
    borderRadius: '10px',
  },
  image: {
    width: '20px',
    height: '20px',
  },
  question: {
    paddingLeft: '30px',
  },
  pTag: {
    marginTop: '5px',
    lineHeight: '23px',
  },
};
const RememberingNutrients = (props) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.items}>
        <img src={Plant} style={styles.image}></img>
        <p>{props.subtitle}</p>
      </div>
      <div style={styles.question}>
        <h4 style={styles.pTag}>{props.question}</h4>
      </div>
    </div>
  );
};

export default RememberingNutrients;
