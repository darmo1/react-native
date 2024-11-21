import {
  StyleSheet,
  View,
  Text,
  Button,
  GestureResponderEvent,
  FlatList,
  ListRenderItem,
} from "react-native";

import { useState } from "react";
import { GoalItem } from "@/components/GoalItem";
import { GoalInput } from "@/components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  const [courseGoals, setCourseGoals] = useState<
    { text: string; id: string }[]
  >([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const addGoalHandler = (
    e: GestureResponderEvent,
    enteredGoalText: string
  ) => {
    setCourseGoals((prevState) => [
      ...prevState,
      {
        text: enteredGoalText,
        id: Math.random().toString(),
      },
    ]);
  };

  const deleteGoalHandler = (id: string) => {
    setCourseGoals((prevState) => {
      return prevState.filter((course) => course.id !== id);
    });
  };

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const renderItem: ListRenderItem<{ text: string; id: string }> = ({
    item,
  }) => <GoalItem itemData={item} deleteItem={deleteGoalHandler} />;

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        {modalIsVisible ? (
          <View>
            <GoalInput
              onAddGoal={addGoalHandler}
              visible={modalIsVisible}
              setModalIsVisible={setModalIsVisible}
            />
          </View>
        ) : null}
        <View>
          <Text>List of goals ...</Text>
          <FlatList
            data={courseGoals}
            renderItem={renderItem}
            alwaysBounceVertical={false}
            keyExtractor={(item) => `${item.id}`}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
