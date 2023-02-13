import React from "react";
import {View, StyleSheet} from "react-native";
import StyleText from "./Style/StyleText.jsx";

// ColorPrimary,
// fontSize,
// fontWeight,

const RepositoryItem = (repo) => (
  <View>
 
      <StyleText  fontWeight ="bold" fontSize = "big"  >Name : {repo.name}</StyleText>
      <StyleText >Email : {repo.email}</StyleText>
      <StyleText> Phone : {repo.phone}</StyleText>
    
  </View>
)

export default RepositoryItem;
