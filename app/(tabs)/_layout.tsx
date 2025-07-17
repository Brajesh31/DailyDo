import { Tabs } from "expo-router";

export default function TabsLayout() {
  return(
    <Tabs>
        <Tabs.Screen name="index" options={{ title: "Home",headerTitle:"Upcoming Tasks" }} />
        <Tabs.Screen name="calender" options={{ title: "Calendar" , headerTitle:"Schedules Your Tasks"}} />
        <Tabs.Screen name="tasks/index" options={{ title: "Tasks List" }} />
    </Tabs>
  )
}