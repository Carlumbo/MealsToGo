import React, { useContext } from 'react';
import { ActivityIndicator, Colors, Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card';
import {
  SearchView,
  ResView,
  ActiveView,
  ResList as RestaurantList,
} from './restuarants.styles';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantsContext } from '../../../services/restaurant/restaurants.context';
import { Spacer } from '../../../components/spacer/Spacer.component';
import { Search } from '../components/search.component';

export const RestaurantScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <ActiveView>
          <ActivityIndicator
            animating={true}
            color={Colors.blue800}
            size='large'
          />
        </ActiveView>
      )}
      <Search />
      <ResView>
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <Spacer position='bottom' size='large'>
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </ResView>
    </SafeArea>
  );
  // }
};
