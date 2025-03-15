import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a7debe',
        justifyContent: 'center', // centers vertically
    },
    body_container: {
    },
    logo_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        resizeMode: 'contain',
        width: '100%',
        height: 500,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
        marginLeft: 5,
    },
    registerButton: {
        alignItems: 'center',
    },
    registerButtonText: {
        color: '#486583',
        fontSize: 16,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});
