import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, SafeAreaView, Alert, Platform, View} from "react-native";
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <View 
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}
      >
        <View style={{
            backgroundColor: "dodgerblue",
            width: 100,
            height: 100,
          }}
        />
        <View style={{
            backgroundColor: "gold",
            width: 100,
            height: 100,
          }}
        />
        <View style={{
            backgroundColor: "tomato",
            width: 100,
            height: 100,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
    // alignItems: "center"
  },
});
