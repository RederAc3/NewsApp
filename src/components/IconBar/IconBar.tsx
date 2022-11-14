import { Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import { IconBarProps } from "../../types";
import styles from "./IconBar.styles";

const IconBar: React.FC<IconBarProps> = ({ numberOfLikes, numberOfComments, isLiked }) => {
    return (
        <View style={styles.iconBar}>
            <View style={styles.iconItem}>
                <Text style={styles.iconNumber}>{numberOfComments}</Text>
                <FontAwesome name="comment-o" size={24} color="black" />
            </View>
            <View style={styles.iconItem}>
                <Text key={1} style={styles.iconNumber}>{numberOfLikes}</Text>
                {isLiked ? (<FontAwesome name="thumbs-up" size={24} color="black" />
                ) : <FontAwesome name="thumbs-o-up" size={24} color="black" />}
            </View>
        </View>
    )
}

export default IconBar;