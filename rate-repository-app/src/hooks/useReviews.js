import { useQuery } from '@apollo/client/react';
import { GET_REVIEWS } from '../graphql/queries';

const useReviews = (id) => {
  const { data, loading, error, refetch } = useQuery(GET_REVIEWS, {
    variables: { id },
    fetchPolicy: 'cache-and-network',
  });

  return {
    reviews: data?.repository?.reviews?.edges,
    loading,
    error,
    refetch,
  };
};

export default useReviews;