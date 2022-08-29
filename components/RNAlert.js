import { Alert } from "react-native";

export function WrongAlert(){
    Alert.alert(
      "Wrong answer",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    )
}