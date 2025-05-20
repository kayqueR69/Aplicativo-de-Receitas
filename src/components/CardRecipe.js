import { useNavigation } from "@react-navigation/native"
import { View, Text, StyleSheet, Image , TouchableOpacity} from "react-native"

export function CardRecipe ({recipe}) {

    const navigation = useNavigation()

    const handlePress = () => {
        navigation.navigate('details', {recipe : recipe})
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <Image 
                source={recipe.urlImage ? recipe.urlImage : require('../../assets/images/unknow.jpg')} 
                style={styles.image} 
            />

            <View style={styles.containerText}>
                <Text style={styles.title}>{recipe.nome}</Text>
                <Text style={styles.description}>{recipe.descricao}</Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        width : '100%',
        height : 110,
        flexDirection : 'row',
        alignItems : 'center',
        gap : 15
    },
    image : {
        height : 100,
        width : 100,
        borderRadius : 10
    },
    containerText : {
        height : 100,
        width : 190,
        flexDirection : 'column',
    },
    title : {
        fontWeight : 'bold',
        fontSize : 15
    },
    description : {
        display : 'flex',
        flexWrap : 'wrap'
    }
})