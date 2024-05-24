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
} from 'react-native';
import styles from '../../styles/globalStyles';
import ContainerView from '../../components/ContainerView';
import {useComponentDidMount} from '../../utils/ReactLifeCycle';
import REACT_CATEGORY from '../../data/reactItems';
import DashboardItemView from './DashboardItemView';

const DashboardScreen = ({route, navigation}) => {
  const [categoryList, setCategoryList] = useState([]);

  useState(() => {
    setCategoryList([{id: 1, name: 'siba', route: 'sdsd'}]);
    console.log(REACT_CATEGORY);
  }, []);

  const renderDashboardItem = ({dashboardItem}) => {
    console.log('dashboardItem  => ' + dashboardItem);
    return (
      <DashboardItemView
        dashboardItem={dashboardItem}
        onItemClick={onItemClick}
      />
    );
  };

  onItemClick = item => {
    console.log('onItemClick => ' + item.name);
    navigation.navigate(item.route);
  };

  return (
    <SafeAreaView style={styles.baseContainer}>
      <ContainerView>
        <FlatList
          style={{width: '100%'}}
          data={categoryList}
          keyExtractor={item => item.id.toString()}
          renderItem={renderDashboardItem}
        />
      </ContainerView>
    </SafeAreaView>
  );
};

const internalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  image: {
    justifyContent: 'center',
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'red',
    alignSelf: 'center',
  },
  smallImage: {
    justifyContent: 'center',
    width: 40,
    height: 40,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});

export default DashboardScreen;
