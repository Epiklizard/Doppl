import { Link } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href={"/explore"}>Explore</Link>
      <Link href={"/sign-in"}>Signin</Link>
      <Link href={"/profile"}>Profile</Link>

      {/* example prop tab detail */}
      <Link href={"/properties/1"}>Example Property</Link>
    </View>
  );
}
