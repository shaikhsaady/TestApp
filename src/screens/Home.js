import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {theme} from '../theme/Theme';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import Text_Input from '../components/Text_Input';
import SvgIcon from '../assets/svgs/SvgIcon';
import Xmls from '../utils/Xmls';
import Button from '../components/Button';
import NetworkFeeSheet from '../components/NetworkFeeSheet';
import TimeSheet from '../components/TimeSheet';
import ValidationError from '../components/ValidationError';

export default function Home() {
  const refRBSheet = useRef(null);
  const refRBSheetMenu = useRef(null);
  const [input, setInput] = useState({
    sendingInput: '',
    receivingInput: '',
  });
  const [inputError, setInputError] = useState({
    sendingInputError: '',
    receivingInputError: '',
  });
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [openSec, setOpenSec] = useState(false);
  const [valueSec, setValueSec] = useState(null);
  const [items, setItems] = useState([
    {
      label: 'DAU',
      value: 'DAU',
      icon: () => (
        <Image
          source={require('../assets/images/firstIcon.png')}
          style={{width: 24, height: 25}}
          resizeMode="contain"
        />
      ),
    },
    {
      label: 'USD',
      value: 'USD',
      icon: () => (
        <Image
          source={require('../assets/images/secIcon.png')}
          style={{width: 24, height: 25}}
          resizeMode="contain"
        />
      ),
    },
  ]);
  useEffect(() => {
    if (!value) {
      setValue(items[0].value);
    }
  }, []);

  useEffect(() => {
    if (!valueSec) {
      setValueSec(items[1].value);
    }
  }, []);

  const validateSendingNumber = value => {
    setInput(prev => ({...prev, sendingInput: value}));
    setInput(prev => ({...prev, receivingInput: `${value * 2500 - 0.005}`}));
    const regex = /^\d+(\.\d{1,18})?$/;
    if (value === '') {
      setInputError(prev => ({...prev, sendingInputError: ''}));
    } else if (!regex.test(value)) {
      setInputError(prev => ({
        ...prev,
        sendingInputError:
          'Invalid input. Please enter a valid number with up to 18 decimal places.',
      }));
    } else if (value > 7) {
      setInputError(prev => ({
        ...prev,
        sendingInputError: 'Input exceeds balance.',
      }));
    } else {
      setInputError(prev => ({...prev, sendingInputError: ''}));
    }
  };

  const validateReceivingNumber = value => {
    setInput(prev => ({...prev, receivingInput: value}));
    const regex = /^\d+(\.\d{1,18})?$/;
    if (value === '') {
      setInputError(prev => ({...prev, sendingInputError: ''}));
    } else if (!regex.test(value)) {
      setInputError(prev => ({
        ...prev,
        receivingInputError:
          'Invalid input. Please enter a valid number with up to 18 decimal places.',
      }));
    } else if (value > 7) {
      setInputError(prev => ({
        ...prev,
        receivingInputError: 'Input exceeds balance.',
      }));
    } else {
      setInputError(prev => ({...prev, receivingInputError: ''}));
    }
  };

  const calculateFee = numberOfCoins => {
    const totalValue = 2500 * numberOfCoins;
    const fee = totalValue * 0.005;
    return fee.toFixed(2);
  };

  // onNextHandler
  const onNextHandler = () => {};

  return (
    <View style={styles.screen}>
      <SafeAreaView
        style={[styles.screen, {marginTop: Platform.OS === 'ios' ? 30 : 0}]}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.screen}>
          <FocusAwareStatusBar barStyle={'light-content'} translucent={true} />
          <View
            style={styles.headingContainer}
            onStartShouldSetResponder={Keyboard.dismiss}>
            <Text style={[styles.heading, {marginRight: 10}]}>Send DAU</Text>
            <SvgIcon xmlPath={Xmls.logo} />
          </View>
          <View
            style={styles.screen}
            onStartShouldSetResponder={Keyboard.dismiss}>
            <ScrollView
              style={styles.container}
              onStartShouldSetResponder={Keyboard.dismiss}
              showsVerticalScrollIndicator={false}
              bounces={false}>
              <Text_Input
                placeHoldertext={'0'}
                firstLabel={'You are sending'}
                rightLabel={true}
                rightLabelText={'Balance: 7 DAU'}
                amount={
                  value == 'DAU'
                    ? input.sendingInput * 2500 + ' USD'
                    : input.sendingInput + ' DAU'
                }
                keyboardType={'decimal-pad'}
                maxButton={true}
                Value={input.sendingInput}
                onChangeHandler={e => validateSendingNumber(e)}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
              />
              {inputError.sendingInputError && (
                <ValidationError errorTitle={inputError.sendingInputError} />
              )}
              <Text_Input
                placeHoldertext={'0'}
                firstLabel={'Recipient Receives'}
                containerStyle={{marginTop: 41}}
                amount={
                  valueSec == 'DAU'
                    ? input.sendingInput
                      ? input.sendingInput * 2500 - 0.005 + ' USD'
                      : '0 USD'
                    : input.sendingInput + ' DAU'
                }
                keyboardType={'decimal-pad'}
                Value={input.receivingInput}
                onChangeHandler={e => validateReceivingNumber(e)}
                open={openSec}
                value={valueSec}
                items={items}
                setOpen={setOpenSec}
                setValue={setValueSec}
                setItems={setItems}
              />
              {inputError.receivingInputError && (
                <ValidationError errorTitle={inputError.receivingInputError} />
              )}
              <View style={{height: 16}} />
            </ScrollView>
          </View>
          <View
            style={styles.underLine}
            onStartShouldSetResponder={Keyboard.dismiss}
          />
          <View
            style={styles.topContainer}
            onStartShouldSetResponder={Keyboard.dismiss}>
            <View
              style={styles.topLeftContainer}
              onStartShouldSetResponder={Keyboard.dismiss}>
              <Text style={styles.titleStyle}>Network fees</Text>
              <TouchableOpacity
                style={{padding: 4, marginLeft: 1}}
                onPress={() => refRBSheet.current.open()}>
                <SvgIcon xmlPath={Xmls.infoIcon} />
              </TouchableOpacity>
            </View>
            <Pressable
              style={{width: '60%'}}
              onPress={() => refRBSheetMenu.current.open()}>
              <Image
                source={require('../assets/images/badge.png')}
                style={{height: 25, width: 246}}
                resizeMode="contain"
              />
            </Pressable>
          </View>
          <View
            style={styles.bottomContainer}
            onStartShouldSetResponder={Keyboard.dismiss}>
            <Text style={styles.titleStyle}>Transfer fees</Text>
            <Text style={styles.titleStyle}>
              <Text
                style={[styles.titleStyle, {color: theme.lightColor.white}]}>
                {calculateFee(input.sendingInput)} DAU
              </Text>{' '}
              (6,300 USD)
            </Text>
          </View>
          <Button
            title={'Next'}
            marginBottom={35}
            onPressHandler={() => onNextHandler()}
          />
        </KeyboardAvoidingView>
        <NetworkFeeSheet refRBSheet={refRBSheet} />
        <TimeSheet refRBSheetMenu={refRBSheetMenu} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.lightColor.background,
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
    marginTop: 26,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  heading: {
    fontSize: 23,
    fontFamily: theme.fontFamily.InterBold,
    color: theme.lightColor.white,
    fontWeight: theme.lightColor.semiBold,
  },
  underLine: {
    height: 1,
    width: '100%',
    backgroundColor: theme.lightColor.lightBlue,
  },
  topContainer: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '30%',
  },
  titleStyle: {
    fontSize: 10,
    fontFamily: theme.fontFamily.InterRegular,
    color: theme.lightColor.lightGray,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});
