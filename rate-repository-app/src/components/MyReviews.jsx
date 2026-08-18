import { useQuery } from '@apollo/client/react';
import { ME } from '../graphql/queries';
import Text from './Text';
import ReviewItem from './ReviewItem';
import { FlatList, View } from 'react-native';

const MyReviews = () => {
  const { data, loading, error } = useQuery(ME, {
    variables: {
      includeReviews: true,
    },
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    console.log(error);
    return <Text>Error occurred while fetching reviews.</Text>;
  }

  const reviews =
    data?.me?.reviews?.edges.map(edge => edge.node) ?? [];

  if (reviews.length === 0) {
    return <Text>No reviews found.</Text>;
  }

  return (
    <FlatList
      data={reviews}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ReviewItem review={item} showRepositoryName={true} />
      )}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
    />
  );
};

export default MyReviews;