import styled from 'styled-components/native';
import {TextStyle, TextProps, ViewStyle, ViewProps} from 'react-native';
import {FunctionComponent} from 'react';
import {colors} from '.';

export const fonts = {
  youngSerif: 'YoungSerif',
  avenirMedium: 'Avenir-Medium',
};

export const sizes = {
  bigHeader: 50,
  //
  h0: 38,
  h1: 34,
  h2: 28,
  h3: 24,
  h4: 22,
  h5: 18,
  h6: 14,
  h7: 12,
  h8: 10,
  h9: 8,
  // size common
  s0: 0,
  s1: 5,
  s2: 10,
  s3: 15,
  s4: 20,
  s5: 25,
};

type IText = FunctionComponent<TextProps>;
type IView = FunctionComponent<ViewProps>;

export const Header: IText = styled.Text`
  font-family: ${(p: TextStyle) => p.fontFamily || fonts.youngSerif};
  font-size: ${p => p.fontSize || `${sizes.h3}px`};
  text-align: ${p => p.textAlign || 'left'};
  color: ${p => p.color || colors.shark};
  font-weight: ${p => p.fontWeight || '500'};
  text-transform: ${p => p.textTransform || 'none'};
  padding: ${p => p.padding || `${sizes.s3}px 1px`};
`;

export const Container: IView = styled.View`
  flex: ${(p: ViewStyle) => p.flex || 1};
  background-color: ${p => p.backgroundColor || colors.bgScreen};
`;

export const Text: IText = styled.Text`
  font-family: ${(p: TextStyle) => p.fontFamily || fonts.avenirMedium};
  font-size: ${p => p.fontSize || `${sizes.h6}px`};
  text-align: ${p => p.textAlign || 'left'};
  color: ${p => p.color || colors.shark};
  font-weight: ${p => p.fontWeight || '300'};
  text-transform: ${p => p.textTransform || 'none'};
`;

export const Title: IText = styled.Text`
  font-family: ${(p: TextStyle) => p.fontFamily || fonts.youngSerif};
  font-size: ${p => p.fontSize || `${sizes.h5}px`};
  text-align: ${p => p.textAlign || 'left'};
  color: ${p => p.color || colors.shark};
  font-weight: ${p => p.fontWeight || 'normal'};
  text-transform: ${p => p.textTransform || 'none'};
`;
