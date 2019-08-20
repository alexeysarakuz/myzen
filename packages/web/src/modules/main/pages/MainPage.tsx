import NavHeader from 'components/NavHeader/NavHeader';
import React from 'react';
import styled from 'styled-components';

const MainPage = () => (
  <Wrapper>
    <NavHeader />
    <div>
      <AbstractBlueSquare />
      <AbstractYellowSquare />
      <AbstractCyanSquare />
    </div>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

const AbstractBlueSquare = styled.div`
  width: 50%;
  max-width: 700px;
`;

const AbstractYellowSquare = styled.div``;

const AbstractCyanSquare = styled.div``;

export default MainPage;
