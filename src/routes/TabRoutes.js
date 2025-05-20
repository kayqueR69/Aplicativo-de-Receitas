import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from '../pages/Home'
import { Favorites } from '../pages/Favorites'
import { FontAwesome as Icone } from "@expo/vector-icons";

const Tab  = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon : ({focused}) => {
                let iconName

                if (route.name === 'home') {
                    iconName = 'home'
                } else if (route.name === 'favorites') {
                    iconName = 'heart'
                }

                return <Icone name={iconName} size={20} color='#fff'/>
            },
            headerShown : false,
            tabBarActiveBackgroundColor : 'red',
            tabBarInactiveBackgroundColor : 'red'
        })}>
            
            <Tab.Screen name="home" component={Home}/>
            <Tab.Screen name="favorites" component={Favorites}/>

        </Tab.Navigator>    
    );
}