import { useQuery } from '@apollo/client/react';
import { GET_REPOSITORIES } from '../graphql/queries';


import RepositoryItem from './RepositoryItem';
import { FlatList, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;
 
const RepositoryList = () => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  // console.log({ loading, error, data });

  const repositoryNodes = data && data.repositories
    ? data.repositories.edges.map(edge => edge.node)
    : [];
  
// console.log('repositoryNodes:', repositoryNodes);

  return (
    <FlatList
      data={repositoryNodes}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem repository={item} />}
    />
  );
};

export default RepositoryList;