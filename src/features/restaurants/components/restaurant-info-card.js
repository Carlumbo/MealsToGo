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
  // console.log(restaurant);
  let {
    name,
    icon,
    photos,
    vicinity,
    isOpenNow,
    rating,
    permanentlyClosed,
    isClosedTemporarily,
  } = restaurant;
  let address = vicinity;
  rating > 5 ? (rating = 5) : rating;
  rating < 1 ? (rating = 1) : rating;
  const ratingArray = Array.from(new Array(Math.floor(rating)));

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
          </Rating>
          <SectionEnd>
            {permanentlyClosed && (
              <Text variant='error'>CLOSED PERMANENTLY</Text>
            )}

            {isClosedTemporarily ||
              (!isOpenNow && <Text variant='error'>CLOSED TEMPORARILY</Text>)}
            <Spacer position='left' size='large' />
            {isOpenNow && !isClosedTemporarily && <OpenImg xml={openSvg} />}
            <Spacer position='left' size='large' />
            <Icon source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestCard>
  );
};

{
  /* <Rating>
  {ratingArray.map(() => (
    <OpenImg key={uuid()} xml={star} />
  ))}
</Rating>; */
}
