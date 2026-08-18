import React from 'react';
import { View, Pressable, Alert } from 'react-native';
import { format } from 'date-fns';
import theme from '../theme';
import Text from './Text';
import { useNavigate } from 'react-router-native';
import { useMutation } from '@apollo/client/react';
import { DELETE_REVIEW } from '../graphql/mutations';
import { ME } from '../graphql/queries';

const ViewRepositoryButton = ({ review }) => {
  const navigate = useNavigate();
  const handlePress = () => {
    console.log('pressed', review.repository.id);
    navigate(`/repositories/${review.repository.id}`);
  };

  return (
    <Pressable
      onPress={handlePress}
      style={theme.button}
      compact
    >
      <Text color="textWhite">
        View repository
      </Text>
    </Pressable>
  );
};

const DeleteReviewButton = ({ review }) => {
  const [deleteReview] = useMutation(DELETE_REVIEW, {
    refetchQueries: [{ query: ME, variables: { includeReviews: true } }],
  });
  const handleDelete = () => {
    Alert.alert(
      'Delete Review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            deleteReview({ variables: { id: review.id } })
              .then(() => {
                console.log('Review deleted successfully');
              })
              .catch((error) => {
                console.error('Error deleting review:', error);
              });
          }
        }
      ]
    );
  };

  return (
    <Pressable
      onPress={handleDelete}
      style={theme.buttonRed}
      compact
    >
      <Text color="textWhite">
        Delete review
      </Text>
    </Pressable>
  );
};
const ReviewItem = ({ review, showRepositoryName = false }) => (
    <View style={theme.reviewItem.container} testID="reviewItem">
        <View style={theme.reviewItem.headerRow}>
            <View style={theme.reviewItem.ratingContainer}>
                <Text fontSize="subheading" fontWeight="bold" color="primary">
                    {review.rating}
                </Text>
            </View>

            <View style={theme.reviewItem.contentContainer}>
                <Text fontSize="subheading" fontWeight="bold">
                    {showRepositoryName
                        ? review.repository.fullName
                        : review.user.username}
                </Text>

                <Text color="textSecondary">
                    {format(new Date(review.createdAt), 'dd MMM yyyy')}
                </Text>

                <Text style={theme.reviewItem.text}>
                    {review.text}
                </Text>
            </View>
        </View>
            {showRepositoryName && (
                <View style={theme.reviewItem.buttonsContainer}>
                    <ViewRepositoryButton review={review} />
                    <DeleteReviewButton review={review} />
                </View>
            )}
    </View>
);

export default ReviewItem;