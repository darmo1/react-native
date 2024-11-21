import { Pressable, StyleSheet, Text, View } from "react-native";

export function GoalItem({
  itemData,
  deleteItem,
}: {
  itemData: {
    text: string;
    id: string;
  };
  deleteItem: (id: string) => void;
}) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => deleteItem(itemData.id)}
        //onPress={deleteItem.bind(this, itemData.id)}
        android_ripple={{ color: "#FF0000" }}
        //for ios style object receive a function
        style={( pressed ) => {
          pressed && styles.pressedItem
        } }
      >
        <Text key={itemData.id} style={styles.goalText}>
          {itemData.text}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
  pressedItem: {
    opacity: 0.5
  }
});
