import React from "react";
import { View, StyleSheet, Image } from "react-native";
import StyleText from "./Style/StyleText.jsx";

const RepositoryItem = (repo) => (
  <View style={styles.Layout}>
    <View>
      <Image style={styles.image} source={{ uri: repo.img }} />
    </View>

    <View>
      <StyleText fontWeight="bold" fontSize="big">
        {repo.name}
      </StyleText>
      <StyleText fontSize="medium"> Phone : {repo.phone}</StyleText>
    </View>
  </View>
);

const styles = StyleSheet.create({
  Layout: {
    flexDirection: "row",
    gap: 20,
    paddingTop:20,
    paddingLeft:20,
    // justifyContent: "center",
    alignContent:"center"
  },
  ContainerImg: {
   
  },
  ContainerText: {},
  image: {
    width: 40,
    height: 40,
  },
});

export default RepositoryItem;
{
  /* <StyleText >Email : {repo.email}</StyleText> */
}
