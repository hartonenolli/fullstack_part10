import React from 'react';
import { View } from 'react-native';
import { format } from 'date-fns';
import theme from '../theme';
import Text from './Text';
import { Button } from 'react-native-paper';

const ViewRepositoryButton = () => {
  const handlePress = () => {
    // TODO
  };

  return (
    <Button
      mode="contained"
      onPress={handlePress}
      style={theme.button}
      compact
    >
      View repository
    </Button>
  );
};

const DeleteReviewButton = () => {
  const handleDelete = () => {
    // TODO
  };

  return (
    <Button
      mode="contained"
      onPress={handleDelete}
      style={theme.buttonRed}
      compact
    >
      Delete review
    </Button>
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
                    <ViewRepositoryButton />
                    <DeleteReviewButton />
                </View>
            )}
    </View>
);

export default ReviewItem;