import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  items: {
    margin: 0,
    padding: 0,
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: '#ff0000',
    color: '#ffffff',
    borderWidth: 0,
    borderRadius: 4,
    padding: 8,
    fontSize: 14,
  },
  addButton: {
    backgroundColor: '#00ff00',
    color: '#ffffff',
    borderWidth: 0,
    borderRadius: 4,
    padding: 8,
    fontSize: 14,
    marginTop: 10,
  },
});

const Cart = () => {
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
    
    <View style={styles.cart}>
      <Text>Cart</Text>
      <Text>Shopping Cart</Text>
      <View style={styles.items}>
        {items.map((item, index) => (
          <View key={item.name} style={styles.item}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Button
              title="Remove"
              onPress={() => removeItem(index)}
              buttonStyle={styles.removeButton}
            />
          </View>
        ))}
      </View>
      <Button
        title="Add Item"
        onPress={addItem}
        buttonStyle={styles.addButton}
      />
    </View>
    

   
  );
};

export default Cart;
