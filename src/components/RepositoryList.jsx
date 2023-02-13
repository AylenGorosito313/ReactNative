import React from "react";
import { View, Text, FlatList } from "react-native";
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
      <RepositoryItem {...repo}  />
      )}
    />
  );
};

export default RepositoryList;
