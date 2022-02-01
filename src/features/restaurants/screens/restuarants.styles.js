import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const SearchView = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

export const ResView = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.brand.primary};
`;

export const ResList = styled(FlatList).attrs({
  contentContainerStyle: {
    paddingRight: 6,
    paddingLeft: 6,
  },
})``;
