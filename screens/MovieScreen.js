import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon, ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { styles, theme } from "../theme";
import { LinearGradient } from "expo-linear-gradient";

var { width, height } = Dimensions.get("window");

export default function MovieScreen() {
  const navigation = useNavigation();
  const [isFavourite, setFavourite] = useState(false);
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 90 }}
      className="flex-1 bg-neutral-900 "
    >
      {/* back button and movie poster */}
      <SafeAreaView
        className={
          "absolute z-20 flex-row w-full justify-between items-center px-4"
        }
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
          <HeartIcon
            size="35"
            color={isFavourite ? theme.background : "white"}
          />
        </TouchableOpacity>
      </SafeAreaView>

      <View>
        <Image
          source={require("../assets/images/moviePoster2.png")}
          style={{ width, height: height * 0.55 }}
        />
        <LinearGradient
          colors={[
            "transparent",
            "rgba(23, 23, 23, 0.8)",
            "rgba(23, 23, 23, 1)",
          ]}
          style={{ width, height: height * 0.4 }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0"
        />
      </View>
    </ScrollView>
  );
}
