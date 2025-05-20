import { View, Text, FlatList } from "react-native"
import { StyleSheet } from "react-native"

export function DetailsRecipe ({ingredientes, modoPrepararo}) {
    return (
        <View>
            <Text style={styles.title}>Ingredientes</Text>

            {ingredientes ? ingredientes.map((item, key) => {
                return <Ingrediente key={key} ingrediente={item}/>
            }) : () => {return <Text>Falha</Text>}}

            <Text style={styles.title}>Modo de Preparo</Text>
            <Text>{modoPrepararo}</Text>
        </View>
    )
}

function Ingrediente ({ingrediente}) {
    return (
        <View style={styles.ingrediente}>
            <Text>• </Text>
            <Text>{ingrediente}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title : {
        fontWeight : 'bold',
        fontSize : 19,
        marginBlock : 17
    },
    ingrediente : {
        flexDirection : 'row'
    }
})