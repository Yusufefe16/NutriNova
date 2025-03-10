import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/features/authSlice';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Router';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = ({ navigation }: Props) => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');

    const handleLogin = () => {
        dispatch(loginSuccess(username));
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text >Giriş Yap</Text>
            <TextInput
                placeholder="Kullanıcı Adı"
                value={username}
                onChangeText={setUsername}
            />
            <Button title="Giriş Yap" onPress={handleLogin} />
            <Button title="Kayıt Ol" onPress={() => navigation.navigate('Register')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
});

export default Login;
