import { ScrollView, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { communityMockData } from '../../../data/community'
import SemiBoldText from '../../../components/customText/SemiBoldText';
import BoldText from '../../../components/customText/BoldText';

const CommunityPostDetail = ({route, navigation}) => {
    const {groupId, postId} = route.params;
    const posts = communityMockData[groupId] || [];
    const post = posts.find(p => p.id === postId);

    const getTotalCommentCount = (post) => {
        const commentCount = post.comments.length;
        const replyCount = post.comments.reduce((acc, c) => acc + c.replies.length, 0);
        return commentCount + replyCount;
    };

    if (!post) {
        return <SemiBoldText style={{fonSize: 12, color: "#ADADAD"}}>
            게시글을 찾을 수 없습니다.
        </SemiBoldText>
    }
  return (
    <View style={styles.container}>
        <ScrollView>
            <View style={styles.navContainer}>
                <TouchableOpacity style={styles.backButton}
                onPress={() => navigation.goBack()}>
                    <Image source={require("../../../assets/img/backPurpleIcon.png")}
                    style={styles.backIconStyle} />
                </TouchableOpacity>
                <BoldText style={styles.pageName}>게시판</BoldText>
                <View style={styles.iconGroup}>
                    <TouchableOpacity onPress={() => navigation.navigate("Manager")}>
                        <Image source={require("../../../assets/img/ManagerPurpleIcon.png")}
                            style={styles.mngIconStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Goto")}>
                        <Image source={require("../../../assets/img/GotoPurpleIcon.png")} 
                        style={styles.gotoIconStyle} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.postCard}>
                <View style={styles.authorCard}>
                    <BoldText style={styles.author}>{post.authorName}</BoldText>
                    <SemiBoldText style={styles.dateText}>{post.createdAt}</SemiBoldText>
                </View>
                <BoldText style={styles.postTitle}>{post.title}</BoldText>
                <View style={styles.divider} />
                <SemiBoldText style={styles.postContent}>{post.content}</SemiBoldText>
            </View>
            <View style={styles.commentCount}>
                <Image source={require("../../../assets/img/commentCountIcon.png")}
                style={styles.commentIcon} />
                <SemiBoldText style={styles.commentCountText}>{getTotalCommentCount(post)}</SemiBoldText>
            </View>
        </ScrollView>
        

        
      
    </View>
  )
}

export default CommunityPostDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: 8,
    },
    navContainer: {
        justifyContent: 'flex-end',
        alignItems: "center",
        flexDirection: "row",
        padding: 16,
        marginTop: 65,
    },
    backIconStyle: {
        width: 37,
        height: 37,
    },
    gotoIconStyle: {
        width: 23,
        height: 23,
        marginRight: 10,
        marginLeft: 5
    },
    mngIconStyle: {
        width: 23,
        height: 23,
        marginRight: 10,
    },
    pageName: {
        fontSize: 27,
        color: "#7242E2",
        position: "absolute",
        left: 0,
        right: 0,
        textAlign: "center",
    },
    iconGroup: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    backButton: {
        width: 50,
        height: 50,
        justifyContent: "flex-start",
        position: "absolute",
        left: 16,
        top: 9,
        alignItems: "center",
        zIndex: 10,
    },
    postCard: {
        backgroundColor: "#FFFFFF",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingVertical: 20,
        paddingHorizontal: 25,
        borderRadius: 20,
        shadowColor: "#000000",
        shadowOpacity: 0.3,
        shadowRadius: 7,
        shadowOffset: {width: 0, height: 4},
        elevation: 4,
        width: "90%",
        marginTop: 40,
        alignSelf: "center"
    },
    authorCard: {
        flexDirection: "row",
        gap: 8,
    },
    author: {
        color: "#3E247C",
        fontSize: 18,
    },
    dateText: {
        color: "#B5B2B2",
        fontSize: 12,
        top: 4,
    },
    postTitle: {
        color: "#7242E2",
        fontSize: 19,
        marginTop: 16,
    },
    divider: {
        borderWidth: 0.5,
        borderColor: "#B5B2B2",
        width: "100%",
        alignSelf: "center",
        marginTop: 9,
    },
    postContent: {
        color: "#B5B2B2",
        fontSize: 14,
        marginTop: 17,
    },
    commentCount: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginTop: 25,
        marginLeft: 30,
        gap: 5,
    },
    commentIcon: {
        width: 15,
        height: 15,
    },
    commentCountText: {
        color: "#B5B2B2",
        fontSize: 12.5,
    }
})