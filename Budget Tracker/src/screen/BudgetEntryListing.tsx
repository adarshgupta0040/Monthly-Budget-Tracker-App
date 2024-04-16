import { View, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { AnimatedFAB, Card, FAB, Text } from 'react-native-paper';
import {
  Platform,
  ScrollView,
} from 'react-native';


const BudgetEntryListing = ({ navigation }: any) => {

  const budgetEntries = useSelector((state: any) => (state.budget.budgetEntries));

  const isIOS = Platform.OS === 'ios';

  const onFabPress = () =>{
    console.log('Fab Plus Pressed'); 
    navigation.navigate('BudgetEntry')
  }


  return (

    <View style={styles.container}>

      <Text style={styles.title}>Budget Entry Listing</Text>

      <ScrollView>
        {budgetEntries.map((entry: any, index: any) => (
          <Card key={index} style={styles.cardContainer}>
            <Card.Content>
              <Text variant="headlineLarge" style={styles.cardText}>{entry.name}</Text>
              <Text variant="titleLarge" style={styles.cardText}>Planned Amount : ₹ {entry.plannedAmount}</Text>
              <Text variant="titleLarge" style={styles.cardText}>Actual Amount : ₹ {entry.actualAmount}</Text>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>

      <FAB
        icon={'plus'}
        label={''}
        onPress={() => { onFabPress() }}
        style={[styles.fabStyle]}
      />

    </View>

  )
}
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    margin: 20, 
  },
  cardContainer:{ 
    backgroundColor: '#48cae4', 
    marginBottom: 15 
  },
  cardText:{ 
    textAlign: 'center', 
  },
  fabStyle: {
    bottom: 15,
    right: 10,
    position: 'absolute',
    borderRadius: 50,
    backgroundColor: '#e0c3fc'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign:'center'
  },
});

export default BudgetEntryListing