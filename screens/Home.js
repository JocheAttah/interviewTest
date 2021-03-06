import React from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Button,
} from "react-native";
import { Menu } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/shop-actions";

const Home = ({ navigation }) => {
  const [page, setPage] = React.useState(1);
  const [cartCounter, setCartCounter] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);

  const flatListRef = React.useRef();

  const dispatch = useDispatch();
  const products = useSelector((state) => state.shop.products);
  const cart = useSelector((state) => state.shop.cart);

  console.log(products);

  React.useEffect(() => {
    console.log("useEffect");
    setIsLoading(true);
    dispatch(fetchProducts());
    console.log("Page", page);
  }, [page]);

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

  const renderItem = ({ item }) => (
    <Menu title={item.dish} price={200} id={item.uid} />
  );

  const renderHeader = () => (
    <Text
      style={{
        fontSize: 25,
        fontWeight: "700",
        marginVertical: 15,
        marginHorizontal: 10,
      }}
    >
      Bon Appétit
    </Text>
  );

  const renderFooter = () => {
    return isLoading ? (
      <View
        style={{
          marginTop: 10,
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    ) : (
      <View
        style={{
          marginBottom: 50,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: "60%",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 10,
            paddingHorizontal: 5,
            backgroundColor: "purple",
            borderRadius: 10,
          }}
          onPress={() =>
            flatListRef.current.scrollToOffset({ animated: true, offset: 0 })
          }
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
            Go to top
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderEmpty = () => (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>No Data at the moment</Text>
      <Button onPress={() => dispatch(fetchProducts())} title="Refresh" />
    </View>
  );

  const handleLoadMore = () => {
    if (page + 1 <= 5) {
      console.log("handleLoadMore");
      setPage(page + 1);
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        width: "96%",
        alignSelf: "center",
        paddingTop: 40,
      }}
    >
      <FlatList
        ref={flatListRef}
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.uid}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmpty}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
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
            width: "30%",
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
            width: "30%",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
            Total
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
            ${totalPrice}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: "30%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderBottomRightRadius: 10,
            borderTopRightRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
          onPress={() => navigation.navigate("cart")}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
