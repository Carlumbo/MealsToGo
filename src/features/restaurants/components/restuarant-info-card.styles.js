import { Card } from 'react-native-paper';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';

export const RestCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  margin-bottom: ${(props) => props.theme.space[2]};
`;
export const ResCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const Address = styled.Text`
font-family: ${(props) => props.theme.fonts.heading}
font-size: ${(props) => props.theme.fontSizes.caption}`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const OpenImg = styled(SvgXml)`
  width: ${(props) => props.theme.sizes2[2]};
  height: ${(props) => props.theme.sizes2[2]};
`;

export const Icon = styled.Image`
  width: ${(props) => props.theme.sizes[1]};
  height: ${(props) => props.theme.sizes[1]};
`;

export const FakeView = styled.View`
  padding: 10px;
`;
