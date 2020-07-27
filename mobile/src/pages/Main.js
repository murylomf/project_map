import React, {useEffect, useState} from 'react';
import {StyleSheet, Image, View, Text, TextInput, TouchableOpacity, Button} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import {requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location'
import {MaterialIcons} from '@expo/vector-icons'; //pesquisar os icons

import api from '../services/api';

function Main({navigation}){
  const [places, setPlace] = useState([]);
  const [currentRegion, setcurrentRegion] = useState(null);

    useEffect(() => { 
        async function carregar (){
           await loadInitialPosition();
            await loadPlaces();
        }
        carregar();
    }, []); 

    async function loadInitialPosition(){
        const { granted } = await requestPermissionsAsync();

        if (granted){
            const {coords} = await getCurrentPositionAsync({
                enableHighAccuracy: true,
            });

            const {latitude, longitude} = coords;

            setcurrentRegion ({
                latitude,
                longitude,
                latitudeDelta: 0.04,
                longitudeDelta: 0.04,
            })
        }
     }

    async function loadPlaces (){

        const response = await api.get('/places')
        setPlace(response.data);

    }

    function hadleRegionChanged (region){
        setcurrentRegion(region);
    }

    if (!currentRegion) {
        return null;
    }

    return(
        <>
        <MapView onRegionChangeComplete = {hadleRegionChanged}
        initialRegion = {currentRegion} style={styles.map} >
        
        {places.map (place => {
            console.log(place)
           return (
            <Marker
            key = {place._id}
            coordinate = {{
                latitude: place.location.coordinates[1], 
                longitude: place.location.coordinates[0],
                }}>

             <Callout onPress = {() => {
                 navigation.navigate('Profile', {
                     placeName : place.name
                    })
             }}>
                 <View style = {styles.callout}>
                     <Text style = {styles.placeName}>{place.name}</Text>
                     <Text style = {styles.placeYear}>{place.year}</Text>
                     <Text style = {styles.placeDetail}>{place.description}</Text>
                 </View>
             </Callout>
             </Marker>
        
        )}
        )}
       
        </MapView>      
</>
        
)}
   


const styles = StyleSheet.create({
    map: {
        flex: 1
    },

    avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#FFF'
    },
    callout: {
        width: 230,
    },
    placeName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    placeYear: {
        fontStyle: 'italic',
        color: 'grey'
    },

    placeDetail: {
        marginBottom: 3,
    },
    
})


export default Main;