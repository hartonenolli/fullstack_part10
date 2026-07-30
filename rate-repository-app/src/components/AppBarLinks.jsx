import React from 'react';
import Text from './Text';
import theme from '../theme';
import { Pressable, StyleSheet } from 'react-native';
import { Link, useNavigate } from 'react-router-native';
import { useApolloClient } from '@apollo/client/react';
import useAuthStorage from '../hooks/useAuthStorage';

const AppBarLinks = ({ style, authorizedUser }) => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const onSignOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    navigate('/');
  };

  return (
    <Pressable style={styles.container}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Text style={[styles.link, style]}>Repositories</Text>
      </Link>
      {authorizedUser && (
        <Link to="/create-review" style={{ textDecoration: 'none' }}>
          <Text style={[styles.link, style]}>Create a Review</Text>
        </Link>
      )}
      {authorizedUser ? (
        <Pressable onPress={onSignOut}>
          <Text style={[styles.link, style]}>Sign Out</Text>
        </Pressable>
      ) : (
        <Link to="/sign-in" style={{ textDecoration: 'none' }}>
          <Text style={[styles.link, style]}>Sign In</Text>
        </Link>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
  },
  link: {
    color: theme.colors.textWhite,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AppBarLinks;