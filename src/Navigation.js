import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './screens/SearchScreen'
import ResultShowScreen from './screens/ResultShowScreen';
const Stack = createStackNavigator();

function Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Business Search" component={SearchScreen} />
            <Stack.Screen name="ResultsShowScreen" component={ResultShowScreen} options={{ title: 'Business' }} />
        </Stack.Navigator>
    );
}

export default Navigation;