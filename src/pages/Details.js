import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native"
import { styles } from "../styles/styles"
import { DetailsRecipe } from "../components/DetailsRecipe"
import { FontAwesome as Icone } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"

export function Details ({route}) {

    const {recipe} = route.params

    const navigation = useNavigation()

    const [favorito, setFavorito] = useState(recipe.isFavorito)

    const marcarFavorito = () => {
        setFavorito(!favorito)
    }

    return (
        
        <View style={styles.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
                
                <Text style={localStyle.title} >{recipe.nome}</Text>
                
                <Image
                    source={recipe.urlImage}
                    style={localStyle.image}
                />

                <DetailsRecipe ingredientes={recipe.ingredientes} modoPrepararo={recipe.modoPreparo}/>

                <View style={localStyle.containerButtons}>
                    <TouchableOpacity onPress={marcarFavorito}>
                        <Icone name="heart" size={40} color={favorito ? 'red' : 'gray'}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Icone name="arrow-left" size={30} color='#000' />
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    )    
}

const localStyle = StyleSheet.create({
    title : {
        fontSize : 25,
        fontWeight : 'bold',
        marginBlock : 17
    },
    image : {
        width : '100%',
        height : 200
    },
    containerButtons : {
        flexDirection : 'row',
        marginBlock : 25,
        justifyContent : 'space-between',
        width : '100%'
    }
})