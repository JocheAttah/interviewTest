import React from "react";
import { View, Text } from "react-native";

const CartItem = ({ title, price, qty }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        backgroundColor: "white",
        paddingHorizontal: 10,
        paddingVertical: 15,
        shadowColor: "purple",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
    >
      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>
          {title}
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>
          {qty}
        </Text>
      </View>
      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>
          {price}
        </Text>
        {/* <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>
            
          </Text> */}
      </View>
    </View>
  );
};

export default CartItem;
