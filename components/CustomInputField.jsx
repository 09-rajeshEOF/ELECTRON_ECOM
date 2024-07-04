import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const CustomInputField = ({
  label,
  value,
  onChange,
  secureTextEntry,
  onBlur,
  onFocus,
  placeholder,
  iconName,
  width,
  height,
  borderRadius
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={{ width: width || '100%' }}>
      <Text style={{ fontSize: 16, color: '#333' }}>{label}</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 15,
          borderWidth: 1,
          borderColor: '#ddd',
          padding: 10,
          marginBottom: 10,
        }}
      >
        {iconName && (
          <Entypo
            name={iconName}
            size={24}
            color="#666"
            style={{ marginRight: 10 }}
          />
        )}
        <TextInput
          value={value}
          onChangeText={onChange}
          secureTextEntry={secureTextEntry && !showPassword}
          placeholder={placeholder}
          onBlur={onBlur}
          onFocus={onFocus}
          style={{ flex: 1, fontSize: 16, padding: 10 }}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={handlePasswordVisibility}>
            <Entypo
              name={showPassword ? 'eye-with-line' : 'eye'}
              size={24}
              color="#666"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomInputField;