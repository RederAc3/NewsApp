import { Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import formatDate from '../../functions/formatDate';
import { Comment } from "../../types"

import styles from "./CommentItem.styles";

const CommentItem: React.FC<Comment> = ({ author, content, createDate, numberOfLikes, isLiked }) => (
    <View style={styles.commentItem}>
        <View style={styles.commentTitleContainer}>
            <Text style={styles.commentAuthor}>{author.fullName}</Text>
            <Text style={styles.commentCreateDate}>~ {formatDate(createDate)}</Text>
        </View>
        <Text>{content}</Text>

        <View style={styles.iconContainer}>
            {isLiked ? (<FontAwesome name="thumbs-up" size={24} color="black" />
            ) : <FontAwesome name="thumbs-o-up" size={24} color="black" />}
            <Text style={styles.numberLikes}>{numberOfLikes}</Text>
        </View>
    </View>
)

export default CommentItem;