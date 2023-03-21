import { FlatList, View } from 'react-native';

import { DataContext } from '../store/data-context';

function renderExpenseItem(itemData) {
  return <ExpenseItem {...itemData.item} />;
}

function ExpensesList() {
    const  expensesCtx= useContext(DataContext);

  return (
    <View>
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}

    />
     </View>
  );
}

export default ExpensesList;