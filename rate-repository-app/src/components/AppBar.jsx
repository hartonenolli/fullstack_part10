import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarLinks from './AppBarLinks';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    display: 'flex',
    paddingLeft: 10,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <AppBarLinks />
      </ScrollView>
    </View>
  );
};

export default AppBar;