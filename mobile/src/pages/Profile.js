import React from 'react';
import {View, Text} from 'react-native';

function Profile ({navigation}){
    const placeName = navigation.getParam ('placeName')
    return <View>
        <Text>{`${placeName}`}</Text>
    </View>
}


export default Profile;