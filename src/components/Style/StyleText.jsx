import React, { Children } from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../../theme";
const styles = StyleSheet.create({
  text: {
    fontFamily: theme.Fonts.main,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal,
    color: theme.colors.textPrimary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  normal: {
    fontWeight: theme.fontWeights.normal,
  },
  ColorPrimary: {
    color: theme.colors.Primary,
  },
  header:{
    fontSize: theme.fontSizes.header,
  },

  title: {
    fontSize: theme.fontSizes.title,
  },
  subTitle: {
    fontSize: theme.fontSizes.subTitle,
  },
});

export default function StyleText({

  children,
  ColorPrimary,
  fontSize,
  fontWeight,
  style,
  ...restOfProps
}) {
  const textStyle = [
    styles.text,
    fontWeight === "bold" && styles.bold,
    fontWeight === "medium" && styles.normal,
    fontSize === "big" && styles.title,
    fontSize === "header" && styles.header,
    fontSize === "medium" && styles.subTitle,
    ColorPrimary === "primary" && styles.ColorPrimary,
  ];
  return (
    <Text style={textStyle}  {...restOfProps} >
      {children}
    </Text>
  );
}
