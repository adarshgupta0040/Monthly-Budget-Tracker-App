import { View, Text, Dimensions, TouchableOpacity, Alert, StyleSheet, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addBudgetEntry } from '../redux/Action';
import { Button, useTheme, TextInput, HelperText, Modal, Portal } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';

const BudgetEntry = ({ navigation }: any) => {

    const [name, setName] = useState('');
    const [plannedAmount, setPlannedAmount] = useState('');
    const [actualAmount, setActualAmount] = useState('');

    const [visible, setVisible] = React.useState<boolean>(false);
    const [itemNameError, setItemNameError] = useState<boolean>(false);
    const [plannedAmtError, setPlannedAmtError] = useState<boolean>(false);
    const [ActualAmtError, setActualAmtError] = useState<boolean>(false);

    const isfocused = useIsFocused();
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setItemNameError(false);
        setPlannedAmtError(false);
        setActualAmtError(false);
        resetFields();

    }, [isfocused]);

    const resetFields = () => {
        setName('');
        setPlannedAmount('');
        setActualAmount('');
    }

    const validateForm = () => {
        { !name ? setItemNameError(true) : setItemNameError(false) }

        { !plannedAmount ? setPlannedAmtError(true) : setPlannedAmtError(false) }

        { !actualAmount ? setActualAmtError(true) : setActualAmtError(false) }

        const regex = /^[a-zA-Z\s]*$/;
        if (!name.trim() || !regex.test(name)) {
            Alert.alert('Alert !!', 'Please enter a valid Item Name');
            return;
        }

        // plannedAmount field not a valid number
        if (!plannedAmount || isNaN(parseFloat(plannedAmount))) {
            Alert.alert('Alert !!', 'Please enter a valid Planned Amount');
            return;
        }

        // actualAmount field not a valid number
        if (!actualAmount || isNaN(parseFloat(actualAmount))) {
            Alert.alert('Alert !!', 'Please enter a valid Actual Amount');
            return;
        }

        if (!name || !plannedAmount || !actualAmount) {
            return false;
        } else {
            return true;
        }
    }

    const handlesubmit = () => {

        if (validateForm()) {
            console.log("Save Clicked");
            console.log(name, plannedAmount, actualAmount);

            const entry = {
                name,
                plannedAmount: parseFloat(plannedAmount),
                actualAmount: parseFloat(actualAmount),
            };

            dispatch(addBudgetEntry(entry));
            resetFields();
            showModal();
        }
        else {
            console.log("Check and Verify input field")
        }
    }

    const handleShowItems = () => {
        console.log("ShowItem Clicked");
        navigation.navigate('BudgetEntryListing',);

    }


    const theme = useTheme();

    return (

        <View style={styles.container}>

            <Text style={styles.titleText}> BUDGET ENTRY</Text>

            <TextInput
                mode="outlined"
                label="Item Name"
                placeholder="Item Name"
                value={name}
                onChangeText={newText => setName(newText)}
                style={styles.input}
            />

            {itemNameError ? <Text style={styles.errorText}>Item Name is required</Text> : null}

            <TextInput
                mode="outlined"
                label="Planned Amount"
                placeholder="Planned Amount"
                keyboardType='numeric'
                value={plannedAmount}
                onChangeText={newText => setPlannedAmount(newText)}
                style={styles.input}
            />

            {plannedAmtError ? <Text style={styles.errorText}>Planned Amount is required</Text> : null}

            <TextInput
                mode="outlined"
                label="Actual Amount"
                placeholder="Actual Amount"
                keyboardType='numeric'
                value={actualAmount}
                onChangeText={newText => setActualAmount(newText)}
                style={styles.input}
            />

            {ActualAmtError ? <Text style={styles.errorText}> Actual Amount is required </Text> : null}


            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button buttonColor={theme.colors.secondary} mode="contained-tonal" dark onPress={() => handlesubmit()}>
                        SUBMIT
                    </Button>
                </View>
                <View style={styles.button}>
                    <Button buttonColor={theme.colors.surface} mode="contained-tonal" dark onPress={() => handleShowItems()}>
                        SHOW ITEMS
                    </Button>
                </View>
            </View>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.ModalContainer}>
                    <Text style={styles.modalText}>Budget Recorded Successfully</Text>
                    <Button style={styles.modalButton} buttonColor={theme.colors.surface} mode="contained-tonal" dark onPress={hideModal}>
                        OK
                    </Button>
                </Modal>
            </Portal>

        </View>

    )
}

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#e0c3fc',
        paddingVertical: 30,

    },
    titleText:{ 
        fontSize: 20, 
        fontWeight: '600', 
        color: 'black' 
    },
    errorText: {
        color: 'red'
    },
    buttonContainer:{ 
        flex: 1, 
        flexDirection: 'row', 
        marginVertical: 30, 
        margin: 5 
    },
    button:{ 
        flex: 1, 
        alignItems: 'center' 
    },
    ModalContainer: {
        backgroundColor: '#7b2cbf',
        padding: 20,
        margin: 30,
        borderRadius: 30
    },
    modalText:{ 
        color: 'white', 
        fontWeight: '500', 
        textAlign: 'center' 
    },
    modalButton: { 
        width: 130, 
        marginLeft: 90, 
        marginTop: 20 
    },
    input: {
        width: width - 25,
        marginVertical: 15
    },

})

export default BudgetEntry