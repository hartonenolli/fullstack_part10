import { TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useMutation } from '@apollo/client/react';
import { useNavigate } from 'react-router-native';
import { useFormik } from 'formik';
import Text from './Text';
import theme from '../theme';
import * as yup from 'yup';
import { CREATE_USER } from '../graphql/mutations';
import useSignIn from '../hooks/useSignIn';

const SignUp = () => {
  const navigate = useNavigate();
  const [createUser] = useMutation(CREATE_USER);
  const [signIn] = useSignIn();
  const [errorMessage, setErrorMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: yup.object({
      username: yup
        .string()
        .required('Username is required')
        .min(5, 'Username needs to be at least 5 characters')
        .max(30, 'Username can be at most 30 characters'),
      password: yup
        .string()
        .required('Password is required')
        .min(5, 'Password needs to be at least 5 characters')
        .max(30, 'Password can be at most 30 characters'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required')
        .min(5, 'Confirm Password needs to be at least 5 characters')
        .max(30, 'Confirm Password can be at most 30 characters'),
    }),
    onSubmit: async (values) => {
      setErrorMessage('');
      try {
        await createUser({
          variables: {
            user: {
              username: values.username,
              password: values.password
            }
          }
        });
        await signIn({ username: values.username, password: values.password });
        navigate('/');
      } catch (e) {
        setErrorMessage(e.message);
        console.error('Error signing up:', e);
        setTimeout(() => setErrorMessage(''), 10000);
      }
    },
  });

  return (
    <View style={theme.container}>
      <>
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
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry
          value={formik.values.confirmPassword}
          onChangeText={formik.handleChange('confirmPassword')}
          style={theme.textField}
          borderColor={formik.touched.confirmPassword && formik.errors.confirmPassword ? theme.colors.textError : theme.colors.black}
          onBlur={formik.handleBlur('confirmPassword')}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <Text color='textError'>{formik.errors.confirmPassword}</Text>
        )}
        <Pressable onPress={formik.handleSubmit} style={theme.button}>
          <Text color='textWhite' fontWeight='bold'>Sign Up</Text>
        </Pressable>
      </>
    </View>
  );
}

export default SignUp;