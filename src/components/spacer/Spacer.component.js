import React from 'react';
import styled from 'styled-components/native';

const TopSmall = styled.View`
  margin-top: ${(props) => props.theme.space[1]};
`;
const TopMedium = styled.View`
  margin-top: ${(props) => props.theme.space[2]};
`;
const TopLarge = styled.View`
  margin-top: ${(props) => props.theme.space[3]};
`;

const LeftSmall = styled.View`
  margin-left: ${(props) => props.theme.space[1]};
`;
const LeftMedium = styled.View`
  margin-left: ${(props) => props.theme.space[2]};
`;
const LeftLarge = styled.View`
  margin-left: ${(props) => props.theme.space[3]};
`;

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: 'marginTop',
  left: 'marginLeft',
  right: 'marginRight',
  bottom: 'marginBottom',
};

const getVariant = (position, size) =>
  `${positionVariant[position]}:${sizeVariant[size]} `;
export const Spacer = styled.View`
  ${({ position, size }) => getVariant(position, size)}
`;

Spacer.defaultProps = {
  position: 'top',
  size: 'small',
};
