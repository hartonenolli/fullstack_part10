import { TextInput, Pressable, View } from 'react-native';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import useSignIn from '../hooks/useSignIn';
import Text from './Text';
import theme from '../theme';
import * as yup from 'yup';
import AuthStorage from '../utils/authStorage';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      const accessToken = await AuthStorage.getAccessToken();
      setToken(accessToken);
    };

    fetchToken();
  }, []);

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const result = await signIn({ username, password });
      console.log('Sign in successful:', result);
      await AuthStorage.setAccessToken(result.authenticate.accessToken);
      const storedAccessToken = await AuthStorage.getAccessToken();
      console.log('Token stored', storedAccessToken);
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  const OnLogout = async () => {
    try {
      await AuthStorage.removeAccessToken();
      setToken(null);
      console.log('Logged out successfully');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit,
  });

  return (
    <View style={theme.container}>
      <TextInput
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        style={theme.textField}
        borderColor={formik.touched.username && formik.errors.username ? theme.colors.textError : theme.colors.black}
        onBlur={formik.handleBlur('username')}
      />
      {formik.touched.username && formik.errors.username && (
        <Text color='textError'>{formik.errors.username}</Text>
      )}
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        style={theme.textField}
        borderColor={formik.touched.password && formik.errors.password ? theme.colors.textError : theme.colors.black}
        onBlur={formik.handleBlur('password')}
      />
      {formik.touched.password && formik.errors.password && (
        <Text color='textError'>{formik.errors.password}</Text>
      )}
      <Pressable onPress={token ? OnLogout : formik.handleSubmit} style={theme.button}>
        <Text color='textWhite' fontWeight='bold'>{token ? 'Logout' : 'Sign In'}</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;