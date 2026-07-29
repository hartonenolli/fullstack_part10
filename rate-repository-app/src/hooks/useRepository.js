import { useQuery } from '@apollo/client/react';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {
  // console.log('id is:', id);
  const { data, loading, error, refetch } = useQuery(GET_REPOSITORY, {
    variables: { id },
    fetchPolicy: 'cache-and-network',
  });
  // console.log('GET_REPOSITORY result:', JSON.stringify(data, null, 2));

  return {
    repository: data?.repository,
    loading,
    error,
    refetch,
  };
};

export default useRepository;