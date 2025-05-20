import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Nav = createNativeStackNavigator()
import TabRoutes from "./src/routes/TabRoutes";
import { Categorie } from "./src/pages/Categorie";

export default function App() {
    return (
        <NavigationContainer>
            <Nav.Navigator screenOptions={{headerShown : false}}>
                <Nav.Screen name="index" component={TabRoutes}/>
                <Nav.Screen name="categorie" component={Categorie}/>
            </Nav.Navigator>
        </NavigationContainer>
    );
}