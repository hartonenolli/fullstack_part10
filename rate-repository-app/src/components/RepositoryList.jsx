import RepositoryItem from './RepositoryItem';
import { FlatList, View, Pressable, Text } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import { Menu } from 'react-native-paper';
import { useState } from 'react';
import theme from '../theme';

const ItemSeparator = () => <View style={theme.repositoryList.separator} />;

export const RepositoryListContainer = ({ repositories, sortOption, setSortOption }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate();
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const handleSortOptionSelect = (option) => {
    setSortOption(option);
    setMenuVisible(false);
  }

    const selectedLabel = {
    LATEST: 'Latest repositories',
    HIGHEST: 'Highest rated repositories',
    LOWEST: 'Lowest rated repositories',
  }[sortOption];

  return (
    <View style={theme.repositoryList.container}>
      <Menu
        visible={menuVisible}
        onDismiss={() => setMenuVisible(false)}
        anchor={
          <Pressable onPress={() => setMenuVisible(true)} style={theme.repositoryList.sortButton}>
            <Text color="textWhite">{selectedLabel}</Text>
          </Pressable>
        }
      >
        <Menu.Item onPress={() => handleSortOptionSelect('LATEST')} title="Latest repositories" />
        <Menu.Item onPress={() => handleSortOptionSelect('HIGHEST')} title="Highest rated repositories" />
        <Menu.Item onPress={() => handleSortOptionSelect('LOWEST')} title="Lowest rated repositories" />
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
  const [sortOption, setSortOption] = useState('LATEST');

  const { repositories } = useRepositories(sortOption);

  return (
    <RepositoryListContainer
      repositories={repositories}
      sortOption={sortOption}
      setSortOption={setSortOption}
    />
  );
};
export default RepositoryList;