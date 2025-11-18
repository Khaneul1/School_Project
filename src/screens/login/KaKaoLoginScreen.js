import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import BoldText from '../../components/customText/ExtraBoldText';
import SemiBoldText from '../../components/customText/SemiBoldText';

const KakaoLoginScreen = ({navigation}) => {

    return(
        <LinearGradient
        colors={['#7242E2', '#B49BF0', '#FFFFFF']}
        start={{x:0, y:0}}
        end={{x:0, y:0.97}}
        style={styles.gradientContainer}
        >
            <View style={styles.textContainer}>
                <BoldText style={styles.titleBold}>MOAU</BoldText>
                <SemiBoldText style={styles.subTitle}>소규모 일정 회계관리 솔루션 </SemiBoldText>
            </View>

            <TouchableOpacity style={styles.loginButton}
            onPress={() => navigation.navigate("UserMain")}>
                <SemiBoldText style={styles.loginText}>카카오 로그인</SemiBoldText>
            </TouchableOpacity>
            

        </LinearGradient>
    );
       
        
}

export default KakaoLoginScreen;

const styles = StyleSheet.create({
    gradientContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 300,
        marginTop: 45,
    },
    titleBold: {
        fontSize: 64,
        letterSpacing: 12,
        color: "#FFFFFF",
        marginLeft: 4
    },
    subTitle: {
        fontSize: 22,
        color: "#FFFFFF",
    },
    loginButton: {
        backgroundColor: "#F9E000",
        width: 290,
        height: 59,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 50
    },
    loginText: {
        fontSize: 26,
    }
})