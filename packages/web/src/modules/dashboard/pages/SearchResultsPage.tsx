import NavBar from 'components/NavBar/NavBar';
import Profile from 'components/Profile/Profile';
import React from 'react';
import { ResultItem } from '../dashboard.models';
import SearchField from 'components/SearchField/SearchField';
import styled from 'styled-components';

const SearchResultsPage = ({ results }: { results: ResultItem[] }) => (
  <>
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
          <Item key={item.id}>
            <UserData>
              <Image src={item.profilePicture} />
              <>
                <Name>{item.username}</Name>
              </>
            </UserData>
            <Rating>
              <RatingNumber>{item.rating} Rating</RatingNumber>
              <RatingLineContainer>
                <RatingLine width={item.rating * 10} />
              </RatingLineContainer>
            </Rating>

            <TagsTitle>Roles</TagsTitle>
            <Tags>
              {item.tags.map(tag => (
                <Tag key={tag.title}>{tag.title}</Tag>
              ))}
            </Tags>

            <ReviewsTitle>
              REVIEWS ABOUT <ReviewsName>{item.username}</ReviewsName>
            </ReviewsTitle>
            <Reviews>
              <Review>
                <ReviewImage src={item.profilePicture} />
              </Review>
              <Review>
                <ReviewImage src={item.profilePicture} />
              </Review>
              <Review>
                <ReviewImage src={item.profilePicture} />
              </Review>
              <Review>
                <ReviewImage src={item.profilePicture} />
              </Review>
            </Reviews>

            <ButtonsRow>
              <CommunicateButton>Book now</CommunicateButton>
              <CommunicateButton>Text now</CommunicateButton>
              <CommunicateFullButton>Text now</CommunicateFullButton>
            </ButtonsRow>
          </Item>
        ))}
      </ResultsListing>
    </ResultsContent>
  </>
);

const ResultsContent = styled.div`
  min-height: 100vh;
  margin-left: 280px;
  background: ${props => props.theme.colors.lightGray};
  box-sizing: border-box;
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
`;

const Item = styled.div`
  box-sizing: border-box;
  padding: 15px;
  margin-bottom: 15px;
  width: 23.5%;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 0 20px ${props => props.theme.colors.primaryBlueShadow};
`;

const UserData = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;

const Name = styled.h3`
  font-weight: 400;
  font-size: 18px;
  margin-left: 15px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const RatingNumber = styled.div`
  width: 35%;
  font-size: 14px;
`;

const RatingLineContainer = styled.div`
  width: 65%;
`;

const RatingLine = styled.div<{ width: number }>`
  position: relative;
  height: 5px;
  width: 100%;
  background-color: ${props => props.theme.colors.lightGrayTags};
  border-radius: 20px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => props.width}%;
    height: 100%;
    background-color: ${props => props.theme.colors.greenRating};
  }
`;

const Tags = styled.div`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
`;

const TagsTitle = styled.h3`
  margin-bottom: 4px;
  font-size: 13px;
  font-weight: bold;
  color: ${props => props.theme.colors.darkGrayTags};
  text-transform: uppercase;
`;

const Tag = styled.div`
  padding: 9px 13px;
  margin-right: 10px;
  margin-top: 8px;
  font-size: 13px;
  color: ${props => props.theme.colors.darkGrayTags};
  background-color: ${props => props.theme.colors.lightGrayTags};
  border-radius: 4px;
`;

const Reviews = styled.div`
  display: flex;
`;

const ReviewsTitle = styled.h3`
  margin-top: 20px;
  margin-bottom: 4px;
  font-size: 13px;
  font-weight: 600;
  color: ${props => props.theme.colors.darkGrayTags};
  text-transform: uppercase;
`;

const Review = styled.div`
  margin-top: 10px;
  position: relative;

  &:last-child {
    width: 32px;
    height: 32px;

    &::after {
      content: '';
      position: absolute;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      opacity: 0.6;
      background-color: ${props => props.theme.colors.black};
      left: 2px;
      top: 2px;
    }

    &::before {
      content: '+6';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      font-size: 10px;
      color: ${props => props.theme.colors.white};
      z-index: 5;
    }
  }
`;

const ReviewImage = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin-right: -15px;
  border: 2px solid ${props => props.theme.colors.white};
`;

const ReviewsName = styled.b`
  color: ${props => props.theme.colors.primaryBlue};
`;

const ButtonsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
`;

const CommunicateButton = styled.button`
  padding: 13px;
  width: 48%;
  font-weight: 500;
  margin-top: 10px;
  color: ${props => props.theme.colors.primaryBlue};
  text-transform: uppercase;
  border: 1.5px solid ${props => props.theme.colors.lightGray};
  border-radius: 5px;
  background-color: ${props => props.theme.colors.white};
`;

const CommunicateFullButton = styled(CommunicateButton)`
  width: 100%;
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
