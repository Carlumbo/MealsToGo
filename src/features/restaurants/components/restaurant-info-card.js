import React from 'react';
import star from '../../../../assets/star';
import { Spacer } from '../../../components/spacer/Spacer.component';
import openSvg from '../../../../assets/openSvg';
import { Text } from '../../../components/topography/text.component';
import uuid from 'react-uuid';
import {
  RestCard,
  ResCardCover,
  Info,
  Rating,
  Address,
  SectionEnd,
  Section,
  FakeView,
  OpenImg,
  Icon,
} from './restuarant-info-card.styles';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Carl's Restaurant",
    icon = 'https://cdn-icons-png.flaticon.com/512/632/632339.png',
    photos = [
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    ],
    address = '155 Fake Street, Cleveland, Ohio 44113',
    isOpenNow = true,
    rating = 25,
    isClosedTemporarily = true,
  } = restaurant;

  let maxRating;
  rating > 5 ? (maxRating = 5) : (maxRating = rating);
  const ratingArray = Array.from(new Array(Math.ceil(maxRating)));

  return (
    <RestCard>
      <ResCardCover
        key={name}
        source={{
          uri: photos[0],
        }}
      />
      <Info>
        <Text variant='label'>{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <OpenImg key={uuid()} xml={star} />
            ))}
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant='error'>CLOSED TEMPORARILY</Text>
              )}
              <Spacer position='left' size='large' />
              {isOpenNow && !isClosedTemporarily && <OpenImg xml={openSvg} />}
              <Spacer position='left' size='large' />
              <Icon source={{ uri: icon }} />
            </SectionEnd>
          </Rating>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestCard>
  );
};
