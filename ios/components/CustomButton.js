import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const CustomButton = ({title, onPress, type, iconName, width, style}) => {
  let ret;

  const styles = StyleSheet.create({
    button: {
      width: width,
      height: 40,
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      borderRadius: 5,
      backgroundColor: style && style.backgroundColor,
      fontFamily: 'inherit',
    },
    icon: {
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      borderRadius: 5,
    },
  });

  if (type === 'text') {
    ret = (
      <Text
        style={[
          {color: style && style.color, fontSize: style && style.fontSize},
        ]}>
        {title}
      </Text>
    );
  } else if (type === 'icon') {
    ret = (
      <>
        <Icon name={iconName} size={30} color="white" />
        <Text>사용자123</Text>
      </>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[type === 'text' ? styles.button : styles.icon]}>
      {ret}
    </TouchableOpacity>
  );
};

export default CustomButton;

CustomButton.defaultProps = {
  style: {backgroundColor: 'blue', color: 'white'},
  type: 'text',
  title: 'untitled',
  onPress: () => {},
  width: 150,
  iconName: null,
};
