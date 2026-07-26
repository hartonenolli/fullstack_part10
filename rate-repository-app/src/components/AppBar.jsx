import { View, StyleSheet, ScrollView } from 'react-native';
import { useQuery } from '@apollo/client/react';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarLinks from './AppBarLinks';
import { ME } from '../graphql/queries';

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
  const { data } = useQuery(ME);

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <AppBarLinks authorizedUser={data?.me} />
      </ScrollView>
    </View>
  );
};

export default AppBar;