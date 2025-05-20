import { View, Text, StyleSheet, Image } from "react-native"

export function CardRecipe ({name, urlImage, description}) {
    return (
        <View style={styles.container}>
            <Image 
                source={urlImage ? urlImage : require('../../assets/images/unknow.jpg')} 
                style={styles.image} 
            />

            <View style={styles.containerText}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        width : '100%',
        height : 110,
        flexDirection : 'row',
        alignItems : 'center',
        gap : '1em'
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
        fontSize : '1em'
    },
    description : {
        display : 'flex',
        flexWrap : 'wrap'
    }
})