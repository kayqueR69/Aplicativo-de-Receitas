import { View, Text, FlatList, TouchableOpacity } from "react-native"
import { styles } from "../styles/styles"
import { useNavigation } from "@react-navigation/native"
import { FontAwesome as Icone } from "@expo/vector-icons"
import { useEffect, useState } from "react"
import { recipes } from "../../data/recipes"
import { CardRecipe } from "../components/CardRecipe"

export function Favorites () {

    const navigation = useNavigation()

    const [listaRecipes, setListaRecipes] = useState([])

    useEffect(() => {
        for (let c = 0; c < recipes.cafe.length; c++) {
            if (recipes.cafe[c].isFavorito) {
                listaRecipes.push(recipes.cafe[c])
            }
        }
        for (let c = 0; c < recipes.almoco.length; c++) {
            if (recipes.almoco[c].isFavorito) {
                listaRecipes.push(recipes.almoco[c])
            }
        }
        for (let c = 0; c < recipes.jantar.length; c++) {
            if (recipes.jantar[c].isFavorito) {
                listaRecipes.push(recipes.jantar[c])
            }
        }
    }, [])

    return (    
        <View style={styles.page}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Icone name="arrow-left" size={30} color={'#000'}/>
                </TouchableOpacity>
                <Text style={styles.title} >Favoritos</Text>
            </View>
            <FlatList
                keyExtractor={(item) => item.id}
                data={listaRecipes}
                renderItem={({item}) => <CardRecipe recipe={item}/>}
            />
        </View>
    )
}