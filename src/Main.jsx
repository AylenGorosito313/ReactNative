import React from "react";
import Constants from "expo-constants";
import RepositoryList from "./components/RepositoryList";
import { View } from "react-native";

const Main = () => {
  return (
    <View style={{marginTop:Constants.statusBarHeight, flexGrow: 1 }}>
      <RepositoryList />
    </View>
  );
};

export default Main;
