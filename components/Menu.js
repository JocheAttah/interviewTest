import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Menu = ({ title, price, page }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 50,
        backgroundColor: page % 2 === 0 ? "red" : "blue",
      }}
    >
      <View>
        <Text>{title}</Text>
        <Text>{price}</Text>
      </View>
      <TouchableOpacity>
        <Text>Add to Cart</Text>
        
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
