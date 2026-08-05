import RepositoryItem from './RepositoryItem';
import { FlatList, View, Pressable, Text } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import { Menu } from 'react-native-paper';
import { useState } from 'react';
import theme from '../theme';

const ItemSeparator = () => <View style={theme.repositoryList.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState('Latest repositories');
  const navigate = useNavigate();
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const handleSortOptionSelect = (option) => {
    setSelectedSortOption(option);
    setMenuVisible(false);
  }

  return (
    <View style={theme.repositoryList.container}>
      <Menu
        visible={menuVisible}
        onDismiss={() => setMenuVisible(false)}
        anchor={
          <Pressable onPress={() => setMenuVisible(true)} style={theme.repositoryList.sortButton}>
            <Text color="textWhite">{selectedSortOption}</Text>
          </Pressable>
        }
      >
        <Menu.Item onPress={() => handleSortOptionSelect('Latest repositories')} title="Latest repositories" />
        <Menu.Item onPress={() => handleSortOptionSelect('Highest rated repositories')} title="Highest rated repositories" />
        <Menu.Item onPress={() => handleSortOptionSelect('Lowest rated repositories')} title="Lowest rated repositories" />
      </Menu>
      <ItemSeparator />
      <FlatList
        data={repositoryNodes}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={ItemSeparator}
        contentContainerStyle={theme.repositoryList.contentContainer}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigate(`/repositories/${item.id}`)}>
            <RepositoryItem repository={item} />
          </Pressable>
        )}
      />
    </View>
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();
  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;