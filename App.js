import SettingSwitch from "./components/SettingSwitch";
import List from "./components/List";

import { View, StyleSheet, Button } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <List/>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },

});

export default App;
