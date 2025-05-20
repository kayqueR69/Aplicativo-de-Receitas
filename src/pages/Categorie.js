import { useNavigation } from "@react-navigation/native"
import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from "react-native"
import { styles } from "../styles/styles"
import { FontAwesome as Icone } from "@expo/vector-icons"
import { CardRecipe } from "../components/CardRecipe"
import { recipes } from "../../data/recipes"
import { useState } from "react"

export function Categorie ({ route }) {

    const navigation = useNavigation()
    const { categorie, nameCategorie } = route.params

    const handlePress = () => {
        navigation.navigate('index')
    }

    const [listaRecipes, setListaRecipes] = useState(() => {
        if (nameCategorie === 'cafe') {
            return recipes.cafe
        } else if (nameCategorie === 'almoco') {
            return recipes.almoco
        } else {
            return recipes.jantar
        }
    })

    return (
        <SafeAreaView style={styles.page}>
            <View style={styles.header}>

                <TouchableOpacity style={styles.backButton} onPress={handlePress}>
                    <Icone name="arrow-left" size={30} color='#000' />
                </TouchableOpacity>

                <Text style={styles.title}>{categorie}</Text>

            </View>

            {listaRecipes.length > 0 ? (
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={listaRecipes}
                    renderItem={({item}) => (<CardRecipe recipe={item}/>)}
                />
            ) : (
                <View>
                    <Text>Não a nenhuma receita nesta categoria</Text>
                </View>
            )} 
        </SafeAreaView>
    )
}