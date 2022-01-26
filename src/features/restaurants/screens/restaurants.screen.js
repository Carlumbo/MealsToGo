import React from 'react';
import styled from 'styled-components/native';
import { spacing } from '../../../utils/sizes';
import { SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurant-info-card';

//if status bar has a value add margin top
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

const SearchView = styled.View`
  padding: ${spacing.sm}px;
  background-color: white;
`;
const ResView = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #7788ff;
`;

export const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchView>
        <Searchbar />
      </SearchView>
      <ResView>
        <RestaurantInfoCard />
      </ResView>
    </SafeArea>
  );
};
