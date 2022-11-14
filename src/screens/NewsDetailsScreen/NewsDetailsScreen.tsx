import { SafeAreaView, Text, ScrollView, useWindowDimensions } from "react-native";
import RenderHtml from 'react-native-render-html';

import formatDate from '../../functions/formatDate';
import { NewsDetailsProps } from "../../types"

import styles from "./NewsDetailsScreen.styles";


const NewsDetailsScreen: React.FC<NewsDetailsProps> = ({ route: { params: { title, content, author, comments, createDate }}}) => {
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView>
      <ScrollView style={styles.detailsContainer}>
        {title && <Text style={styles.title}>{title}</Text>}
        <Text style={styles.author}>Autor: {author.fullName}</Text>
        <Text style={styles.author}>Dodano: {formatDate(createDate)}</Text>

        <RenderHtml
          contentWidth={width}
          source={{ html: content }}
          ignoredDomTags={["iframe"]}
        />

        <Text style={styles.commentsSectionTitle}>Komentarze {comments.length ? `- ${comments.length}` : ''}</Text>

      </ScrollView>
    </SafeAreaView>
  )
}

export default NewsDetailsScreen;