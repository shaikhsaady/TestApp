import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {theme} from '../theme/Theme';
import SvgIcon from '../assets/svgs/SvgIcon';
import Xmls from '../utils/Xmls';
import DropDownPicker from 'react-native-dropdown-picker';
export default function Text_Input({
  placeHoldertext,
  Value,
  maxCharacter,
  keyboardType,
  secureText = false,
  multilineText = false,
  editable = true,
  selectTextOnFocus = true,
  onChangeHandler = () => null,
  onBlurHandler = () => null,
  onFocusHandler = () => null,
  containerStyle,
  firstLabel,
  rightLabel = false,
  rightLabelText,
  amount,
  maxButton = false,
  open,
  value,
  items,
  setOpen,
  setValue,
  setItems,
}) {
  return (
    <View style={{...containerStyle}}>
      <View style={styles.firstContainer}>
        <Text style={styles.label}>{firstLabel ?? ''}</Text>
        {rightLabel && <Text style={styles.label}>{rightLabelText ?? ''}</Text>}
      </View>
      <View style={styles.leftContainer}>
        <View style={{width: '57%'}}>
          <TextInput
            style={styles.text}
            placeholder={placeHoldertext ? placeHoldertext : ''}
            placeholderTextColor={theme.lightColor.white}
            value={Value}
            onChangeText={txt => onChangeHandler(txt)}
            onFocus={() => onFocusHandler()}
            onBlur={() => onBlurHandler()}
            // returnKeyType="done"
            selectTextOnFocus={selectTextOnFocus}
            multiline={multilineText}
            keyboardType={keyboardType}
            maxLength={maxCharacter}
            editable={editable}
            secureTextEntry={secureText}
          />
          <Text style={styles.amountText}>{amount ?? ''}</Text>
        </View>
        <View style={styles.dropDownCon}>
          {maxButton ? (
            <TouchableOpacity style={{padding: 4, marginRight: 4}}>
              <SvgIcon xmlPath={Xmls.maxBatch} />
            </TouchableOpacity>
          ) : (
            <View style={{paddingHorizontal: 20, marginRight: 4}} />
          )}
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            autoScroll={true}
            style={{
              backgroundColor: theme.lightColor.backgroundRGBA,
              borderWidth: 1,
              borderColor: theme.lightColor.borderRGBA,
              borderRadius: 8,
              width: 105,
            }}
            bottomOffset={100}
            dropDownContainerStyle={{
              width: 105,
              backgroundColor: 'transparent',
              borderBottomColor: theme.lightColor.white,
              borderLeftColor: theme.lightColor.white,
              borderRightColor: theme.lightColor.white,
              borderWidth: 0,
              marginTop: 5,
            }}
            itemSeparator={true}
            itemSeparatorStyle={{
              backgroundColor: 'transparent',
              paddingVertical: 2,
            }}
            listItemContainerStyle={{
              backgroundColor: theme.lightColor.backgroundRGBA,
              borderWidth: 1,
              borderColor: theme.lightColor.borderRGBA,
              borderRadius: 8,
            }}
            labelProps={{
              numberOfLines: 1,
            }}
            textStyle={{
              color: theme.lightColor.white,
              fontFamily: theme.fontFamily.InterRegular,
            }}
            selectedItemLabelStyle={{
              color: theme.lightColor.lightGray,
              fontFamily: theme.fontFamily.InterRegular,
            }}
            labelStyle={{
              color: theme.lightColor.lightGray,
              fontFamily: theme.fontFamily.InterRegular,
            }}
            onSelectItem={item => console.log(item?.value, 'onSelectItem')}
            closeOnBackPressed={true}
            closeAfterSelecting={true}
            showTickIcon={false}
            ArrowDownIconComponent={() => <SvgIcon xmlPath={Xmls.arrowIcon} />}
            ArrowUpIconComponent={() => <SvgIcon xmlPath={Xmls.arrowIcon} />}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  firstContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  label: {
    fontSize: 14,
    fontFamily: theme.fontFamily.InterRegular,
    color: theme.lightColor.gray,
  },
  leftContainer: {
    borderWidth: 2,
    borderColor: theme.lightColor.blue,
    backgroundColor: theme.lightColor.lightBlack,
    padding: 20,
    borderRadius: 12,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: theme.lightColor.white,
    fontSize: 36,
    fontFamily: theme.fontFamily.InterBold,
  },
  amountText: {
    fontSize: 12,
    fontFamily: theme.fontFamily.InterRegular,
    fontWeight: theme.fontWeight.normal,
    color: theme.lightColor.gray,
  },
  dropDownCon: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '43%',
  },
});
