import React, {createContext, useContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DefaultPage from './ios/components/DefaultPage';
import PersonProvider from './ios/LogContext';

const Context = createContext();
export const useCountry = () => useContext(Context);

const App = () => {
  const [isCounty, setCountry] = useState('');
  const [CountryName, setCountryName] = useState('');
  const [days, setDays] = useState({});
  const [RouteList, setRouteList] = useState([]);
  const value = {
    isCounty,
    setCountry,
    CountryName,
    setCountryName,
    days,
    setDays,
    RouteList,
    setRouteList,
  };

  return (
    //네비게이션의 트리를 관리해주는 컴포넌트

    <NavigationContainer>
      <PersonProvider>
        <Context.Provider value={value}>
          <DefaultPage />
        </Context.Provider>
      </PersonProvider>
    </NavigationContainer>
  );
};

export default App;
