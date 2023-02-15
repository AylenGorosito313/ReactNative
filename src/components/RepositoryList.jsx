import React from "react";
import { View, Text, FlatList,StyleSheet } from "react-native";
import repoPrueba from "../repoPrueba";
import RepositoryItem from "./RepositoryIte";
const RepositoryList = () => {
  return (
    <FlatList
      data={repoPrueba}
      ItemSeparatorComponent={(props) => {
       return (<View style={{height: 20}} />);
      }}
      renderItem={({ item: repo }) => (
        <View >
              <RepositoryItem {...repo}  />
        </View>
  
      )}
    />
  );
};



export default RepositoryList;
