import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 8,
        backgroundColor: '#dcdee3'
    },
    header: {
        flex: 2,
        backgroundColor: '#4267b2'
    },
    headerSearch: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 5
    },
    searchCamera: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchInput: {
        flex: 4,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#8da8d3',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchChat: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        flex: 1,
    },
    headerMenu: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#c6c7cc',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20
    },
    menuItem: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    content: {
        flex: 9,
    },
    story: {
        marginTop: 15,
        flex: 4,
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 15
    },

    // CreatePost
    createPost: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        padding: 10
    },
    searchCamera: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    postField: {
        flex: 4
    },
    searchChat: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    postInput: {
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#ccd0d5',
        paddingLeft: 20
    },

})