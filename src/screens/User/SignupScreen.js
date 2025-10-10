import React, { useState } from "react";
import { ScrollView, TextInput, StyleSheet, Image, View, Text } from "react-native";

const SignupScreen = ({navigation}) => {
    const [nickname, setNickname] = useState("");
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPw, setConfirmPw] = useState("");

    return(
        <ScrollView>
            <Image source = {require('../../../asset/logo.png')}
            style = {styles.logo}
            />

            <View style = {styles.firstInput}>
                <TextInput 
                    style={styles.input}
                    placeholder = "닉네임을 입력하세요"
                    onChangeText = {newNickname => setNickname(newNickname)}
                    value = {nickname}
                />
                {nickname.length > 0 && (
                    <Text style={styles.validText}>* 사용 가능한 닉네임입니다</Text>
                )}
            </View>
            <View style = {styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="아이디를 입력하세요"
                    onChangeText={newUserId => setUserId(newUserId)}
                    value={userId}
                />
                {userId.length > 0 && (
                    <Text style={styles.validText}>* 사용 가능한 아이디입니다</Text>
                )}
            </View>
            <View style = {styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="비밀번호를 입력하세요"
                    onChangeText={newPassword => setPassword(newPassword)}
                    value={password}
                />
            </View>
            <View style = {styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="비밀번호를 입력하세요"
                    onChangeText={newConfirmPw => setConfirmPw(newConfirmPw)}
                    value={confirmPw}
                />
                {confirmPw.length > 0 && password === confirmPw && (
                    <Text style={styles.validText}>* 비밀번호가 일치합니다</Text>
                )}
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
    logo: {
        width: 134,
        height: 50,
        marginTop: 130,
        marginLeft: 40,
    },
    firstInput: {
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
    validText: {
        color: "#41B3FF",
        fontSize: 14,
        marginTop: 5,
        marginLeft: 40,
    },
 
});

export default SignupScreen;