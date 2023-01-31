import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useCountry} from '../../App';
import {ScrollView} from 'react-native';
import TodoComponent from '../components/TodoComponent';

const Main = ({navigation}) => {
  const [todosContent, setTodoContent] = useState([]);

  const {days} = useCountry();

  const asdf = Object.keys(days);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.daybox}>
        <Icon
          name="calendar"
          size={30}
          color="white"
          onPress={() => navigation.navigate('CalenadarView')}
        />
        <Text>{asdf && asdf[0]}</Text>
        <Text>~</Text>
        <Text>{asdf && asdf.slice(-1)}</Text>
      </View>

      <ScrollView>
        {Object.keys(days).map((i, key) => (
          <TodoComponent
            key={key}
            daysInfo={days}
            i={i}
            setTodoContent={setTodoContent}
            todosContent={todosContent}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  scroll: {
    flex: 1,
  },
  daybox: {
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },
  card: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
});

export default Main;
