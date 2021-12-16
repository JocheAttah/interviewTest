import React from "react";
import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { CartItem } from "../components";

const Cart = () => {
  const [cartCounter, setCartCounter] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const cart = useSelector((state) => state.shop.cart);
  console.log(cart);

  React.useEffect(() => {
    let count = 0;
    let price = 0;
    cart.forEach((item) => {
      count += item.qty;
      price += item.qty * item.price;
    });
    setCartCounter(count);
    setTotalPrice(price);
  }, [cart, cartCounter]);

  const renderHeader = () => (
    <Text
      style={{
        fontSize: 25,
        fontWeight: "700",
        marginVertical: 15,
        paddingTop: 40,
        paddingBottom: 20,
        paddingHorizontal: 10,
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
      Cart
    </Text>
  );
  const renderItem = ({ item }) => (
    <CartItem title={item.dish} price={item.price} qty={item.qty} />
  );
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {renderHeader()}
      {cart === [] ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>No item is in the Cart</Text>
        </View>
      ) : (
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={(item) => item.uid}
        />
      )}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignSelf: "center",
          alignItems: "center",
          width: "90%",
          height: 80,
          paddingLeft: 10,
          backgroundColor: "purple",
          marginBottom: 30,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderColor: "white",
            borderRightWidth: 2,
            width: "50%",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
            Quatity
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
            {cartCounter}
          </Text>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
            Total
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
            ${totalPrice}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Cart;
