import React from 'react';

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  table: {
    display: 'inline-block',
    textAlign: 'center',
    border: '2px solid black',
    borderCollapse: 'collapse',
    borderRadius: '10px',
    width: '555px',
    height: '122px',
    overflow: 'hidden',
  },
};
const Exam = (props) => {
  return (
    <div style={styles.wrapper}>
      <table style={styles.table} className="ExTable">
        <tr>
          <th colspan="5" style={{ width: '550px', height: '16px' }}>
            {'<보기>'}
          </th>
        </tr>
        <tr>
          {props.base1}
          {props.base2}
          {props.base3}
          {props.base4}
          {props.base5}
        </tr>
      </table>
    </div>
  );
};

export default Exam;
