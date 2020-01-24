import * as RecruitActions from '../recruit.actions';
import { connect } from 'react-redux';
import { getFreelancers, getFreelancersQuantity } from '../recruit.reducer';
import ItemPreloader from 'components/ItemPreloader/ItemPreloader';
import NavBar from 'components/NavBar/NavBar';
import ProfileWidget from 'components/ProfileWidget/ProfileWidget';
import queryString from 'query-string';
import React, { useState, useEffect } from 'react';
import { ResultItem } from '../dashboard.models';
import SearchField from 'components/SearchField/SearchField';
import SearchResultsItem from 'components/SearchResultsItem/SearchResultsItem';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Hamburger from 'components/Hamburger/Hamburger';
import Logo from 'components/Logo/Logo';

const SearchResultsPage = ({
  location,
  freelancers,
  freelancersQuantity,
  searchFreelancers,
  searchFreelancersOnLoad,
}: any) => {
  let urlTags = queryString.parse(location.search).tags;
  let inputTags: any = [];

  if (urlTags) {
    urlTags = urlTags.toString().split(',');
    inputTags = urlTags.map(item => ({
      title: item,
    }));
  }

  const [listingResults, changeListingResults] = useState([]);
  const [listingResultsQuantity, changeListingResultsQuantity] = useState(null);

  useEffect(() => {
    searchFreelancersOnLoad();
  }, [searchFreelancersOnLoad]);

  useEffect(() => {
    setTimeout(() => {
      changeListingResults(freelancers);
      changeListingResultsQuantity(freelancersQuantity);
    }, 800);
  }, [changeListingResults, freelancers]);

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
            <SearchField
              defaultTags={inputTags}
              searchFreelancers={searchFreelancers}
            />
          </SearchFieldContainer>
          <ProfileContainer>
            <ProfileWidget />
          </ProfileContainer>
        </ResultsHeader>
        <FiltersPanel>
          <SearchCount>
            Search Results ({freelancersQuantity ? freelancersQuantity : '?'})
          </SearchCount>
          <Filters>
            <Filter>Filters</Filter>
          </Filters>
        </FiltersPanel>
        <ResultsListing>
          {listingResults && listingResultsQuantity !== null ? (
            listingResults.map((item: ResultItem) => (
              <SearchResultsItem item={item} key={item._id} />
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

SearchResultsPage.defaultProps = {};

const mapStateToProps = (state: any) => ({
  freelancers: getFreelancers(state),
  freelancersQuantity: getFreelancersQuantity(state),
});

const mapDispatchToProps = {
  searchFreelancers: RecruitActions.searchFreelancers,
  searchFreelancersOnLoad: RecruitActions.searchFreelancersOnLoad,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(SearchResultsPage));
