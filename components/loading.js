import { View, Dimensions, TextInput } from "react-native";
import React, { useEffect } from "react";
const { width, height } = Dimensions.get("window");

import { styles, theme } from "../theme";
import Animated, {
  interpolateColor,
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Circle, Svg } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedText = Animated.createAnimatedComponent(TextInput);
const radius = "45";
const circumference = radius * Math.PI * 2;
const duration = 6000;

export default function Loading() {
  const strokeOffset = useSharedValue(circumference);
  const percentage = useDerivedValue(() => {
    const number = ((circumference - strokeOffset.value) / circumference) * 100;
    return withTiming(number, { duration: duration });
  });

  const strokeColor = useDerivedValue(() => {
    return interpolateColor(
      percentage.value,
      [0, 50, 100],
      ["#9E4784", "#66347F", "#37306B"]
    );
  });

  const animatedCircleProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: withTiming(strokeOffset.value, {
        duration: duration,
      }),
      stroke: strokeColor.value,
    };
  });

  const animatedTextProps = useAnimatedProps(() => {
    return {
      text: `${Math.round(percentage.value)} %`,
    };
  });

  useEffect(() => {
    strokeOffset.value = 0;
  }, []);
  return (
    <View
      style={{ height, width }}
      className="absolute flex-row justify-center items-center"
    >
      <AnimatedText
        style={{
          color: "#FFFFFF",
          fontSize: 24,
          fontWeight: "bold",
          position: "absolute",
        }}
        animatedProps={animatedTextProps}
      />
      <Svg height="50%" width="50%" viewBox="0 0 100 100">
        <Circle
          cx="50"
          cy="50"
          r="45"
          stroke="#00FFFF"
          strokeWidth="10"
          fill="transparent"
        />
        <AnimatedCircle
          animatedProps={animatedCircleProps}
          cx="50"
          cy="50"
          r="45"
          strokeDasharray={`${radius * Math.PI * 2}`}
          strokeWidth="8"
          fill="transparent"
        />
      </Svg>
    </View>
  );
}
