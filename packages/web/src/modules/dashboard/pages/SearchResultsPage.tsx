import NavBar from 'components/NavBar/NavBar';
import React from 'react';
import styled from 'styled-components';

const SearchResultsPage = () => (
  <div>
    <NavBar />
    <ResultsContent>
      Search Results
      <div>123</div>
    </ResultsContent>
  </div>
);

const ResultsContent = styled.div`
  margin-left: 310px;
  box-sizing: border-box;
`;

export default SearchResultsPage;
