import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import theme from "../theme";

const MyButton : React.FC<{name: string, backgroundColor: string,}> = ({ children,name,backgroundColor })=> {
  return (
    <FontAwesome.Button
      color={theme.COLORS.WHITE}
      name={name}
      style={{
        padding: 10,
        backgroundColor: backgroundColor
      }}
      
    >
      {children}
    </FontAwesome.Button>
  );
}

export default MyButton