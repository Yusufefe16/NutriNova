import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './Input.style.tsx';

const Input = ({ placeholder, value, onChangeText, iconName, isSecure }: { placeholder: string, value: string, onChangeText: any, iconName: string, isSecure:boolean }) => {
    return (
        <View style={styles.container}>
            <TextInput placeholder={placeholder} onChangeText={onChangeText} value={value} secureTextEntry={isSecure}/>
        </View>
    );
};

export default Input;
