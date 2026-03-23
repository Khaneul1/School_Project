import React from "react";
import { Text, View, Button } from "react-native";

const MainScreen = ({navigation}) =>{
    return(
        <View>
            <Text>Hello User!!!!!!</Text>
            <Button
            title="로그인하러 가기"
            onPress={()=> navigation.navigate("login")}
            color= 'black' />
        </View>
    );
}

export default MainScreen;