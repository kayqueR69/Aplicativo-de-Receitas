import { TouchableOpacity, View, Text } from "react-native"
import { MaterialIcons as Icone } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { StyleSheet } from "react-native"

export function CategorieButton ({iconName, nameCategorie, categorie}) {

    const navigation = useNavigation()

    const handlePress = () => {
        navigation.navigate('categorie', {categorie : categorie, nameCategorie : nameCategorie})
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <View>
                <Icone name={iconName} color={'#FFF'} size={40}/>
            </View>
            <View>
                <Text style={styles.textCategorie}>{categorie}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        width : '100%',
        height : 70,
        borderRadius : 10,
        backgroundColor : 'red',
        flexDirection : 'row',
        alignItems : 'center',
        paddingInline : 19,
        gap : 15,
        marginBlock : 15
    },
    textCategorie : {
        color : '#fff',
        fontSize : 22,
        fontWeight : 'bold'
    }
})