import React from 'react';
import { Avatar, Button, Card, Paragraph } from 'react-native-paper';
import { Text, Image, View } from 'react-native';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import { Spacer } from '../../../components/spacer/Spacer.component';
//import uuid from 'react-uuid';
import openSvg from '../../../../assets/openSvg';

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading}
  font-size: ${(props) => props.theme.fontSizes.body}

  color: ${(props) => props.theme.colors.ui.primary};
`;
const RestCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;
const ResCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Address = styled.Text`
font-family: ${(props) => props.theme.fonts.heading}
font-size: ${(props) => props.theme.fontSizes.caption}`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const OpenImg = styled(SvgXml)`
  width: ${(props) => props.theme.sizes[2]};
  height: ${(props) => props.theme.sizes[2]};
`;

const RestImg = styled(Image)`
  width: ${(props) => props.theme.sizes[1]};
  height: ${(props) => props.theme.sizes[1]};
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Carl's Restaurant",
    icon = 'https://cdn-icons-png.flaticon.com/512/632/632339.png',
    photos = [
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    ],
    address = '155 Fake Street, Cleveland, Ohio 44113',
    isOpenNow = true,
    rating = 25,
    isClosedTemporarily = false,
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
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant='label' style={{ color: 'red' }}>
                  CLOSED TEMPORARILY
                </Text>
              )}
              <Spacer position='left' size='medium'>
                {isOpenNow && !isClosedTemporarily && <OpenImg xml={openSvg} />}
              </Spacer>
              <Spacer position='left' size='medium'>
                <RestImg source={{ uri: icon }} />
              </Spacer>
            </SectionEnd>
          </Rating>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestCard>
  );
};

/* <Card.Content >
        <Text>{address}</Text>
        <Card.Actions>
          <Button>Favorite</Button>
          <Button>Menu</Button>
        </Card.Actions>
      </Card.Content> */

export default RestaurantInfoCard;
