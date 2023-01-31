import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useCountry} from '../../App';
import CustomButton from '../components/CustomButton';
import SwiperPage from '../components/SwiperPage';

const RouteUpdate = ({navigation}) => {
  const {RouteList, setRouteList, days} = useCountry();
  const [title, setTitle] = useState('');
  const daysNum = Object.keys(days).length;
  const RouteListNew = () => {
    setRouteList([...RouteList, {title: title, daysNum: daysNum}]);
    navigation.navigate('RouteList');
  };

  const changeInput = text => {
    setTitle(text);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>루트상세 등록</Text>
        <TextInput
          placeholder="제목을 작성해주세요"
          style={styles.input}
          placeholderTextColor={'#999'}
          value={title}
          onChangeText={changeInput}
        ></TextInput>
      </View>
      <View style={styles.content}>
        <SwiperPage />
      </View>
      <View style={styles.footer}>
        <CustomButton
          title={'루트 찾기'}
          onPress={() => navigation.navigate('RouteSelect')}
        />
        <CustomButton title={'루트리스트 생성'} onPress={RouteListNew} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    padding: 10,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 16,
    marginLeft: 20,
  },
  header: {
    width: '100%',
    height: '9%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: '100%',
    height: '18%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  footer: {
    width: '100%',
    height: '20%',
  },
});

export default RouteUpdate;
