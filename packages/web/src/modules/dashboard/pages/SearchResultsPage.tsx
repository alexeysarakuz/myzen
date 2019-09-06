import NavBar from 'components/NavBar/NavBar';
import Profile from 'components/Profile/Profile';
import React from 'react';
import SearchField from 'components/SearchField/SearchField';
import styled from 'styled-components';

const SearchResultsPage = () => (
  <div>
    <NavBar />
    <ResultsContent>
      <ResultsHeader>
        <SearchField />
        <Profile />
      </ResultsHeader>
    </ResultsContent>
  </div>
);

const ResultsContent = styled.div`
  margin-left: 280px;
  box-sizing: border-box;
`;

const ResultsHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  box-sizing: border-box;
`;

export default SearchResultsPage;
