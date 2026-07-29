import { View } from 'react-native';
import Text from './Text';
import ReviewItem from './ReviewItem';
import useReviews from '../hooks/useReviews';

const ReviewList = ({ id }) => {
  const { reviews, loading, error } = useReviews(id);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error occurred while fetching reviews.</Text>;

  return (
    <View>
      {reviews?.map(({ node }) => (
        <ReviewItem key={node.id} review={node} />
      ))}
    </View>
  );
};

export default ReviewList;