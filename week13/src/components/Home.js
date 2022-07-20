import * as React from "react";
import { View, Text } from "react-dom";
import { Link } from "react-router-dom";

function Home() {
  return (
    <View>
      <Text>Welcome!</Text>
      <Link to="/profile">Visit your profile</Link>
    </View>
  );
}