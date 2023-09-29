import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Character from '../API/endpoints/characters';

const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingFooter, setloadingFooter] = useState(false);
  const [pageActually, setPageActually] = useState(2);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await Character.GetCharacters();
    if (response?.results) {
      setData(response?.results);
      setLoading(false);
      setTotalPages(response?.info?.pages);
    }
  };

  const getDataPagination = async () => {
    if (pageActually <= totalPages) {
      setloadingFooter(true);
      const response = await Character.GetCharacters({page: pageActually});
      if (response?.results) {
        setData([...data, ...response?.results]);
        setLoading(false);
        setTotalPages(response?.info?.pages);
        setPageActually(value => value + 1);
        setloadingFooter(false);
      }
    }
  };

  const returnStyleStatus = status => {
    switch (status) {
      case 'Alive':
        return {borderColor: '#67d12d'};

      case 'Dead':
        return {borderColor: '#f44336'};

      default:
        return {borderColor: '#ffac2c'};
    }
  };

  const ListItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Profile', {
            item,
          })
        }
        style={styles.item}>
        <View style={[styles.containerImage, returnStyleStatus(item?.status)]}>
          <Image style={styles.image} source={{uri: item?.image}} />
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.name}>{item?.name}</Text>
          <Text style={styles.subtitle}>{item?.species}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderFooter = () => {
    if (loadingFooter) {
      return <ActivityIndicator size="large" />;
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator style={styles.loading} size="large" />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => <ListItem item={item} />}
          onEndReached={getDataPagination}
          onEndReachedThreshold={0.1}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListFooterComponent={renderFooter}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  loading: {
    marginTop: 50,
  },
  item: {
    flexDirection: 'row',
    margin: 10,
  },
  containerImage: {
    borderWidth: 0.8,
    borderRadius: 100,
    padding: 9,
    borderColor: '#9bca3d',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  containerInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
  name: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
    color: "#000"
  },
  subtitle: {},
  separator: {
    height: 0.5,
    backgroundColor: 'rgba(0,0,0,0.1)',
    margin: 10,
  },
  text: {
    fontSize: 15,
    color: 'black',
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: '#800000',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default Home;
