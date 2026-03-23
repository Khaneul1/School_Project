import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  wrapper: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    textDecoration: 'none',
    textAlign: 'center',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  },
  hover: {
    backgroundColor: '#0056b3',
  },
};

const LinkBtn = (props) => {
  return (
    <Link
      to={props.link}
      style={styles.wrapper}
      onMouseEnter={(e) =>
        (e.target.style.backgroundColor = styles.hover.backgroundColor)
      }
      onMouseLeave={(e) =>
        (e.target.style.backgroundColor = styles.wrapper.backgroundColor)
      }
    >
      다음페이지
    </Link>
  );
};

export default LinkBtn;
