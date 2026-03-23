import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './src/screens/login/StartScreen';
import KakaoLoginScreen from './src/screens/login/KaKaoLoginScreen';
import CalendarView from './src/screens/Main/calendar/CalendarView';
import MonthCalendarView from './src/screens/Main/calendar/MonthCalendarView';
import NavBar from './src/components/nav/NavBar';
import Goto from './src/components/nav/Goto';
import UserMain from './src/screens/Main/UserMain';
import GroupMain from './src/screens/Main/GroupMain';
import GroupNoticeDetail from './src/screens/Group/GroupNoticeDetail';
import GroupAccountDetail from './src/screens/Group/GroupAccountDetail';
import GroupCommunityDetail from './src/screens/Group/GroupCommunityDetail';
import RecentTransaction from './src/screens/Group/account/RecentTransaction';
import ReceiptDetail from './src/screens/Group/account/ReceiptDetail';
import ReceiptList from './src/screens/Group/account/ReceiptList';
import ReceiptPhoto from './src/screens/Group/account/ReceiptPhoto';
import ManagerMainScreen from './src/screens/Manager/ManagerMain';
import CommunityPostDetail from './src/screens/Group/community/CommunityPostDetail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start'>
        <Stack.Screen name='Start' component={StartScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={KakaoLoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="CalendarView" component={CalendarView} />
        <Stack.Screen name="MonthCalendar" component={MonthCalendarView} options={{headerShown: false}} />
        <Stack.Screen name='NavBar' component={NavBar} options={{headerShown: false}}/>
        <Stack.Screen name='Goto' component={Goto} options={{headerShown: false}}/>
        <Stack.Screen name="UserMain" component={UserMain} options={{headerShown: false}}/>
        <Stack.Screen name='GroupMain' component={GroupMain} options={{headerShown: false}}/>
        <Stack.Screen name="GroupNoticeDetail" component={GroupNoticeDetail} options={{headerShown: false}}/>
        <Stack.Screen name='GroupAccountDetail' component={GroupAccountDetail} options={{headerShown: false}}/>
        <Stack.Screen name='GroupCommunityDetail' component={GroupCommunityDetail} options={{headerShown: false}}/>
        <Stack.Screen name="RecentTransaction" component={RecentTransaction} options={{headerShown: false}}/>
        <Stack.Screen name="ReceiptDetail" component={ReceiptDetail} options={{headerShown: false}}/>
        <Stack.Screen name='ReceiptList' component={ReceiptList} options={{headerShown: false}}/>
        <Stack.Screen name='PhotoShoot' component={ReceiptPhoto} options={{headerShown: false}}/>
        <Stack.Screen name='Manager' component={ManagerMainScreen} options={{headerShown: false}}/>
        <Stack.Screen name="CommunityPostDetail" component={CommunityPostDetail} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;