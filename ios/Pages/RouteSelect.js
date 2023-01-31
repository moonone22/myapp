import React, {useContext, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import CountrySelectDropdown from 'react-native-searchable-country-dropdown';
import CountrySelector from '../components/CountrySelector';
import CustomButton from '../components/CustomButton';

const RouteSelect = ({navigation}) => {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>루트로고</Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.TitleFontSize}>국가를 선택해주세요</Text>
        <CountrySelector />
      </View>
      <View>
        <CountrySelectDropdown textColor={'#f3f3f3'} />
      </View>
      <View style={styles.content}>
        <Text style={styles.TitleFontSize}>도시를 선택해주세요</Text>
      </View>
      <View style={styles.footer}>
        <CustomButton
          style={{backgroundColor: '#1badb9', color: 'black', fontSize: 18}}
          title={'루트 검색'}
          onPress={() => navigation.navigate('RouteList')}
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
    display: 'flex',
    alignItems: 'center',
  },
  TitleFontSize: {
    fontSize: 20,
  },
});

export default RouteSelect;
