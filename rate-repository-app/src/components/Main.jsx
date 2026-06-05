import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import Constants from 'expo-constants';
import theme from '../theme';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.aplicationBackground,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;