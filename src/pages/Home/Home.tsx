import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Router.tsx';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

const Home = ({ navigation }: Props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>NutriNova Diyet Uygulaması</Text>
            <Button title="Yemek Planı" onPress={() => navigation.navigate('MealPlanner')} />
            <Button title="Hatırlatıcılar" onPress={() => navigation.navigate('Reminder')} />
            <Button title="Diyet Raporu" onPress={() => navigation.navigate('DietReport')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
});

export default Home;
