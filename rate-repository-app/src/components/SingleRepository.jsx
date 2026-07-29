import { useParams } from 'react-router-native';
import { View, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepository from '../hooks/useRepository';
import Text from './Text';
import theme from '../theme';
import * as Linking from 'expo-linking';

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, loading, error } = useRepository(id);

  if (loading || !repository) {
    return null;
  }

  const handleOpenInGitHub = () => {
    // console.log('repository is:', repository);
    Linking.openURL(repository.url);
  };

  return (
    <View>
      <RepositoryItem repository={repository} />
      <Pressable onPress={handleOpenInGitHub} style={theme.singleRepositoryButton}>
        <Text color="textWhite">Open in GitHub</Text>
      </Pressable>
    </View>
  );
};

export default SingleRepository;