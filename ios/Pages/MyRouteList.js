import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CustomButton from '../components/CustomButton';

const MyRouteList = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>나만의 루트 목록</Text>
      </View>
      <View style={styles.title}>
        <Text>나만의 루트 목록</Text>
      </View>
      <View style={styles.content}>
        <Text>나만의 루트 목록</Text>
      </View>
      <View style={styles.footer}>
        <CustomButton
          buttonColor={'#023e71'}
          title={'루트 찾기'}
          onPress={() => navigation.navigate('RouteSelect')}
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
    height: '18%',
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
});

export default MyRouteList;
