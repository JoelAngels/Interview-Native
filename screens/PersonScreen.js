import {
  View,
  Text,
  Dimensions,
  Platform,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon, ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles, theme } from "../theme";
import MovieList from "../components/movieList";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import Loading from "../components/loading";

var { width, height } = Dimensions.get("window");

export default function PersonScreen() {
  const navigation = useNavigation(false);
  const [isFavourite, setFavourite] = useState(false);
  const [personMovies, setPersonMovies] = useState([1, 2, 3, 4]);
  const [loading, setLoading] = useState(false);

  const personData = [
    {
      id: uuidv4(),
      title: "Gender",
      personal: "male",
    },
    {
      id: uuidv4(),
      title: "Birthday",
      personal: "1964-09-02",
    },
    {
      id: uuidv4(),
      title: "Known For",
      personal: "Acting",
    },
  ];

  const renderPersonalData = () => {
    return personData.map((item) => {
      const { id, title, personal } = item;
      return (
        <View
          className="border-r-2 border-r-neutral-400 px-2 items-center"
          key={id}
        >
          <Text className="text-white font-semibold">{title}</Text>
          <Text className="text-neutral-300 text-sm">{personal}</Text>
        </View>
      );
    });
  };

  return (
    <ScrollView
      className="flex-1 bg-neutral-900"
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      {/* {Back Button} */}
      <SafeAreaView
        className={" z-20 flex-row w-full justify-between items-center px-4"}
      >
        <TouchableOpacity
          style={styles.background}
          className="rounded-xl p-1 mt-5"
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon
            size="28"
            strokeWidth={2.5}
            color="white"
            className="mb-9"
          />
        </TouchableOpacity>

        {/* onClick toggle to render favourite */}
        <TouchableOpacity
          onPress={() => setFavourite(!isFavourite)}
          className="rounded-xl p-1 mt-5"
        >
          <HeartIcon size="35" color={isFavourite ? "red" : "white"} />
        </TouchableOpacity>
      </SafeAreaView>
      {/*=========================== Person Detail=========================================== */}
      {loading ? (
        <Loading />
      ) : (
        <View>
          <View
            className="flex-row justify-center"
            style={{
              elevation: 18,
              shadowColor: "#FFF ",
            }}
          >
            <View className="items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500">
              <Image
                source={require("../assets/images/castImage2.png")}
                style={{ height: height * 0.5, width: width * 0.74 }}
              />
            </View>
          </View>
          <View className="mt-6">
            <Text className="text-3xl text-white font-bold text-center">
              Keanu Reeves
              {/* {person?.name} */}
            </Text>
            <Text className="text-neutral-500 text-base text-center">
              {/* {person?.place_of_birth} */}
              Kenya, Nairobi
            </Text>
          </View>
          {/*========================== Gender Section and Details===================================== */}

          <View className="mx-3 mt-6 p-4 flex-row justify-between items-center bg-neutral-700 rounded-full">
            {renderPersonalData()}
            <View className=" border-r-neutral-400 px-2 items-center">
              <Text className="text-white font-semibold">Popularity</Text>
              <Text className="text-neutral-300 text-sm">64.23</Text>
            </View>
          </View>
          {/*===================== Biography========================= */}
          <View className="my-6 mx-4 space-y-2">
            <Text className="text-white text-lg">Biography</Text>
            <Text className="text-neutral-400 tracking-wide">
              {/* {person?.biography ? person.biography : "N/A"} */}He is the
              titular protagonist of the American media franchise John Wick. In
              the franchise's film series, he is introduced as a legendary
              Belarusian-American ex-hitman who left the criminal underworld
              after falling in love with and marrying a woman named Helen.
            </Text>
          </View>
          {/*=============== Movie List for the Peron============================ */}
          <MovieList data={personMovies} title={"Movies"} hideSeeAll={true} />
        </View>
      )}
    </ScrollView>
  );
}
