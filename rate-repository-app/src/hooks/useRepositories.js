import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client/react';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sortOption, searchKeyword) => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);

  const orderBy = {
    LATEST: 'CREATED_AT',
    HIGHEST: 'RATING_AVERAGE',
    LOWEST: 'RATING_AVERAGE',
  }[sortOption];

  const orderDirection = {
    LATEST: 'DESC',
    HIGHEST: 'DESC',
    LOWEST: 'ASC',
  }[sortOption];

  const { data, refetch } = useQuery(GET_REPOSITORIES, {
    variables: { orderBy, orderDirection, searchKeyword },
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (data) {
      setRepositories(data.repositories);
    }
  }, [data]);

  return { repositories, loading, refetch };
};

export default useRepositories;