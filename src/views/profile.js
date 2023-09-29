import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';

const Profile = ({route}) => {
  const {item} = route.params;

  const returnStyleStatus = status => {
    switch (status) {
      case 'Alive':
        return {backgroundColor: '#f2fcee', color: '#67d12d'};

      case 'Dead':
        return {backgroundColor: '#ffeff6', color: '#f44336'};

      default:
        return {backgroundColor: '#fff8ed', color: '#ffac2c'};
    }
  };

  const returnSpecie = specie => {
    switch (specie) {
      case 'Human':
        return require('../images/humano.png');

      case 'Alien':
        return require('../images/alien.png');

      default:
        return require('../images/desconocido.png');
    }
  };

  const returnGender = gender => {
    switch (gender) {
      case 'Male':
        return require('../images/masculino.png');

      case 'Female':
        return require('../images/femenino.png');

      default:
        return require('../images/desconocido.png');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image style={styles.image} source={{uri: item?.image}} />
      </View>
      <View style={styles.containerInfo}>
        <Text style={styles.name}>{item?.name}</Text>
        <Text style={[styles.status, returnStyleStatus(item?.status)]}>
          {item?.status}
        </Text>
      </View>
      <View style={styles.containerData}>
        <View style={styles.containerIconText}>
          <View style={styles.containerIcon}>
            <Image style={styles.icon} source={returnSpecie(item?.species)} />
          </View>
          <Text>{item?.species}</Text>
        </View>
        <View style={styles.containerIconText}>
          <View style={styles.containerIcon}>
            <Image style={styles.icon} source={returnGender(item?.gender)} />
          </View>
          <Text>{item?.gender}</Text>
        </View>
      </View>
      <View style={[styles.containerData, {justifyContent: 'center'}]}>
        <View style={styles.containerIconText}>
          <View style={styles.containerIcon}>
            <Image
              style={styles.icon}
              source={require('../images/planeta.png')}
            />
          </View>
          <Text>{item?.origin?.name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  containerImage: {
    borderWidth: 0.5,
    borderRadius: 200,
    padding: 10,
    borderColor: '#0caec4',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 200,
  },
  containerInfo: {
    marginTop: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
    maxWidth: '80%',
    color: '#000',
  },
  status: {
    marginTop: 10,
    paddingVertical: 6,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  origin: {textAlign: 'center', marginTop: 15},
  containerData: {
    flexDirection: 'row',
    marginTop: 25,
    width: '55%',
    justifyContent: 'space-between',
  },
  containerIconText: {
    alignItems: 'center',
  },
  containerIcon: {
    borderWidth: 0.5,
    borderRadius: 200,
    padding: 10,
    borderColor: '#0caec4',
  },
  icon: {
    width: 50,
    height: 50,
  },
});

export default Profile;
