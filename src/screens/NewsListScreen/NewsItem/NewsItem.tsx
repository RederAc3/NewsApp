import { Text, TouchableOpacity, useWindowDimensions } from "react-native";
import RenderHtml from "react-native-render-html";
import { useNavigation } from "@react-navigation/native";

import IconBar from "../../../components/IconBar/IconBar";
import formatDate from '../../../functions/formatDate';
import { News } from "../../../types";
import styles from "./NewsItem.styles";

const NewsItem: React.FC<News> = props => {
    const { title, content, author, numberOfLikes, comments, createDate, isLiked } = props
    const { width } = useWindowDimensions();
    const { navigate } = useNavigation();

    const NewsItemPressed = () => navigate("Details", { ...props })

    return (
        <TouchableOpacity style={styles.newsItem} onPress={NewsItemPressed}>

            {title && <Text style={styles.title}>{title}</Text>}
            <Text style={styles.author}>Autor: {author.fullName}</Text>
            <Text style={styles.author}>Dodano: {formatDate(createDate)}</Text>

            <RenderHtml
                contentWidth={width}
                source={{ html: content }}
                ignoredDomTags={["iframe"]}
            />
            <IconBar numberOfLikes={numberOfLikes} numberOfComments={comments.length} isLiked={isLiked} />
        </TouchableOpacity>
    )
}

export default NewsItem;