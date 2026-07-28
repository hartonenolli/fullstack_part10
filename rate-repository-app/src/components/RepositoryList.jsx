import RepositoryItem from './RepositoryItem';
import { FlatList, View, StyleSheet } from 'react-native';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;
 
const RepositoryList = () => {
  const { repositories } = useRepositories();

  // console.log({ loading, error, data });

  const repositoryNodes = repositories 
    ? repositories.edges.map(edge => edge.node)
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