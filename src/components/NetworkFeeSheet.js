import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {theme} from '../theme/Theme';
import Button from './Button';

export default function NetworkFeeSheet({refRBSheet}) {
  return (
    <RBSheet
      ref={refRBSheet}
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
      height={440}>
      <View style={styles.bottomsheetContainer}>
        <View
          style={{
            height: 5,
            width: 35,
            backgroundColor: theme.lightColor.gray,
            alignSelf: 'center',
            borderRadius: 4,
          }}
        />
        <View style={styles.upperContainer}>
          <TouchableOpacity
            style={styles.crossButton}
            onPress={() => refRBSheet.current.close()}>
            <Text style={styles.crossButtonText}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.middleContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/bottomLogo.png')}
              style={styles.logoimg}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.heading}>What is network fee?</Text>
          <Text style={[styles.paragraph, {marginTop: 20}]}>
            This is the estimated fee paid to miners who
          </Text>
          <Text style={[styles.paragraph, {marginTop: 1}]}>
            process your transaction over blockchain.
          </Text>
          <Text style={[styles.paragraph, {marginTop: 10}]}>
            This fee would vary depending on
          </Text>
          <Text style={[styles.paragraph, {marginTop: 1}]}>
            transaction complexity and network traffic.
          </Text>
        </View>
        <Button title={'Got it'} />
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>Fee Setting</Text>
        </View>
      </View>
    </RBSheet>
  );
}

const styles = StyleSheet.create({
  bottomsheetContainer: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  upperContainer: {
    alignItems: 'flex-end',
    margin: 20,
  },
  crossButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: '#7F7F7F',
  },
  crossButtonText: {
    color: '#C2C2C2',
    fontSize: 16,
  },
  middleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 35,
  },
  logoContainer: {
    backgroundColor: '#7F7F7F',
    justifyContent: 'center',
    alignItems: 'center',
    height: 47,
    width: 47,
    borderRadius: 50,
  },
  logoimg: {
    height: 35,
    width: 35,
  },
  heading: {
    marginTop: 10,
    fontSize: 18,
    color: '#ffffff',
    fontFamily: theme.fontFamily.InterMedium,
  },
  paragraph: {
    fontSize: 13,
    color: '#94969C',
    fontFamily: theme.fontFamily.InterRegular,
  },
  bottomContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  bottomText: {
    color: '#F5F5F6',
    fontSize: 10,
    textDecorationLine: 'underline',
    fontFamily: theme.fontFamily.InterBold,
  },
});
