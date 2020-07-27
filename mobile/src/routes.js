import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions:{
                title: 'TCC',
            }
        },
        Profile: { 
            screen: Profile,
            navigationOptions:{
                title: 'Detalhes'
            }
        },
    }, {
        defaultNavigationOptions:{
            //headerTintColor: '#CD853F',
            headerTitleAlign: 'center',
            headerTransparent: 'true',
            headerBackTitleVisable: 'false',
            headerStyle:{
                backgroundColor: '#CD853F',  
            }
        }
    })
);

export default Routes;