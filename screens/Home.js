import axios from "axios";
import React from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Button,
} from "react-native";
import baseURL from "../apis";
import { Menu } from "../components";
import { dummyData } from "../constants";

const Home = () => {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);

  const flatListRef = React.useRef();

  //   const menu = dummyData.menus;

  React.useEffect(() => {
    console.log("useEffect");
    setIsLoading(true);
    getData();
    console.log("Page", page);
  }, [page]);

  const getData = () => {
    console.log("GetData");
    axios.get(baseURL).then((response) => {
      //   console.log(response.data);
      setData(data.concat(response.data));
      console.log(data);
      setIsLoading(true);
      //   setPost(response.data);
    });
  };

  const renderItem = ({ item }) => (
    <Menu title={item.dish} price={200} page={page} />
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
      <View style={{ marginTop: 10, alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    ) : (
      <View style={{ marginBottom: 50, alignItems: "center" }}>
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
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>Go to top</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderEmpty = () => (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>No Data at the moment</Text>
      <Button onPress={() => getData()} title="Refresh" />
    </View>
  );

  const handleLoadMore = () => {
    if (page + 1 <= 5) {
      console.log("handleLoadMore");
      setPage(page + 1);
      // console.log("Page", page);
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
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
            (20)
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
            ${0}
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
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
