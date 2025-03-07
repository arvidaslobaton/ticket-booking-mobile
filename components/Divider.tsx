import { View } from "react-native";
import React from "react";
import { defaultShortcuts, ShortcutProps } from "@/styles/shortcut";

export interface DividerProps extends ShortcutProps {}

export const Divider = (props: DividerProps) => {
  return (
    <View
      style={[
        defaultShortcuts(props),
        {
          backgroundColor: "lightgray",
          height: 1,
        },
      ]}
    />
  );
};
