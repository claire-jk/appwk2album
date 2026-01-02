import React from "react";
import { StyleSheet, Text, View } from "react-native";

// 定義傳入參數的型別 (TypeScript)
interface HeaderProps {
  titleFont?: string;
}

const Header = ({ titleFont }: HeaderProps) => {
  return (
    <View style={styles.headerStyle}>
      <Text style={[styles.textStyle, { fontFamily: titleFont || "System" }]}>
        BTS forever 🎶
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#9e9e9eff", // 標題區域的背景顏色
    justifyContent: "center",
    alignItems: "center",
    height: 80,                 // 稍微增加高度以容納狀態列空間
    paddingTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,               // Android 陰影
  },
  textStyle: {
    fontSize: 20,
    marginTop: 10,
  },
});

export default Header;