import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon, ChevronLeftIcon } from "react-native-heroicons/outline";

export default function MovieScreen() {
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 90 }}
      className="flex-1 bg-neutral-900 "
    >
      {/* back button and movie poster */}
      <SafeAreaView
        className={
          "absolute z-20 w-full flex-row justify-between items-center px-4 "
        }
      >
        <TouchableOpacity
          className="rounded-xl p-1"
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}
