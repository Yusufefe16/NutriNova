import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Router';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

const Register = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Kayıt Sayfası</Text>
            {/* Burada register işlemleri olacak */}
            <Button title="Zaten hesabın var mı? Giriş yap" onPress={() => navigation.navigate('Login')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, marginBottom: 20 },
});

export default Register;
