import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//screens
import Home from './screens/Home';
import Search from './screens/Search';
import MyCart from './screens/MyCart';
import Account from './screens/Account';

//screen names
const HomeScreenName = "Home";
const SearchScreenName = "Search";
const MyCartScreenName = "MyCart";
const AccountScreenName = "Account";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return(
        <NavigationContainer>
            <Tab.Navigator initialRouteName={HomeScreenName}
            screenOptions={({route})=> ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === HomeScreenName) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === SearchScreenName) {
                        iconName = focused ? 'search' : 'search-outline';
                    } else if (route.name === MyCartScreenName) {
                        iconName = focused ? 'cart' : 'cart-outline';
                    } else if (route.name === AccountScreenName) {
                        iconName = focused ? 'person' : 'person-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                },
            })}>
            <Tab.Screen name={HomeScreenName} component={Home}></Tab.Screen>
            <Tab.Screen name={SearchScreenName} component={Search} />
            <Tab.Screen name={MyCartScreenName} component={MyCart} />
            <Tab.Screen name={AccountScreenName} component={Account} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}
