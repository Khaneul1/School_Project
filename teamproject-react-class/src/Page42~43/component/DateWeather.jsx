import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    Color: 'black',
  },
  icon: {
    fontSize: '24px',
    cursor: 'pointer',
    color: 'gray',
  },
  activeIcon: {
    fontSize: '24px',
    cursor: 'pointer',
    color: 'red',
    fontWeight: 'bold',
  },
};

const DateWeather = (props) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [activeIcon, setActiveIcon] = useState(null);
  const highlightIcon = (iconName) => {
    setActiveIcon(iconName);
  };
  return (
    <div style={styles.wrapper}>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat={'yyyy년MM월dd일'}
        placeholderText="년     월      일  "
        customInput={
          <input
            style={{ fontSize: '16px', textAlign: 'right', border: '0px' }}
          />
        }
      />
      <p>날씨</p>
      <span
        className="material-symbols-outlined"
        style={activeIcon === 'clear_day' ? styles.activeIcon : styles.icon}
        onClick={() => highlightIcon('clear_day')}
      >
        clear_day
      </span>
      <span
        className="material-symbols-outlined"
        style={
          activeIcon === 'partly_cloudy_day' ? styles.activeIcon : styles.icon
        }
        onClick={() => highlightIcon('partly_cloudy_day')}
      >
        partly_cloudy_day
      </span>
      <span
        className="material-symbols-outlined"
        style={activeIcon === 'beach_access' ? styles.activeIcon : styles.icon}
        onClick={() => highlightIcon('beach_access')}
      >
        beach_access
      </span>
      <span
        className="material-symbols-outlined"
        style={activeIcon === 'cloud' ? styles.activeIcon : styles.icon}
        onClick={() => highlightIcon('cloud')}
      >
        cloud
      </span>
    </div>
  );
};

export default DateWeather;
