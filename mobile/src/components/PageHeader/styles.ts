import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor : '#8257E5',
        padding: 40,
    },
    topBar:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
    },
    title:{
        fontFamily: 'Archivo_600SemiBold',
        color: '#fff',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 160,
        marginBottom: 40,
        marginTop:20,
    },
 
});

export default styles;