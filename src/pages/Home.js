import { View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { styles } from "../styles/styles"
import { CategorieButton } from "../components/CategorieButton"
import { SafeAreaView } from "react-native"

export function Home () {
    
    const navigation = useNavigation()

    const handlePress = () => {
        navigation.navigate('categories')
    }

    return (
        <SafeAreaView style={styles.page}>
            
            <View style={styles.header}>
                <Text style={styles.title}>Categorias</Text>
            </View>

            <CategorieButton iconName='coffee' categorie='Café da Manhã' nameCategorie='cafe'/>
            <CategorieButton iconName='brunch-dining' categorie='Almoço' nameCategorie='almoco'/>
            <CategorieButton iconName='dinner-dining' categorie='Jantar' nameCategorie='jantar' />

        </SafeAreaView>
    )
}