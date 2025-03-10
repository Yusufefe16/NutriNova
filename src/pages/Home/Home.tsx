import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/features/authSlice.tsx';
import { RootState } from '../../redux/store';

const Home = () => {
    const dispatch = useDispatch();
    const username = useSelector((state: RootState) => state.auth.user);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hoşgeldin, {username}</Text>
            <Button title="Çıkış Yap" onPress={() => dispatch(logout())} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, marginBottom: 20 },
});

export default Home;
