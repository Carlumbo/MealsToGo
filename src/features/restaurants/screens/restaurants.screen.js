import React from 'react';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card';
import { SearchView, ResView, ResList } from './restuarants.styles';
import { SafeArea } from '../../../components/utiity/safe-area.component';

export const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchView>
        <Searchbar />
      </SearchView>
      <ResView>
        <ResList
          data={[
            { name: 1 },
            { name: 2 },
            { name: 3 },
            { name: 4 },
            { name: 5 },
            { name: 6 },
            { name: 7 },
            { name: 8 },
            { name: 9 },
          ]}
          renderItem={() => <RestaurantInfoCard />}
          keyExtractor={(item) => item.name}
        />
      </ResView>
    </SafeArea>
  );
};
