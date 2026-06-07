import { TextInput, Pressable, View } from 'react-native';
import { useFormik } from 'formik';
import Text from './Text';
import theme from '../theme';

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <View style={theme.container}>
      <TextInput
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        style={theme.textField}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        style={theme.textField}
      />
      <Pressable onPress={formik.handleSubmit} style={theme.button}>
        <Text color='textWhite' fontWeight='bold'>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;