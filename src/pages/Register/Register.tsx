import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Router';
import Input from '../../components/commonComponents/Input';
import {Formik} from 'formik';
import styles from './Register.style.tsx';
import * as Yup from 'yup';
import Button from '../../components/commonComponents/Button';

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

const Register = ({ navigation }: Props) => {

    const validationSchema = Yup.object().shape({
        email: Yup.string().required('Email adresi zorunludur'),
        username: Yup.string().required('Kullanıcı adı zorunludur'),
        password: Yup.string().min(6, 'Şifre en az 6 karakter olmalıdır').required('Şifre zorunludur'),
    });

    const handleLogin = (values: { email: string; username: string; password: string }) => {
        console.log(values);
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ email: '', username: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
            >
                {({ handleSubmit, handleChange, values, errors, touched }) => (
                    <View style={styles.body_container}>
                        <Input
                            isSecure={false}
                            iconName="account"
                            placeholder="Email adresinizi giriniz..."
                            onChangeText={handleChange('email')}
                            value={values.email}
                        />
                        {touched.username && errors.username && <Text style={styles.errorText}>{errors.email}</Text>}
                        <Input
                            isSecure={false}
                            iconName="account"
                            placeholder="Kullanıcı adını giriniz..."
                            onChangeText={handleChange('username')}
                            value={values.username}
                        />
                        {touched.username && errors.username && <Text style={styles.errorText}>{errors.username}</Text>}

                        <Input
                            isSecure={true}
                            iconName="key"
                            placeholder="Şifrenizi giriniz..."
                            onChangeText={handleChange('password')}
                            value={values.password}
                        />
                        {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

                        <Button text="Giriş Yap" onPress={handleSubmit} />
                        <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.registerButtonText}>Zaten bir hesabınız var mı? Oturum aç</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
    );
};


export default Register;
