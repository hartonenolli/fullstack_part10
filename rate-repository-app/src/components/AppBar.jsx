import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    display: 'flex',
    paddingLeft: 10,
    paddingBottom: 20,
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text color="textWhite" fontWeight="bold" fontSize="subheading">Repositories</Text>
      </Pressable>
    </View>
  );
};

export default AppBar;