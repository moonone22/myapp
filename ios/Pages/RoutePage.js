import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import CustomButton from '../components/CustomButton';
import Main from './Main';

const RoutePage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.title}>
        <Main navigation={navigation} />
      </View>
      <View style={styles.footer}>
        <CustomButton
          buttonColor={'#023e71'}
          title={'구글 길찾기'}
          onPress={() => navigation.navigate('RouteDetail')}
        />
        <CustomButton
          title={'구글 전체루트'}
          onPress={() => navigation.navigate('RouteTvDetail')}
        />
        <CustomButton
          title={'루트상세 등록'}
          onPress={() => navigation.navigate('RouteUpdate')}
        />
        <CustomButton
          title={'나만의 루트 등록'}
          onPress={() => navigation.navigate('MyRouteUpdate')}
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
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d6ca1a',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  TitleFontSize: {
    fontSize: 20,
  },
});

export default RoutePage;
