import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import CustomButton from '../components/CustomButton';
import SwiperPage from '../components/SwiperPage';

const RouteDetail = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomButton
          buttonColor={'#023e71'}
          title={'루트 화면'}
          onPress={() => navigation.navigate('RoutePage')}
        />
      </View>
      <View style={styles.content}>
        <SwiperPage />
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
    width: '100%',
    height: '18%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9aa9ff',
  },
  content: {
    flex: 1,
  },
});

export default RouteDetail;
