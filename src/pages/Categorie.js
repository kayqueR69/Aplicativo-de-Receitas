import { useNavigation } from "@react-navigation/native"
import { View, Text, TouchableOpacity } from "react-native"
import { styles } from "../styles/styles"
import { FontAwesome as Icone } from "@expo/vector-icons"
import { CardRecipe } from "../components/CardRecipe"
import { recipes } from "../../data/recipes"

export function Categorie ({ route }) {

    const navigation = useNavigation()
    const { categorie, nameCategorie } = route.params

    const handlePress = () => {
        navigation.navigate('index')
    }

    return (
        <View style={styles.page}>
            <View style={styles.header}>

                <TouchableOpacity style={styles.backButton} onPress={handlePress}>
                    <Icone name="arrow-left" size={30} color='#000' />
                </TouchableOpacity>

                <Text style={styles.title}>{categorie}</Text>

            </View>

            <CardRecipe name={recipes.cafe[0].name} urlImage={recipes.cafe[0].urlImage} description={recipes.cafe[0].descricao}/>    
        </View>
    )
}