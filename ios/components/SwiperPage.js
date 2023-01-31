import {Tab, TabView} from '@rneui/themed';
import React, {useState} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useCountry} from '../../App';

const SwiperPage = () => {
  const [index, setIndex] = useState(0);
  const {days, daysData} = useCountry();
  const asdf = Object.keys(days);
  const day = index + 1;

  return (
    <>
      <Text>{asdf && asdf[0]}</Text>
      <Text>~</Text>
      <Text>{asdf && asdf.slice(-1)}</Text>
      <Tab
        dense
        value={index}
        onChange={e => setIndex(e)}
        variant="primary"
        scrollable
      >
        {asdf &&
          asdf.map((i, key) => {
            return (
              <Tab.Item
                key={key + 'TebItem'}
                title={
                  <>
                    <Text>{key + 1}</Text>
                    <Text>{i}</Text>
                  </>
                }
                titleStyle={{fontSize: 12}}
              />
            );
          })}
      </Tab>

      <TabView
        disableTransition
        value={index}
        onChange={setIndex}
        animationType="spring"
      >
        {asdf &&
          asdf.map((i, key) => {
            return (
              <TabView.Item
                key={key + 'TabView'}
                style={{backgroundColor: 'red', width: '100%'}}
              >
                <ScrollView style={styles.scrollView}>
                  <View>
                    <Text style={styles.asd123f} h1>
                      {day}일차
                    </Text>
                    {days[i].name &&
                      days[i].name.map((i, key) => (
                        <Text key={key + 'days'} style={styles.gasdfgh}>
                          {i}
                        </Text>
                      ))}
                  </View>
                </ScrollView>
              </TabView.Item>
            );
          })}
      </TabView>
    </>
  );
};

let screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  asdf: {
    width: screenWidth,
  },
  asd123f: {
    width: screenWidth,
  },
  container: {
    flex: 1,
  },
  gasdfgh: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  text: {
    fontSize: 42,
  },
});
export default SwiperPage;
