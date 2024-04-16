import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BudgetEntry from './screen/BudgetEntry';
import BudgetEntryListing from './screen/BudgetEntryListing';

const Stack = createNativeStackNavigator();
const Main = () => {

    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='BudgetEntry' >
            <Stack.Screen
                name="BudgetEntry"
                component={BudgetEntry}
                options={{ title: 'Home 📈', headerTitleAlign: 'left', headerStyle: {
                    backgroundColor: '#c77dff',
                  },}}
            />

            <Stack.Screen
                name="BudgetEntryListing"
                component={BudgetEntryListing}
                options={{ title: 'Budget List', headerTitleAlign: 'left', headerStyle: {
                    backgroundColor: '#c77dff', 
                  },
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Main