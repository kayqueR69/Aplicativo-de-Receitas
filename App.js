import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Nav = createNativeStackNavigator()
import TabRoutes from "./src/routes/TabRoutes";
import { Categorie } from "./src/pages/Categorie";
import { Details } from "./src/pages/Details";

export default function App() {
    return (
        <NavigationContainer>
            <Nav.Navigator screenOptions={{headerShown : false}}>
                <Nav.Screen name="index" component={TabRoutes}/>
                <Nav.Screen name="categorie" component={Categorie}/>
                <Nav.Screen name="details" component={Details}/>
            </Nav.Navigator>
        </NavigationContainer>
    );
}