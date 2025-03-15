import React from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/features/authSlice';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Router';
import Button from '../../components/commonComponents/Button';
import Input from '../../components/commonComponents/Input';
import styles from './Login.style.tsx';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = ({ navigation }: Props) => {
    const dispatch = useDispatch();

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Kullanıcı adı zorunludur'),
        password: Yup.string().min(6, 'Şifre en az 6 karakter olmalıdır').required('Şifre zorunludur'),
    });

    const handleLogin = (values: { username: string; password: string }) => {
        dispatch(loginSuccess(values.username));
        navigation.navigate('Home');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../../assets/diet-logo.png')} />
            </View>

            <Formik
                initialValues={{ username: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
            >
                {({ handleSubmit, handleChange, values, errors, touched }) => (
                    <View style={styles.body_container}>
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
                        <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Register')}>
                            <Text style={styles.registerButtonText}>Hesabın yok mu? Kayıt Ol</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </SafeAreaView>
    );
};

export default Login;
