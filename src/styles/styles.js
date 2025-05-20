import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    page : {
        flex : 1,
        alignItems : 'center',
        backgroundColor : '#FFF',
        paddingVertical : 50,
        paddingLeft : 40,
        paddingRight : 40
    },
    header : {
        width : '100%',
        height : 70,
        display : 'flex',
        alignItems : 'center',
        flexDirection : "row",
    },
    title : {
        color : 'red',
        fontSize : 30,
        fontWeight : 'bold',
    },
    backButton : {
        height : 40,
        width : 40,
        marginRight : 25,
        borderWidth : 1,
        borderStyle : 'solid',
        borderColor : 'black',
        borderRadius : 10,
        alignItems : 'center',
        justifyContent : 'center'
    }
})