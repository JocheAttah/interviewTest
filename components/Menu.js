import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";

const Menu = ({ title, price, page }) => {
  const [counter, setCounter] = React.useState(0);
  const [buttonPressed, setButtonPressed] = React.useState(false);
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        // backgroundColor: page % 2 === 0 ? "red" : "blue",
        backgroundColor: "white",
        paddingHorizontal: 10,
        paddingVertical: 15,
        shadowColor: "#000",
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
          ${price}
        </Text>
      </View>
      {!buttonPressed ? (
        <TouchableOpacity
          style={{
            backgroundColor: "purple",
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderRadius: 10,
          }}
          onPress={() => {
            setButtonPressed(true), setCounter(counter + 1);
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "white" }}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.counterSection}>
          <Pressable
            onPress={() => setCounter(counter - 1)}
            style={styles.button}
            disabled={counter <= 0 ? true : false}
          >
            <Text style={styles.counterAction}> - </Text>
          </Pressable>
          <Text style={styles.counter}>{counter}</Text>
          <Pressable
            onPress={() => setCounter(counter + 1)}
            style={styles.button}
          >
            <Text style={styles.counterAction}> + </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  counterSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "purple",
    paddingHorizontal: 4,
    paddingVertical: 8,
    borderRadius: 10,
    // paddingHorizontal: 10,
  },
  counter: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 20,
    color: "white",
  },
  button: {
    // borderWidth: 2,
    // borderRadius: 10,
    // borderColor: "lightgrey",
    // width: 21,
    // height: 21,
    // justifyContent: "center",
    // alignItems: "center",
  },
  counterAction: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});
