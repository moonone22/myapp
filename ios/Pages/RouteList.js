import {SpeedDial} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useCountry} from '../../App';

const RouteList = ({navigation}) => {
  const {RouteList, setRouteList, CountryName} = useCountry();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.TitleFontSize}>{CountryName}</Text>
        <Text>검색한 도시</Text>
        <Text style={styles.TitleFontSize}>오사카,교토</Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.TitleFontSize}>루트 목록</Text>
        {RouteList.map((i, key) => (
          <React.Fragment key={key}>
            <Text>{i.daysNum}일</Text>
            <Text>{i.title}</Text>
          </React.Fragment>
        ))}
      </View>
      <View style={styles.footer}>
        <SpeedDial
          isOpen={open}
          icon={{name: 'edit', color: '#fff'}}
          openIcon={{name: 'close', color: '#fff'}}
          onOpen={() => setOpen(!open)}
          onClose={() => setOpen(!open)}
        >
          <SpeedDial.Action
            icon={{name: 'add', color: '#fff'}}
            title={'루트 상세'}
            onPress={() => navigation.navigate('RouteDetail')}
          />
          <SpeedDial.Action
            icon={{name: 'delete', color: '#fff'}}
            title={'회차정보'}
            onPress={() => navigation.navigate('RouteTvDetail')}
          />
          <SpeedDial.Action
            icon={{name: 'delete', color: '#fff'}}
            title={'루트화면'}
            onPress={() => navigation.navigate('RoutePage')}
          />
          <SpeedDial.Action
            icon={{name: 'delete', color: '#fff'}}
            title={'나만의 루트 작성'}
            onPress={() => navigation.navigate('MyRouteUpdate')}
          />
        </SpeedDial>
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
    marginBottom: 5,
  },
});

export default RouteList;
