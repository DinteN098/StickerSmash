import { Tabs } from "expo-router";

export default function TabLayout() {
  return(
    //adding the clickable tabs? and adding the names
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home'}} />
      <Tabs.Screen name="about" options={{ title: 'About'}}/>
    </Tabs>);
}