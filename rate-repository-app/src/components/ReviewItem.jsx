import React from 'react';
import { View } from 'react-native';
import { format } from 'date-fns';
import theme from '../theme';
import Text from './Text';

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
    </View>
);

export default ReviewItem;