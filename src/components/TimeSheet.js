import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NetworkContainers from './NetworkContainers';
import RBSheet from 'react-native-raw-bottom-sheet';
import {theme} from '../theme/Theme';

export default function TimeSheet({refRBSheetMenu}) {
  return (
    <RBSheet
      ref={refRBSheetMenu}
      closeOnDragDown={true}
      closeOnPressMask={true}
      customStyles={{
        wrapper: {
          backgroundColor: 'transparent',
        },
        draggableIcon: {
          backgroundColor: theme.lightColor.gray,
          width: 80,
        },
      }}
      customModalProps={{
        animationType: 'slide',
        statusBarTranslucent: true,
      }}
      customAvoidingViewProps={{
        enabled: false,
      }}
      height={280}>
      <View style={styles.Container}>
        <View
          style={{
            height: 5,
            width: 35,
            backgroundColor: theme.lightColor.gray,
            alignSelf: 'center',
            borderRadius: 4,
          }}
        />
        <View style={styles.Content}>
          <Text style={styles.heading}>Network fee</Text>
          <NetworkContainers
            networksName={'Standard'}
            imgsource={require('../assets/images/Clock.png')}
            coinQuantity={'0.0037ETH'}
            usdQuantity={'3.36usd'}
            time={'-30 Seconds'}
          />
          <NetworkContainers
            networksName={'Fast'}
            imgsource={require('../assets/images/star.png')}
            coinQuantity={'0.0076ETH'}
            usdQuantity={'10.30usd'}
            time={'-10 Seconds'}
          />
        </View>
      </View>
    </RBSheet>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  Content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  heading: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '700',
  },
});
