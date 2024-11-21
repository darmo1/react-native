import { useState } from "react";
import {
  Button,
  GestureResponderEvent,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

type GoalInputProps = {
  onAddGoal: (e: GestureResponderEvent, goal: string) => void;
  visible: boolean;
  setModalIsVisible: (isVisible: boolean) => void;
};

export const GoalInput = ({
  onAddGoal,
  visible,
  setModalIsVisible,
}: GoalInputProps) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image  source={require('../assets/images/goal.png')} style={styles.image}/>
        <TextInput
          placeholder="Add Goal!!"
          onChangeText={goalInputHandler}
          style={styles.textInput}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Tap me"
              onPress={(e) => {
                onAddGoal(e, enteredGoalText);
                setEnteredGoalText("");
                setModalIsVisible(false)
              }}
              color='#b180f0'
            />
          </View>
          <View style={styles.button}>
            <Button title={"cancel"} onPress={() => setModalIsVisible(false)} color='#f31282'/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
   // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: '#3116b6',
    color: 'white'
  },
  image:{
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    width: "70%",
    marginRight: 8,
    padding: 8,
    backgroundColor: '#eee',
    borderRadius: 6,
    paddingHorizontal:16
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
});
