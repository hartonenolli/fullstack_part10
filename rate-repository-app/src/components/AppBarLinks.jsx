import React from 'react';
import Text from './Text';
import theme from '../theme';
import { Pressable, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

const AppBarLinks = ({ style }) => (
  <Pressable style={styles.container}>
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Text style={[styles.link, style]}>Repositories</Text>
    </Link>
    <Link to="/sign-in" style={{ textDecoration: 'none' }}>
      <Text style={[styles.link, style]}>Sign In</Text>
    </Link>
  </Pressable>
);

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
