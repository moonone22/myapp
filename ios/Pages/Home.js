import React, {useContext} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CalendarView from '../components/CalendarView';
import CustomButton from '../components/CustomButton';
import SwiperPage from '../components/SwiperPage';
import {personContext} from '../LogContext';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>루트로고</Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.titleFontSize}>최고의 여행루트를 알고싶다면?</Text>
      </View>
      <View style={styles.footer}>
        <CustomButton
          style={{backgroundColor: '#1badb9', color: 'black', fontSize: 18}}
          title={'루트 찾기'}
          onPress={() => navigation.navigate('RouteSelect')}
          width={130}
        />
        <CustomButton
          style={{backgroundColor: '#1badb9', color: 'black', fontSize: 18}}
          title={'루트 둘러보기'}
          onPress={() => navigation.navigate('RouteList')}
          width={130}
        />
        <CustomButton
          style={{backgroundColor: '#1badb9', color: 'black', fontSize: 18}}
          title={'나만의 루트'}
          onPress={() => navigation.navigate('MyRouteList')}
          width={130}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    height: '9%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff9a9a',
  },
  title: {
    flex: 1,
    height: '18%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9aa9ff',
  },
  footer: {
    width: '100%',
    height: '30%',
    backgroundColor: '#1ad657',
    display: 'flex',
    alignItems: 'center',
  },
  titleFontSize: {
    fontSize: 20,
  },
});

export default Home;
