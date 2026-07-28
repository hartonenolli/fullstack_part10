import { render, screen, within } from '@testing-library/react-native';
import { RepositoryListContainer } from '../../components/RepositoryList';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', async () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      // Add your test code here
 const { getAllByTestId } = await render(
        <RepositoryListContainer repositories={repositories} />
      );

      const repositoryItems = getAllByTestId('repositoryItem');
      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;

      expect(screen.getByText('jaredpalmer/formik')).toBeDefined();
      expect(screen.getByText('Build forms in React, without the tears')).toBeDefined();
      expect(screen.getByText('TypeScript')).toBeDefined();
      expect(within(firstRepositoryItem).getByTestId('forksCount')).toHaveTextContent('1.6kForks');
      expect(within(firstRepositoryItem).getByTestId('stargazersCount')).toHaveTextContent('21.9kStars');
      expect(within(firstRepositoryItem).getByTestId('ratingAverage')).toHaveTextContent('88Rating');
      expect(within(firstRepositoryItem).getByTestId('reviewCount')).toHaveTextContent('3Reviews');

      expect(screen.getByText('async-library/react-async')).toBeDefined();
      expect(screen.getByText('Flexible promise-based React data loader')).toBeDefined();
      expect(screen.getByText('JavaScript')).toBeDefined();
      expect(within(secondRepositoryItem).getByTestId('forksCount')).toHaveTextContent('69Forks');
      expect(within(secondRepositoryItem).getByTestId('stargazersCount')).toHaveTextContent('1.8kStars');
      expect(within(secondRepositoryItem).getByTestId('ratingAverage')).toHaveTextContent('72Rating');
      expect(within(secondRepositoryItem).getByTestId('reviewCount')).toHaveTextContent('3Reviews');
    });
  });
});
