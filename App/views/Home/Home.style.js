import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    loginText: {
        fontWeight: 'bold', 
        color: '#9daccb'
      },
      loginButton: {
        backgroundColor: '#4e69a2', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 10, 
        borderRadius: 5
      },
    container: {
        flex: 8,
        backgroundColor: '#dcdee3'
    },

    // content section
    content: {
        flex: 9,
    },

    // story section
    story: {
        marginTop: 12,
        flex: 4,
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 15
    },

    // CreatePost
    createPost: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        padding: 10,
    },
    searchCamera: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: 'blue',
        borderRadius: 50,
        height: 45,
        overflow: 'hidden'
    },
    postField: {
        flex: 5,
        marginLeft: 5,
        marginRight: 5,
        height: 45
    },
    searchChat: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 45
    },
    postInput: {
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#ccd0d5',
        paddingLeft: 20
    },

})