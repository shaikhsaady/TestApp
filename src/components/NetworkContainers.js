import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function NetworkContainers({
  imgsource,
  networksName,
  time,
  coinQuantity,
  usdQuantity,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.middleContainer}>
        <Image
          source={imgsource}
          style={styles.networkimg}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.networkName}>{networksName}</Text>
          <Text style={styles.timeTransfer}>{time}</Text>
        </View>
        <View style={styles.coinContainer}>
          <Text style={styles.coinName}>{coinQuantity}</Text>
          <Text style={styles.coinNameUSD}>({usdQuantity})</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#262B30',
    borderRadius: 8,
    height: 66,
    justifyContent: 'center',
  },
  middleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  networkimg: {
    width: 24,
    height: 34,
    marginHorizontal: 10,
  },
  networkName: {
    fontSize: 14,
    color: '#F5F5F6',
    fontWeight: '500',
  },
  coinContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  coinName: {
    fontSize: 12,
    color: '#F5F5F6',
    marginLeft: 100,
  },
  coinNameUSD: {
    fontSize: 10,
    color: '#94969C',
    marginLeft: 3,
  },
  timeTransfer: {
    color: '#1CDB82',
    fontSize: 10,
    marginTop: 3,
  },
});
