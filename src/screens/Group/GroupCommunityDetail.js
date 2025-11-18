import React, { useState } from "react";
import { ScrollView, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import BoldText from "../../components/customText/BoldText";
import SemiBoldText from "../../components/customText/SemiBoldText";
import SearchBar from "../../components/SearchBar";
import {communityMockData} from "../../data/community";
import RegularText from "../../components/customText/RegularText";

const GroupCommunityDetail = ({route, navigation}) => {
    const { groupId } = route.params;
    const posts = communityMockData[groupId] || [];
    const [keyword, setKeyword] = useState("");

    const filteredPosts = posts.filter(post =>
        post.title.includes(keyword) || post.content.includes(keyword)
    );

    const getTotalCommentCount = (post) => {
        const commentCount = post.comments.length;
        const replyCount = post.comments.reduce((acc, c) => acc + c.replies.length, 0);
        return commentCount + replyCount;
    };

    return(
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.navContainer}>
                <TouchableOpacity style={styles.backButton}
                onPress={() => navigation.goBack()}>
                    <Image source={require("../../assets/img/backPurpleIcon.png")}
                    style={styles.backIconStyle} />
                </TouchableOpacity>
                <BoldText style={styles.pageName}>게시판</BoldText>
                <View style={styles.iconGroup}>
                    <TouchableOpacity onPress={() => navigation.navigate("Manager")}>
                        <Image source={require("../../assets/img/ManagerPurpleIcon.png")}
                            style={styles.mngIconStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Goto")}>
                        <Image source={require("../../assets/img/GotoPurpleIcon.png")} 
                        style={styles.gotoIconStyle} />
                    </TouchableOpacity>
                    </View>
                </View>

                <SearchBar
                value={keyword}
                onChangeText={setKeyword}
                placeholder="검색어를 입력하세요"
                showClear={true}
                onClear={() => setKeyword("")}
                style={styles.searchBar}
                />

                <View style={styles.postSection}>
                    {filteredPosts.map(post => (
                        <TouchableOpacity
                        key={post.id}
                        style={styles.postContainer}
                        onPress={() => 
                            navigation.navigate("CommunityPostDetail", {
                                postId: post.id,
                                groupId: groupId
                            })
                        }
                    >
                        <View style={styles.authorCard}>
                            <BoldText style={styles.author}>{post.authorName}</BoldText>
                            <SemiBoldText style={styles.dateText}>{post.createdAt}</SemiBoldText>
                        </View>
                        <SemiBoldText style={styles.postTitle}>{post.title}</SemiBoldText>
                        <RegularText style={styles.postContent} numberOfLines={1}>
                            {post.content}
                        </RegularText>

                        <View style={styles.commentCount}>
                            <Image source={require("../../assets/img/commentCountIcon.png")}
                            style={styles.commentIcon} />
                            <SemiBoldText style={styles.commentCountText}>{getTotalCommentCount(post)}</SemiBoldText>
                        </View>
                        
                            
                    </TouchableOpacity>
                    ))}
                </View>
        </ScrollView>
        </View>
        
    );
};

export default GroupCommunityDetail;

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
    searchBar: {
        alignSelf: "center",
        marginTop: 30,
    },
    postSection: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },
    postContainer: {
        backgroundColor: "#FFFFFF",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingVertical: 20,
        paddingHorizontal: 25,
        borderRadius: 20,
        marginBottom: 15,
        shadowColor: "#000000",
        shadowOpacity: 0.3,
        shadowRadius: 7,
        shadowOffset: {width: 0, height: 4},
        elevation: 4,
        width: 343,
    },
    authorCard: {
        flexDirection: "row",
        gap: 8,
    },
    author: {
        color: "#3E247C",
        fontSize: 17,
    },
    dateText: {
        color: "#B5B2B2",
        fontSize: 11,
        top: 3.9,
    },
    postTitle: {
        color: "#808080",
        fontSize: 16,
        marginTop: 10,
    },
    postContent: {
        color: "#B5B2B2",
        fontSize: 14,
        marginTop: 6
    },
    commentCount: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: 8,
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
});