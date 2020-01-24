import { connect } from 'react-redux';
import { getLocation } from 'modules/router/RouterReducer';
import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

interface BreadCrumbsProps {
  pageTitle: string;
  location: any;
}

const BreadCrumbs = ({ pageTitle, location }: BreadCrumbsProps) => {
  return (
    <Container>
      <PageTitle>{pageTitle}</PageTitle>
      <div>
        <CrumbLink to="/">main</CrumbLink> /
        {location.pathname.split('/').map((item: any) => (
          <CrumbLink to={`/${item}`} key={item}>
            &nbsp;{item}
          </CrumbLink>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 20px;
  color: ${props => props.theme.colors.darkGrayTabs};
  background-color: ${props => props.theme.colors.white};

  div {
    color: ${props => props.theme.colors.primaryBlue};
  }
`;

const PageTitle = styled.h2`
  font-size: 15px;
`;

const CrumbLink = styled(Link)`
  color: ${props => props.theme.colors.primaryBlue};
`;

const mapStateToProps = (state: any) => {
  return {
    location: getLocation(state),
  };
};

export default connect(mapStateToProps, null)(BreadCrumbs);
