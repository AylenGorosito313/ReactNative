import React from "react";
import search from "../assets/Group.png";
import Constants from "expo-constants";
import RepositoryList from "./components/RepositoryList";
import { View, StyleSheet, SafeAreaView, TextInput , Image} from "react-native";
import StyleText from "./components/Style/StyleText";
const Main = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.Header}>
        <StyleText fontWeight="bold" fontSize="header">
          {" "}
          Agenda
        </StyleText>
      </View>
      <SafeAreaView>
        <View style={styles.ContainerInputImg}>
        <Image style={styles.image}  source={{uri:search}}/>
            <TextInput
          style={styles.input}
          placeholder="search contact"
          // onChangeText={onChangeText}
          // value={text}
        />
        </View>
      

        <RepositoryList />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
  },
  ContainerInputImg: {
    paddingTop:20,
   flexDirection:"row-reverse",
   alignItems:"center",
   justifyContent: "center"
  },
  Header: {
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    width:200,
    borderRadius:10,
    borderColor: "#d4d3cf",
    borderWidth: 1,
    padding: 10,
  },
  image: {
    width: 40,
    height: 40,
  },
});
export default Main;
