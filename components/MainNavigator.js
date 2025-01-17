import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from '../screens/ChatScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ImageScreen from '../screens/ImageScreen';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../constants/Colors';
import SettingsNavigator from './SettingsNavigator';

const options = {
    headerTitleStyle: {
        fontFamily: 'black',
        colors: colors.textColor
    },
    tabBarLabelStyle: {
        fontFamily: 'black',
        colors: colors.textColor
    },
    tabBarShowLabel: false
}

const Tab = createBottomTabNavigator();

export default MainNavigator = () => {
    return ( 
        <Tab.Navigator>
            <Tab.Screen name="Chat" component={ChatScreen} options={
                {
                    ...options,
                    tabBarIcon: (props) => {
                        const size = props.size;
                        const color = props.color;
                        return <MaterialCommunityIcons name="chat-processing-outline" size={size} color={color} />

                    }
                }
            } />
            <Tab.Screen name="Image" component={ImageScreen} options={
                {
                    ...options,
                    tabBarIcon: (props) => {
                        const size = props.size;
                        const color = props.color;
                        return <MaterialCommunityIcons name="image-outline" size={size} color={color} />

                    }
                }
            } />
            
            <Tab.Screen name="Settings" component={SettingsNavigator} options={
                {
                    ...options,
                    headerShown: false,
                    tabBarIcon: (props) => {
                        const size = props.size;
                        const color = props.color;
                        return <Ionicons name="settings" size={size} color={color} />

                    }
                }
            } />
        </Tab.Navigator>
    );
};
