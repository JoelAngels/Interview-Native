import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon, ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { styles } from "../theme";

export default function MovieScreen() {
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
        >
          <ChevronLeftIcon
            size="28"
            strokeWidth={2.5}
            color="white"
            className="mb-9"
          />
        </TouchableOpacity>

        <TouchableOpacity className="mt-6">
          <HeartIcon
            size="35"
            color="white"
            // color={isFavourite ? theme.background : "white"}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}
