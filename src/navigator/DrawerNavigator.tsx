import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import clientTab from './clientTab';
import { Icon } from 'react-native-elements';
import { color } from '../global/styles';
import BusinessConsole from '../screens/Admin/BusinessConsole';
import DrawerContent from "../components/DrawerContent";

const  Drawer=createDrawerNavigator();
export default function DrawerNavigator(){
    return(
        <Drawer.Navigator drawerContent={props=><DrawerContent {...props} />}>
            <Drawer.Screen 
                name='clientTab'
                component={clientTab}
                options={{
                    title:"Home",
                    headerShown: false,
                    drawerIcon:({focused,size})=>(
                        <Icon type='material-community' name='home' color={focused ? '#7cc' : color.grey2} size={size}/>
                    )
                    
                  }}
            />
             <Drawer.Screen 
                name='BusinessConsole'
                component={BusinessConsole}
                options={{
                    title:"Business console",
                    headerShown: false,
                    drawerIcon:({focused,size})=>(
                        <Icon type='material' name='business' color={focused ? '#7cc' : color.grey2} size={size}/>
                    )
                    
                  }}
            />
        </Drawer.Navigator>
    )
}