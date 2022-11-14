import { SafeAreaView, Text, ScrollView, useWindowDimensions } from "react-native";
import RenderHtml from 'react-native-render-html';
import IframeRenderer, { iframeModel } from '@native-html/iframe-plugin';
import WebView from 'react-native-webview';

import CommentItem from "../../components/CommentItem/CommentItem"
import formatDate from '../../functions/formatDate';
import { NewsDetailsProps } from "../../types"

import styles from "./NewsDetailsScreen.styles";


const NewsDetailsScreen: React.FC<NewsDetailsProps> = ({ route: { params: { title, content, author, comments, createDate } } }) => {
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView>
      <ScrollView style={styles.detailsContainer}>
        {title && <Text style={styles.title}>{title}</Text>}
        <Text style={styles.author}>Autor: {author.fullName}</Text>
        <Text style={styles.author}>Dodano: {formatDate(createDate)}</Text>

        <RenderHtml
          renderers={{ iframe: IframeRenderer }}
          WebView={WebView}
          contentWidth={width}
          source={{ html: content }}
          customHTMLElementModels={{ iframe: iframeModel }}
          renderersProps={{
            iframe: {
              scalesPageToFit: true,
            }
          }}
        />

        <Text style={styles.commentsSectionTitle}>Komentarze {comments.length ? `- ${comments.length}` : ''}</Text>

        {
          comments.length ? (
            comments.map(comment => <CommentItem key={comment.id} {...comment} />)
          ) : (
            <Text>Nikt jeszcze nie skomentował</Text>
          )
        }

      </ScrollView>
    </SafeAreaView>
  )
}

export default NewsDetailsScreen;