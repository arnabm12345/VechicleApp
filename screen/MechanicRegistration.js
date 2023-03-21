import { useContext, useLayoutEffect } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { StoreMechanicData } from '../util/http';
//import MechanicRegistrationForm from '../Components/MangeMechanic/MechanicRegistrationForm';
//import Button from '../components/ui/Button';
//import IconButton from '../Components/ui/IconButton';
import MechanicRegistrationForm from '../Components/MangeMechanic/MechanicRegistrationForm';
import { DataContext } from '../store/data-context';
import Colors from '../constants/color';

function ManageData() {
    const expensesCtx = useContext(DataContext); 
    function confirmHandler(mechanicsData) {
        expensesCtx.addData(mechanicsData); 
        StoreMechanicData(mechanicsData);
        console.log(expensesCtx.data);
    }
  
    return (
      <View style={styles.container}>
        <MechanicRegistrationForm
          submitButtonLabel= 'Submit'
          onSubmit={confirmHandler}
        />
      </View>
    );
  }
  
  export default ManageData;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: Colors.primary800,
    },
    deleteContainer: {
      marginTop: 16,
      paddingTop: 8,
      borderTopWidth: 2,
      borderTopColor: Colors.primary200,
      alignItems: 'center',
    },
  });
  