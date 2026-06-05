import React from 'react';
import { Image, View } from 'react-native';
import theme from '../theme';
import Text from './Text';
import RepositoryCount from './RepositoryCount';

const RepositoryItem = ({ repository }) => (
	<View style={theme.repositoryItem.container}>
		<View style={theme.repositoryItem.headerRow}>
			<Image source={{ uri: repository.ownerAvatarUrl }} style={theme.repositoryItem.image} />
			<View style={theme.repositoryItem.contentContainer}>
				<Text fontSize="subHeading" fontWeight="bold">
					{repository.fullName}
				</Text>
				<Text style={theme.repositoryItem.description}>{repository.description}</Text>
				<View style={theme.repositoryItem.languageTag}>
					<Text color="textWhite">
						{repository.language}
					</Text>
				</View>
			</View>
		</View>
		<RepositoryCount repository={repository} />
	</View>
);

export default RepositoryItem;

