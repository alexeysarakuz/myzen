import ItemPreloader from 'components/ItemPreloader/ItemPreloader';
import NavBar from 'components/NavBar/NavBar';
import Profile from 'components/Profile/Profile';
import queryString from 'query-string';
import React, { useState, useEffect } from 'react';
import { ResultItem } from '../dashboard.models';
import SearchField from 'components/SearchField/SearchField';
import SearchResultsItem from 'components/SearchResultsItem/SearchResultsItem';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Hamburger from 'components/Hamburger/Hamburger';
import Logo from 'components/Logo/Logo';

const SearchResultsPage = ({ location, results }: any) => {
  let urlTags = queryString.parse(location.search).tags;
  let inputTags: any = [];

  if (urlTags) {
    urlTags = urlTags.toString().split(',');
    inputTags = urlTags.map(item => ({
      title: item,
    }));
  }

  const [listingResults, changeListingResults] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      changeListingResults(results);
    }, 1000);
  }, [changeListingResults, results]);

  return (
    <Page>
      <NavBarContainer>
        <NavBar />
      </NavBarContainer>
      <ResultsContent>
        <ResultsHeader>
          <LogoContainer>
            <Logo dark />
          </LogoContainer>
          <HamburgerContainer>
            <Hamburger />
          </HamburgerContainer>
          <SearchFieldContainer>
            <SearchField defaultTags={inputTags} />
          </SearchFieldContainer>
          <ProfileContainer>
            <Profile />
          </ProfileContainer>
        </ResultsHeader>
        <FiltersPanel>
          <SearchCount>Search Results (21)</SearchCount>
          <Filters>
            <Filter>Filters</Filter>
          </Filters>
        </FiltersPanel>
        <ResultsListing>
          {listingResults && listingResults.length > 0 ? (
            listingResults.map((item: ResultItem) => (
              <SearchResultsItem item={item} key={item.id} />
            ))
          ) : (
            <>
              <ItemPreloader />
              <ItemPreloader />
              <ItemPreloader />
              <ItemPreloader />
              <ItemPreloader />
              <ItemPreloader />
              <ItemPreloader />
              <ItemPreloader />
            </>
          )}
        </ResultsListing>
      </ResultsContent>
    </Page>
  );
};

const Page = styled.div`
  background: ${props => props.theme.colors.lightGray};
`;

const NavBarContainer = styled.div`
  @media (max-width: 731px) {
    display: none;
  }
`;

const ProfileContainer = styled.div`
  @media (max-width: 731px) {
    display: none;
  }
`;

const SearchFieldContainer = styled.div`
  @media (max-width: 731px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const HamburgerContainer = styled.div`
  margin-left: 30px;
  display: none;

  @media (max-width: 731px) {
    display: block;
  }
`;

const LogoContainer = styled.div`
  display: none;

  @media (max-width: 731px) {
    display: block;
  }
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

  @media (max-width: 731px) {
    padding-left: 0;
  }
`;

const ResultsHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  box-sizing: border-box;

  @media (max-width: 731px) {
    flex-wrap: wrap;
    align-items: center;
  }
`;

const FiltersPanel = styled.div`
  width: 100%;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const Filters = styled.div`
  display: flex;
`;

const Filter = styled.div`
  font-size: 14px;
  padding: 11px 20px;
  background-color: ${props => props.theme.colors.white};
`;

const SearchCount = styled.div`
  font-size: 13px;
  color: ${props => props.theme.colors.darkGraySearchResults};
`;

const ResultsListing = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  padding: 15px 20px;
`;

SearchResultsPage.defaultProps = {
  results: [
    {
      id: 'asdfsfd',
      username: 'Jeffrey Torres',
      profilePicture: '/images/users/0.jpeg',
      rating: 4.2,
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
      username: 'Alicia Bruce',
      profilePicture: '/images/users/1.jpeg',
      rating: 6.2,
      tags: [
        {
          title: 'Encoder',
        },
        {
          title: 'PHP programmer',
        },
      ],
    },
    {
      id: 'dfs',
      username: 'Dolores Varney',
      profilePicture: '/images/users/2.jpeg',
      rating: 9.3,
      tags: [
        {
          title: 'Manager',
        },
        {
          title: 'Web coach',
        },
        {
          title: 'Guider',
        },
      ],
    },
    {
      id: 'ewa',
      username: 'Antonio Biel',
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
      username: 'Wendell Hamil',
      profilePicture: '/images/users/4.jpeg',
      rating: 8.4,
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
      username: 'Gregory Tibbits',
      profilePicture: '/images/users/5.jpeg',
      rating: 4.8,
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
      username: 'Maria Ervin',
      profilePicture: '/images/users/6.jpeg',
      rating: 9.4,
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
      username: 'Mary Lamphear',
      profilePicture: '/images/users/7.jpeg',
      rating: 3.8,
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

export default withRouter(SearchResultsPage);
