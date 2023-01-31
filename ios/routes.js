import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Main from './Pages/Main';
import Home from './Pages/Home';
import RouteSelect from './Pages/RouteSelect';
import RouteList from './Pages/RouteList';
import RouteDetail from './Pages/RouteDetail';
import RouteTvDetail from './Pages/RouteTvDetail';
import RoutePage from './Pages/RoutePage';
import MyRouteUpdate from './Pages/MyRouteUpdate';
import RouteUpdate from './Pages/RouteUpdate';
import MyRouteList from './Pages/MyRouteList';
import CalenadarView from './components/CalendarView';

const publicRoute = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'RouteSelect',
    component: RouteSelect,
  },
  {
    name: 'RouteList',
    component: RouteList,
  },
  {
    name: 'RouteDetail',
    component: RouteDetail,
  },
  {
    name: 'RouteTvDetail',
    component: RouteTvDetail,
  },
  {
    name: 'RoutePage',
    component: RoutePage,
  },
  {
    name: 'MyRouteUpdate',
    component: MyRouteUpdate,
  },
  {
    name: 'RouteUpdate',
    component: RouteUpdate,
  },
  {
    name: 'MyRouteList',
    component: MyRouteList,
  },
  {
    name: 'CalenadarView',
    component: CalenadarView,
  },
  {
    name: 'Details',
    component: Main,
    options: {
      headerBackVisible: false,
      headerLeft: ({onPress}) => (
        <TouchableOpacity onPress={onPress}>
          <Text>Left</Text>
        </TouchableOpacity>
      ),
      headerTitle: ({children}) => (
        <View>
          <Text>{children}</Text>
        </View>
      ),
      headerRight: () => (
        <View>
          <Text>Right</Text>
        </View>
      ),
    },
  },
];

export {publicRoute};
