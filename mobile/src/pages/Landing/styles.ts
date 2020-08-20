import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : '#8257E5',
        justifyContent: 'center',
        padding: 40,
    },

    banner:{
        width: '100%',
        resizeMode: 'contain',
        alignSelf:"center",
    },
    title:{
        fontFamily: 'Poppins_400Regular',
        color:'#fff',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 25,
    },
    titleBold:{
        fontFamily: 'Poppins_600SemiBold',
    },
    buttonsContainer:{
        flexDirection: 'row',
        marginTop: 25,
        justifyContent: 'space-between',
    },
    button:{
        height: 120,
        width: '47%',
        backgroundColor: '#333',
        borderRadius: 8,
        padding:20,
        justifyContent: 'space-between',
    },
    buttonPrimary: {
        backgroundColor: '#9871f5',
    },
    buttonSecondary: {
        backgroundColor: '#04d361',
    },
    buttonText:{
        fontFamily: 'Archivo_600SemiBold',
        color: '#fff',
        fontSize:20,
    },

    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
        fontSize:12,
        lineHeight: 20,
        maxWidth: 140,
        marginVertical:20,

    },



});

export default styles;