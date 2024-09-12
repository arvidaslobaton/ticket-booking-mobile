import { Stack } from "expo-router";
import React from "react";

const EventsLayout = () => {
  return (
    <Stack screenOptions={{ headerBackTitle: "Events" }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="new" />
      <Stack.Screen name="event/[id]" />
    </Stack>
  );
};

export default EventsLayout;
