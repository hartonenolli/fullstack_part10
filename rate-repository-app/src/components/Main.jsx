import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import CreateReview from './CreateReview';
import SignIn from './SignIn';
import theme from '../theme';
import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import SingleRepository from './SingleRepository';

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
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/create-review" element={<CreateReview />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/repositories/:id" element={<SingleRepository />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </View>
  );
};

export default Main;