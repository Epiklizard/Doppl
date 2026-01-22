import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontFamily: 'Vampire Wars' }} className="my-10 text-lg text-3xl">NativeWind Check</Text>

      <View className="flex flex-col gap-5">
        <Link href={"/explore"}>Explore</Link>
        <Link href={"/sign-in"}>Signin</Link>
        <Link href={"/profile"}>Profile</Link>
      </View>

      {/* example prop tab detail */}
      <Link href={"/properties/1"}>Example Property</Link>
    </View>
  );
}
