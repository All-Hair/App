import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  itemText: {
    fontSize: 16,
  },
});

const cart = () => {
  const [items, setItems] = React.useState([]);

  const addItem = () => {
    setItems([...items, { name: 'Item ' + (items.length + 1) }]);
  };

  const removeItem = index => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={item.name} style={styles.item}>
          <Text style={styles.itemText}>{item.name}</Text>
          <Button title="Remove" onPress={() => removeItem(index)} />
        </View>
      ))}
      <Button title="Add Item" onPress={addItem} />
    </View>
  );
};

export default cart;