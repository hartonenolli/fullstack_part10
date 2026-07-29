import { useParams } from 'react-router-native';
import { View, Pressable, FlatList, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';
import useRepository from '../hooks/useRepository';
import useReviews from '../hooks/useReviews';
import Text from './Text';
import theme from '../theme';
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryInfo = ({ repository, onOpenInGitHub }) => (
  <View>
    <RepositoryItem repository={repository} />
    <Pressable onPress={onOpenInGitHub} style={theme.singleRepositoryButton}>
      <Text color="textWhite">Open in GitHub</Text>
    </Pressable>
  </View>
);

const SingleRepository = () => {
  const { id } = useParams();
  const { repository, loading: repoLoading } = useRepository(id);
  const { reviews, loading: reviewsLoading } = useReviews(id);

  if (repoLoading || reviewsLoading || !repository) {
    return null;
  }

  const reviewNodes = reviews ? reviews.map(edge => edge.node) : [];

  const handleOpenInGitHub = () => {
    Linking.openURL(repository.url);
  };

  return (
    <FlatList
      data={reviewNodes}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={ItemSeparator}
      contentContainerStyle={theme.repositoryList.contentContainer}
      renderItem={({ item }) => <ReviewItem review={item} />}
      ListHeaderComponent={() => (
        <RepositoryInfo repository={repository} onOpenInGitHub={handleOpenInGitHub} />
      )}
    />
  );
};

export default SingleRepository;