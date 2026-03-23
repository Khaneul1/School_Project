import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import SemiBoldText from "../../../components/customText/SemiBoldText";
import RegularText from "../../../components/customText/RegularText";
import LinearGradient from "react-native-linear-gradient";

import acceptIcon from '../../../assets/img/acceptIcon.png';
import standbyIcon from '../../../assets/img/standbyIcon.png';
import refusalIcon from '../../../assets/img/refusalIcon.png';


const ReceiptDetail = () => {
    const route = useRoute();
    const {receipt} = route.params;
    const {group} = route.params;

    const getStateConfig = (state) => {
        switch (state) {
            case "승인":
                return {
                    message: "승인 완료",
                    icon: acceptIcon,
                };
            case "대기":
                return {
                    message: "승인 대기 중",
                    icon: standbyIcon,
                };
            case "거절":
                return {
                    message: "승인 거절",
                    icon: refusalIcon,
                    reason: "지출 내역이 불명확합니다. 재업로드 바랍니다.",
                };
            default:
                return {
                    message: "상태 없음",
                    icon: null,
                };
        }
    };

    const stateConfig = getStateConfig(receipt.state);

    // const receiptMock = [
    //     {
    //         id: 1,
    //         detail: [
    //             {
    //                 id: 1,
    //                 state: "승인",
    //                 storeName: "메가커피 백석대점",
    //                 amount: 35201,
    //                 payDate: "2025.10.02 18:14:39",
    //                 cardInfo: "신한카드(0526)",
    //                 author: "고하늘",
    //                 category: "동아리원 다과비 지출", 
    //             },
    //             {
    //                 id: 2,
    //                 state: "대기",
    //                 storeName: "네이버스토어 스모어가든",
    //                 amount: 89100,
    //                 payDate: "2025.09.24 11:09:56",
    //                 cardInfo: "국민카드(0839)",
    //                 author: "하승현",
    //                 category: "플리마켓 원자재 구매",
    //             },
    //             {
    //                 id: 3,
    //                 state: "거절",
    //                 storeName: "용우동 백석대점",
    //                 amount: 28900,
    //                 payDate: "2025.09.23 19:03:34",
    //                 cardInfo: "카카오뱅크(0239)",
    //                 author: "하승현",
    //                 category: "동아리원 회식비 지출"
    //             },
    //         ],
    //     },
    //     {
    //         id: 2,
    //         detail: [
    //             {
    //                 id: 1,
    //                 state: "승인",
    //             }
    //         ]
    //     }
    // ]

    return (
        <LinearGradient
            colors={['#7242E2', '#B49BF0', '#FFFFFF']}
            start={{x:0, y:0}}
            end={{x:0, y:0.97}}
            style={styles.gradientContainer}
        >
            <View style={styles.container}>
                    {stateConfig.icon && (
                        <Image source={stateConfig.icon}
                        style={styles.stateIcon} />
                    )}

                    <SemiBoldText style={styles.stateMessage}>{stateConfig.message}</SemiBoldText>
                    {receipt.state === "거절" && (
                        <RegularText style={styles.refusalReason}>
                            {stateConfig.reason}
                        </RegularText>
                    )}
                    <View style={styles.dashedLine} />

                    <View style={styles.receiptDetailCard}>
                        <View style={styles.receiptInfoLeft}>
                            <SemiBoldText style={styles.rightText}>가맹점</SemiBoldText>
                            <SemiBoldText style={styles.rightText}>결제금액</SemiBoldText>
                        </View>

                        <View style={styles.receiptInfoRight}>
                            <SemiBoldText style={styles.leftText}>{receipt.place}</SemiBoldText>
                            <SemiBoldText style={styles.amountText}>{receipt.amount.toLocaleString()}원</SemiBoldText>
                        </View>
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.receiptDetailCard}>
                        <View style={styles.receiptInfoLeft}>
                            <SemiBoldText style={styles.rightText}>결제일시</SemiBoldText>
                            <SemiBoldText style={styles.rightText}>결제카드</SemiBoldText>
                            <SemiBoldText style={styles.rightText}>게시자</SemiBoldText>
                        </View>

                        <View style={styles.receiptInfoRight}>
                            <SemiBoldText style={styles.leftText}>{receipt.date}</SemiBoldText>
                            <SemiBoldText style={styles.leftText}>{receipt.card}</SemiBoldText>
                            <SemiBoldText style={styles.leftText}>{receipt.author}</SemiBoldText>
                        </View>
                    </View>

                    <View style={styles.memoCard}>
                        <RegularText style={styles.descText}>{receipt.desc}</RegularText>
                    </View>
            </View>
        </LinearGradient>
    )
}

export default ReceiptDetail;

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
        width: 322,
        height: 518,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25,
    }, 
    gradientContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    dashedLine: {
        width: "80%",
        borderBottomWidth: 1,
        borderColor: "#B5B2B2",
        borderStyle: "dashed",
    },
    stateIcon: {
        width: 58,
        height: 58,
        marginBottom: 23,
    },
    stateMessage: {
        color: "#3F5A6F",
        fontSize: 24,
        marginBottom: 15,
    },
    receiptDetailCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        paddingVertical: 15,
        paddingHorizontal: 35,
        marginBottom: 10,
        width: "100%"
    },
    receiptInfoLeft: {
        flexDirection: "column",
    },
    receiptInfoRight: {
        alignItems: "flex-end",
    },
    rightText: {
        color: "#3F5A6F",
        fontSize: 14,
        marginBottom: 5,
    },
    leftText: {
        color: "#B5B2B2",
        fontSize: 14,
        marginBottom: 5,
    },
    amountText: {
        color: "#7242E2",
        fontSize: 14,
        marginBottom: 5,
    },
    divider: {
        borderWidth: 0.5,
        borderColor: "#B5B2B2",
        borderRadius: 0.5,
        width: "80%",
        marginTop: -10,
    },
    memoCard: {
        borderWidth: 1,
        borderColor: "#B5B2B2",
        borderRadius: 20,
        // paddingHorizontal: 65,
        // paddingVertical: 23,
        marginTop: 35,
        width: 264,
        height: 63,
        justifyContent: "center",
        alignItems: "center",
    },
    descText: {
        color: "#B5B2B2",
        fontSize: 18,
        fontWeight: "600"
    },
    refusalReason: {
        color: "#FF0000",
        marginBottom: 20,
        fontSize: 14,
    }

})