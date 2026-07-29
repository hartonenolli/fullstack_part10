import { useParams } from 'react-router-native';
import { View } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepository from '../hooks/useRepository';

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, loading, error } = useRepository(id);

  if (loading || !repository) {
    return null;
  }

  return (
    <View>
      <RepositoryItem repository={repository} />
    </View>
  );
};

export default SingleRepository;