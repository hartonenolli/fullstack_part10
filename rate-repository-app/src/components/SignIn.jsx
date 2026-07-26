import { TextInput, Pressable, View } from 'react-native';
import { useFormik } from 'formik';
import useSignIn from '../hooks/useSignIn';
import Text from './Text';
import theme from '../theme';
import * as yup from 'yup';

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

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const result = await signIn({ username, password });
      console.log('Sign in successful:', result);
    } catch (error) {
      console.error('Sign in error:', error);
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
      <Pressable onPress={formik.handleSubmit} style={theme.button}>
        <Text color='textWhite' fontWeight='bold'>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;