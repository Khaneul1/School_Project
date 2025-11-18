import React from "react";
import { Text } from "react-native";
import {groupDetails} from "../../data/group";

const GroupNoticeDetail = ({route}) => {
    const { groupId } = route.params;
    const group = groupDetails[groupId];
    return(
        <Text> hi ~~ {group.name}</Text>
    );
};

export default GroupNoticeDetail;