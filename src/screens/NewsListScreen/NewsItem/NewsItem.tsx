import { Text, TouchableOpacity, useWindowDimensions } from "react-native";
import RenderHtml from "react-native-render-html";
import { useNavigation } from "@react-navigation/native";

import { News } from "../../../types";
import styles from "./NewsItem.styles";

const NewsItem: React.FC<News> = props => {
    const { title, content, author, createDate } = props
    const { width } = useWindowDimensions();
    const { navigate } = useNavigation();

    const NewsItemPressed = () => navigate("Details", {...props})

    return (
        <TouchableOpacity style={styles.newsItem} onPress={NewsItemPressed}>

            {title && <Text style={styles.title}>{title}</Text>}
            <Text style={styles.author}>Autor: {author.fullName}</Text>
            <Text style={styles.author}>Dodano: {createDate}

            </Text>

            <RenderHtml
                contentWidth={width}
                source={{ html: content }}
                ignoredDomTags={["iframe"]}
                />

        </TouchableOpacity>
    )
}

export default NewsItem;