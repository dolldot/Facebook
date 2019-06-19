import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1
      },
    banner: {
        width: '100%', 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    sectionOne: {
        flex: 3,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        marginTop: 20,
        width: 50, 
        height: 50, 
        backgroundColor: 'white', 
        borderRadius: 50,
    },
    heading: {
        color: '#2e4c88',
        fontWeight: 'bold',
        fontSize: 60,
        alignSelf: 'center',
        marginTop: -10
    },
    sectionTwo: {
        flex: 7,
        justifyContent: 'space-between',
        paddingLeft: 40,
        paddingRight: 40,
    },
    sectionForm: {
    
    },
    topInfo: {
        alignSelf: 'center',
        marginTop: 10
    },
    bottomInfo: {
        color: '#385898',
        alignSelf: 'center',
        fontWeight: 'bold',
        marginTop: 10
    },
    sectionFooter: {
        paddingBottom: 40,
        paddingLeft: 20,
        paddingRight: 20
    },
    textInput: {
        borderBottomWidth: 1,
        borderColor: '#eee',
        marginBottom: 10,
    },
    textSubmit: {
        backgroundColor: '#4e69a2',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderRadius: 5
    },
    registerButton: {
        backgroundColor: '#00a400',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderRadius: 5
    },
    submitText: {
        color: '#9daccb',
        fontWeight: 'bold'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
})