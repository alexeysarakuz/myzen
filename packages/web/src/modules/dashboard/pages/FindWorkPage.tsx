import NavBar from 'components/NavBar/NavBar';
import React from 'react';
import styled from 'styled-components';

const FindWorkPage = () => (
  <Page>
    <NavBar />
    <ResultsContent>
      <h2>Find Work Page</h2>
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

export default FindWorkPage;
