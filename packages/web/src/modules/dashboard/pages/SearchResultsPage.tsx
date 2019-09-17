import NavBar from 'components/NavBar/NavBar';
import Profile from 'components/Profile/Profile';
import React from 'react';
import { ResultItem } from '../dashboard.models';
import SearchField from 'components/SearchField/SearchField';
import SearchResultsItem from 'components/SearchResultsItem/SearchResultsItem';
import styled from 'styled-components';

const SearchResultsPage = ({ results }: { results: ResultItem[] }) => (
  <Page>
    <NavBar />
    <ResultsContent>
      <ResultsHeader>
        <SearchField />
        <Profile />
      </ResultsHeader>
      <FiltersPanel>
        <SearchCount>Search Results (21)</SearchCount>
      </FiltersPanel>
      <ResultsListing>
        {results.map((item: ResultItem) => (
          <SearchResultsItem item={item} key={item.id} />
        ))}
      </ResultsListing>
    </ResultsContent>
  </Page>
);

const Page = styled.div`
  background: ${props => props.theme.colors.lightGray};
`;

const ResultsContent = styled.div`
  min-height: 100vh;
  padding-left: 280px;

  @media (min-width: 1555px) {
    padding-left: 310px;
    padding-right: 30px;
  }

  @media (min-width: 1655px) {
    max-width: 1430px;
    margin: 0 auto;
  }
`;

const ResultsHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  box-sizing: border-box;
`;

const FiltersPanel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  box-sizing: border-box;
`;

const SearchCount = styled.div`
  font-size: 14px;
`;

const ResultsListing = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  padding: 15px 30px;

  @media (min-width: 1515px) {
    justify-content: space-between;
  }
`;

SearchResultsPage.defaultProps = {
  results: [
    {
      id: 'asdfsfd',
      username: 'Ivan Petrov',
      profilePicture: '/images/users/0.jpeg',
      rating: 8.2,
      tags: [
        {
          title: 'Clip maker',
        },
        {
          title: 'Photographer',
        },
        {
          title: 'Director of photography',
        },
      ],
    },
    {
      id: 'sd',
      username: 'Ivan Petrov',
      profilePicture: '/images/users/1.jpeg',
      rating: 8.2,
      tags: [
        {
          title: 'Clip maker',
        },
        {
          title: 'Photographer',
        },
        {
          title: 'Director of photography',
        },
      ],
    },
    {
      id: 'dfs',
      username: 'Ivan Petrov',
      profilePicture: '/images/users/2.jpeg',
      rating: 8.2,
      tags: [
        {
          title: 'Clip maker',
        },
        {
          title: 'Photographer',
        },
        {
          title: 'Director of photography',
        },
      ],
    },
    {
      id: 'ewa',
      username: 'Ivan Petrov',
      profilePicture: '/images/users/3.jpeg',
      rating: 8.2,
      tags: [
        {
          title: 'Clip maker',
        },
        {
          title: 'Photographer',
        },
        {
          title: 'Director of photography',
        },
      ],
    },
    {
      id: 'w9iio',
      username: 'Ivan Petrov',
      profilePicture: '/images/users/4.jpeg',
      rating: 8.2,
      tags: [
        {
          title: 'Clip maker',
        },
        {
          title: 'Photographer',
        },
        {
          title: 'Director of photography',
        },
      ],
    },

    {
      id: 'sdfjls',
      username: 'Ivan Petrov',
      profilePicture: '/images/users/5.jpeg',
      rating: 8.2,
      tags: [
        {
          title: 'Clip maker',
        },
        {
          title: 'Photographer',
        },
        {
          title: 'Director of photography',
        },
      ],
    },

    {
      id: 'pi',
      username: 'Ivan Petrov',
      profilePicture: '/images/users/6.jpeg',
      rating: 8.2,
      tags: [
        {
          title: 'Clip maker',
        },
        {
          title: 'Photographer',
        },
        {
          title: 'Director of photography',
        },
      ],
    },

    {
      id: 'piuopip',
      username: 'Ivan Petrov',
      profilePicture: '/images/users/7.jpeg',
      rating: 8.2,
      tags: [
        {
          title: 'Clip maker',
        },
        {
          title: 'Photographer',
        },
        {
          title: 'Director of photography',
        },
      ],
    },
  ],
};

export default SearchResultsPage;
