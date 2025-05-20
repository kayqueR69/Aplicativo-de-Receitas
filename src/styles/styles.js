import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    page : {
        flex : 1,
        alignItems : 'center',
        backgroundColor : '#FFF',
        paddingInline : '2.5em'
    },
    header : {
        width : '100%',
        height : '70px',
        display : 'flex',
        alignItems : 'center',
        flexDirection : "row"
    },
    title : {
        color : 'red',
        fontSize : '2em',
        fontWeight : 'bold',
    },
    backButton : {
        height : 40,
        width : 40,
        marginRight : '1em',
        borderWidth : 1,
        borderStyle : 'solid',
        borderColor : 'black',
        borderRadius : 10,
        alignItems : 'center',
        justifyContent : 'center'
    }
})