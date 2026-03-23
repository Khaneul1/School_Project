import React, { useState, useRef } from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import RegularText from '../../components/customText/RegularText';
import SemiBoldText from "../../components/customText/SemiBoldText";
import BoldText from "../../components/customText/BoldText";
import CalendarView from "./calendar/CalendarView";
import { TextInput } from "react-native/types_generated/index";

const UserMain = ({navigation}) => {

    const [showMonthly, setShowMonthly] = useState(false);
    // const [showAddModal, setShowAddModal] = useState(false);
    // const [text, setText] = useState('');
    // const slideAnim = useRef(new Animated.Value(0).current);
    const calendarRef = useRef(null);

    const [kakaoUser, setKakaoUser] = useState({        
        name: "고하늘",
        email: "kohaneul1219@naver.com",
        groupCount: 3,
        userGroup: [
            {
                id: 1,
                name: "로망",
                description: "창업지원단 소속 창업동아리",
                image: require("../../assets/img/group1.png")
            },
            {
                id: 2,
                name: "구름톤 유니브",
                description: "Kakao x goorm 연합 동아리",
                image: require("../../assets/img/group2.png")
            },
            {
                id: 3,
                name: "폴라리스",
                description: "창업지원단 소속 개발 창업 동아리",
                image: require("../../assets/img/group3.png")
            },
        ],
    });

    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <View style={styles.navStyle}>
                        <TouchableOpacity onPress={() =>  navigation.navigate("Goto")}>
                            <Image source={require("../../assets/img/gotoIcon.png")} 
                            style={styles.gotoicon} />
                        </TouchableOpacity>
                        <View style={{flex: 1, alignItems: "center"}}>
                            <BoldText style={styles.userName}>{kakaoUser.name} 님</BoldText>
                        </View>
                        
                    </View>
                </View>
                    
                    
                    <View style={styles.bodyContainer}>
                        <CalendarView
                        ref={calendarRef}
                        initialMode="week"
                        style={{marginBottom: 0}}
                        />
                        <TouchableOpacity
                        style={styles.detailButton}
                        onPress={() => navigation.navigate("MonthCalendar")}
                        >
                            <RegularText style={styles.detailText}>
                                {showMonthly ? '닫기' : '자세히'}
                            </RegularText>
                        </TouchableOpacity>
                        <SemiBoldText style={styles.userGroupText}>
                            내 그룹 {kakaoUser.groupCount}
                        </SemiBoldText>

                
                        
                        <View style={styles.groupList}>
                            {kakaoUser.userGroup.map((group)=> (
                                <View key={group.id} style={styles.groupCard}>
                                    <Image source={group.image} style={styles.imgIcon} />
                                    <View style={{ flex: 1 }}>
                                        <SemiBoldText style={styles.groupName}>{group.name}</SemiBoldText>
                                        <RegularText style={styles.groupInfo}>
                                            {group.description}
                                        </RegularText>
                                    </View>

                                    <TouchableOpacity
                                    style={styles.joinButton}
                                    onPress={() => navigation.navigate("GroupMain", {groupId: group.id})}
                                    >
                                        <SemiBoldText style={styles.joinText}>참여</SemiBoldText>
                                    </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
        
    );
};

export default UserMain;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    scroll: {
        flex: 1,
    },
    navStyle: {
        flexDirection: "row",
        marginTop: 70,
        marginBottom: 45,
        paddingHorizontal: 40,
        justifyContent: "space-between",
    },
    header: {
        backgroundColor: "#7242E2",
        paddingTop: 10,
        paddingBottom: 15,
        alignItems: "center",
    },
    gotoicon: {
        width: 25,
        height: 22.6,
        marginTop: 4,
    },
    userName: {
        fontSize: 27,
        color: "#FFFFFF",
        marginLeft: -20,
    },
    bodyContainer: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 16,
        width: "100%",
        alignItems: "center",
        overflow: "hidden",
        marginTop: -25,
        zIndex: 10,
    },
    detailButton: {
        backgroundColor: "#F1F1F1",
        width: 341,
        height: 26,
        borderRadius: 9,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    detailText: {
        color: "#ADADAD",
        fontSize: 16,
        fontWeight: "600"
    },
    userGroupText: {
        marginTop: 50,
        alignSelf: "flex-start",
        marginLeft: 30,
        marginBottom: 8,
        fontSize: 17,
        color: "#3E247C",
    },
    groupCard: {
        borderWidth: 1,
        borderColor: "#B3B3B3",
        width: 326,
        height: 80,
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        paddingHorizontal: 16,
        flexDirection: "row",
        marginBottom: 12,
    },
    imgIcon: {
        width: 42,
        height: 42,
        marginRight: 14, 
    },
    groupName: {
        color: "#3E247C",
        fontSize: 18,
        marginBottom: 2,
    },
    groupInfo: {
        color: "#B5B2B2",
        fontSize: 14,
    },
    joinButton: {
        backgroundColor: "#EEE7FF",
        width: 47,
        height: 21,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    joinText: {
        color: "#3E247C",
        fontSize: 13,
    }
})