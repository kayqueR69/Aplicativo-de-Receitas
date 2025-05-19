import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./src/pages/Home";
import { Favorites } from "./src/pages/Favorites";
const Tab  = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                
                <Tab.Screen name="home" component={Home}/>
                <Tab.Screen name="favorites" component={Favorites}/>

            </Tab.Navigator>    
        </NavigationContainer>
    );
}