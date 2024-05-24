import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Text,
  Alert,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from '../../styles/globalStyles';

const DashboardItemView = ({props}) => {
  return (
    <TouchableOpacity onPress={() => props.onItemClick(props.dashboardItem)}>
      <View
        style={{...styles.card, marginTop: 5, marginStart: 5, marginEnd: 5}}>
        <Text
          style={{
            padding: 2,
            fontWeight: 'bold',
            color: '#ff0000',
          }}>
          {props.dashboardItem.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default DashboardItemView;
