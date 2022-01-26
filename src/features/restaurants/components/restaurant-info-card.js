import React from 'react';
import { Avatar, Button, Card, Paragraph } from 'react-native-paper';
import styled from 'styled-components/native';

const Title = styled.Text`
  padding: 10px;
  color: black;
`;
const RestCard = styled(Card)`
  background-color: white;
`;
const ResCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Carl's Restaurant",
    icon,
    photos = [
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    ],
    address = '155 Fake Street, Clevelan, Ohio',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <RestCard>
      <ResCardCover
        key={name}
        source={{
          uri: photos[0],
        }}
      />
      <Title>{name}</Title>
      {/* <Card.Content >
        <Text>{address}</Text>
        <Card.Actions>
          <Button>Favorite</Button>
          <Button>Menu</Button>
        </Card.Actions>
      </Card.Content> */}
    </RestCard>
  );
};

export default RestaurantInfoCard;
