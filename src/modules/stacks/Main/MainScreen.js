import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import styles from './styles';

import {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import regions from '../Main/components/RegionData/regions.json';
import MapView from 'react-native-map-clustering';
import {widthPercentage} from '../../../constants/StyleVariables';

const MainScreen = props => {
  const [currentPosition, setCurrentPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        setCurrentPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => alert(error.message),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      },
    );
  }, []);
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: currentPosition.latitude,
          longitude: currentPosition.longitude,
          latitudeDelta: 50.095,
          longitudeDelta: 50.0121,
        }}
        initialCamera={{
          center: {
            latitude: currentPosition.latitude,
            longitude: currentPosition.longitude,
          },
        }}
        showsUserLocation>
        {regions.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.lat,
              longitude: marker.lon,
            }}
            title={marker.Country}
            description={marker.alpha2}>
            <Callout
              onPress={() => {
                props.navigation.navigate('MainDetail', {
                  country: marker.Country,
                  alpha2: marker.alpha2,
                });
              }}>
              <View>
                <Text style={{fontSize: widthPercentage(2.5)}}>
                  {marker.Country}
                </Text>
                <Text style={{fontSize: widthPercentage(2)}}>
                  Region: {marker.alpha2}
                </Text>
                <Text
                  style={{
                    fontSize: widthPercentage(2),
                    marginTop: widthPercentage(1),
                    fontWeight: '600',
                  }}>
                  Click to view
                </Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default MainScreen;
