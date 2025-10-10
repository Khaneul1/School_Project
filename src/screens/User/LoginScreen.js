import React, { useState } from "react";
import { ScrollView, TextInput, StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";

const LoginScreen = ({navigation}) => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    return(
        <ScrollView>
          <View style={styles.logobox}>
            <Image source = {require('../../../asset/logo.png')}
            style = {styles.logo}
            />
          </View>
            <View style = {styles.firstInput}>
                <TextInput
                    style={styles.input}
                    placeholder="아이디를 입력하세요"
                    onChangeText={newUserId => setUserId(newUserId)}
                    value={userId}
                />
            </View>
            <View style = {styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="비밀번호를 입력하세요"
                    onChangeText={newPassword => setPassword(newPassword)}
                    value={password}
                />
            </View>
            <View style={styles.navSignup}>
                <Text style={styles.text}>계정이 없으신가요?</Text>
                <Text 
                      style={styles.signupText} 
                      onPress={()=> navigation.navigate("signup")}>회원가입하기</Text>
            </View>
            <View style={styles.ButtonBox}>
                <TouchableOpacity
                style={styles.ButtonStyle}
                onPress={()=> navigation.navigate("main")}>
                    <Text style={styles.btnTextStyle}>
                        로그인
                    </Text>
                </TouchableOpacity>
            </View>
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logobox:{
      justifyContent: 'center',
      alignItems: 'center'
    },
    logo: {
        width: 200,
        height: 84,
        marginTop: 130,
    },
    firstInput: {
      marginTop: 90,
      width: 320,
    },
    inputContainer: {
        width: 320,
        marginTop: 4,
    },
    input: {
        width: "100%",
        height: 60,
        borderColor: '#D7D7D7',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#B5B2B2',
        marginLeft: 40,
        marginTop: 20,
    },
    navSignup: {
        marginTop: 100,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    signupText: {
        color: '#41B3FF',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 4,
    },
    text: {
      color: '#41B3FF',
      fontSize: 16,
      marginBottom: 10,
      marginRight: 4,
    },
    ButtonBox: {
        justifyContent:'center',
        alignItems:'center',
        marginTop: 10,
    },
    ButtonStyle: {
        backgroundColor: '#41B3FF',
        width: 320,
        height: 60,
        borderRadius: 17,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnTextStyle: {
        fontSize: 26,
        color: '#FFFFFF',
        fontWeight: 'bold',
    }
});

export default LoginScreen;