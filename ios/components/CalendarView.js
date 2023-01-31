import React from 'react';
import {Calendar} from 'react-native-calendars';
import {StyleSheet} from 'react-native';
import {useCountry} from '../../App';

function CalendarView() {
  const {days, setDays} = useCountry();
  console.log(days);
  return (
    <>
      <Calendar
        style={styles.calendar}
        markedDates={days}
        theme={{
          selectedDayBackgroundColor: '#009688',
          arrowColor: '#009688',
          dotColor: '#009688',
          todayTextColor: '#009688',
        }}
        onDayPress={day => {
          if (days[day.dateString]) {
            delete days[day.dateString];
            setDays({
              ...days,
            });
          } else {
            setDays({
              ...days,
              [day.dateString]: {selected: true, marked: true},
            });
          }
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});

export default CalendarView;
