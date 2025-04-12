import { Stack} from "expo-router";

export default function RootLayout() {
  return(
    //adding the clickable tabs? and adding the names
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>);
}
