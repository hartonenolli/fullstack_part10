import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
	statsRow: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 15,
	},
	statItem: {
		alignItems: 'center',
	},
});

const formatCount = (count) => {
	if (count >= 1000) {
		return `${(count / 1000).toFixed(1)}k`;
	}

	return String(count);
};

const RepositoryCount = ({ repository }) => {
	return (
		<View style={styles.statsRow}>
			<View style={styles.statItem}>
				<Text fontWeight="bold">{formatCount(repository.stargazersCount)}</Text>
				<Text color="textSecondary">Stars</Text>
			</View>
			<View style={styles.statItem}>
				<Text fontWeight="bold">{formatCount(repository.forksCount)}</Text>
				<Text color="textSecondary">Forks</Text>
			</View>
			<View style={styles.statItem}>
				<Text fontWeight="bold">{formatCount(repository.reviewCount)}</Text>
				<Text color="textSecondary">Reviews</Text>
			</View>
			<View style={styles.statItem}>
				<Text fontWeight="bold">{formatCount(repository.ratingAverage)}</Text>
				<Text color="textSecondary">Rating</Text>
			</View>
		</View>
	);
};

export default RepositoryCount;
