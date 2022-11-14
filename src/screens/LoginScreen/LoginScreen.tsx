import axios from "axios";
import { useState, useCallback } from "react";
import { View, Keyboard, Text, ActivityIndicator, TextInput, TouchableOpacity } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./LoginScreen.styles";

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)

    const { navigate } = useNavigation();

    useFocusEffect(
        useCallback(() => {
            return () => {
                setUsername('');
                setPassword('');
                setError('');
            }
        }, [])
    )

    const validateInput = () => {
        if (!username.length || !password.length) {
            setError("Podaj dane!")
            return;
        } else setError('');
    }

    const onLoginButtonPressed = async () => {
        if (loading) {
            return;
        }

        setLoading(true);
        validateInput()

        try {
            if (username.length && password.length) {

                const { data: { token } } = await axios.post("https://afreactrecrutation.azurewebsites.net/api/Auth", { username, password });

                if (token) {
                    Keyboard.dismiss()
                    
                    try {
                        await AsyncStorage.setItem("token", token)

                    } catch (err) {
                        console.log("[ AsyncStorage ]", err)
                    }

                    navigate("News");

                } else setError("Wystąpił błąd")

            }

        } catch (err) {
            setError("Wystąpił błąd, dane nie poprawne!")
        }
        setLoading(false);
    }

    return (
        <View style={styles.loginContainer}>
            <View style={styles.loginFieldContainer}>
                <Text style={styles.inputTitle}>Email</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder={"Podaj email..."}
                    value={username.trim()}
                    onChangeText={setUsername}
                    onSubmitEditing={onLoginButtonPressed}
                />

                <Text style={styles.inputTitle}>Hasło</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder={"Podaj hasło..."}
                    secureTextEntry={true}
                    value={password.trim()}
                    onChangeText={setPassword}
                    onSubmitEditing={onLoginButtonPressed}
                />
                {error && <Text style={styles.errorText}>{error}</Text>}

            </View>
            <TouchableOpacity style={styles.loginButton} onPress={onLoginButtonPressed}>
                {loading ? <ActivityIndicator /> : <Text style={styles.loginButtonText}>Zaloguj</Text>}
            </TouchableOpacity>
        </View>
    );
};



export default LoginScreen;