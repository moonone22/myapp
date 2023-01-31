import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {publicRoute} from '../routes';

const Stack = createStackNavigator();

const DefaultPage = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#29b6f6',
        },
      }}
    >
      {publicRoute.map(props => (
        <Stack.Screen key={props.name} {...props} />
      ))}

      {/* 해당스택에 들어갈 화면 요소를 넣어준다. */}
    </Stack.Navigator>
  );
};
export default DefaultPage;
