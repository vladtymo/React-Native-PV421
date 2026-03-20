import React from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
    interpolateColor,
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withRepeat,
    withSpring,
    withTiming,
} from "react-native-reanimated";

const Animation = () => {
  const width = useSharedValue(200);
  const rotateDeg = useSharedValue<number>(0);

  const clockwise = useSharedValue(true);

  const handleStart = () => {
    // width.value = 400; // різка зміна
    // withTiming - плавна зміна
    // withRepeat - повторення анімації
    // withSpring - пружинна анімація
    // withDelay - затримка анімації
    // withSequence - послідовна анімація

    width.value = withRepeat(
      withTiming(400, { duration: 1000 }),
      4,
      true,
      () => {
        console.log("Animation completed");
        width.value = withDelay(
          5000, // 0.5s delay
          withSpring(
            50,
            {
              stiffness: 389,
            },
            () => {
              width.value = withTiming(100);
            },
          ),
        );
      },
    );
  };

  const setClockwise = () => {
    if (Math.abs(rotateDeg.value) >= 180) clockwise.value = !clockwise.value;
  };
  const handlePress = () => {
    if (clockwise.value)
      rotateDeg.value = withTiming(
        rotateDeg.value + 60,
        undefined,
        setClockwise,
      );
    else
      rotateDeg.value = withTiming(
        rotateDeg.value - 60,
        undefined,
        setClockwise,
      );

    console.log(clockwise.value, rotateDeg.value);
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotateDeg.value}deg` }],
    backgroundColor: interpolateColor(
      width.value,
      [100, 200, 400],
      ["violet", "green", "red"],
    ),
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Animations</Text>
      <Button title="Start" onPress={handleStart} />
      <Pressable onPress={handlePress}>
        <Animated.View
          style={[
            {
              width: width,
              height: 100,
              backgroundColor: "violet",
            },
            animatedStyles,
          ]}
        />
      </Pressable>
    </View>
  );
};

export default Animation;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    gap: 10,
  },
  text: {
    color: "black",
    fontSize: 18,
    textAlign: "center",
  },
});
