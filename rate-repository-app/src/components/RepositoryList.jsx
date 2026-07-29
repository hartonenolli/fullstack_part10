import RepositoryItem from './RepositoryItem';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const navigate = useNavigate();
  const repositoryNodes = repositories 
    ? repositories.edges.map(edge => edge.node)
    : [];
  
  return (
    <FlatList
        data={repositoryNodes}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigate(`/repositories/${item.id}`)}>
            <RepositoryItem repository={item} />
          </Pressable>
        )}
      />
  );
};
 
const RepositoryList = () => {
  const { repositories } = useRepositories();

  // console.log({ loading, error, data });

  const repositoryNodes = repositories 
    ? repositories.edges.map(edge => edge.node)
    : [];
  
// console.log('repositoryNodes:', repositoryNodes);

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;