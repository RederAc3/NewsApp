import { View, ActivityIndicator } from "react-native"
import styles from './LoadingScreen.styles';

const LoadingScreen = () => (
    <View style={styles.loadingContainer}>
        <ActivityIndicator />
    </View>
)

export default LoadingScreen