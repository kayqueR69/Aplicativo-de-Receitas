import { View, Text, FlatList, StyleSheet } from "react-native"

export function DetailsRecipe ({ingredientes, modoPrepararo}) {
    return (
        <View>
            <Text style={styles.title}>Ingredientes</Text>
            <FlatList 
                keyExtractor={(item) => item.id}
                data={ingredientes}
                renderItem={({item}) => <Ingrediente ingrediente={item}/>}
            />
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
        fontSize : '1.5em',
        marginBlock : '.7em'
    },
    ingrediente : {
        flexDirection : 'row'
    }
})