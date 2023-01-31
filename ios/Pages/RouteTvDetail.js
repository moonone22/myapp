import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../components/CustomButton';

const RouteTvDetail = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>회차정보</Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.TitleFontSize}>루트 목록</Text>
      </View>
      <View style={styles.footer}>
        <CustomButton
          buttonColor={'#023e71'}
          title={'루트리뷰 상세'}
          onPress={() => navigation.navigate('RouteSelect')}
        />
        <CustomButton
          title={'회차정보'}
          onPress={() => navigation.navigate('Details')}
        />
        <CustomButton
          title={'루트화면'}
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9aa9ff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d6ca1a',
  },
  footer: {
    width: '100%',
    height: '20%',
    backgroundColor: '#1ad657',
  },
  TitleFontSize: {
    fontSize: 20,
  },
});

export default RouteTvDetail;
