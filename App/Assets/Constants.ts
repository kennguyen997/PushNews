import {Dimensions} from 'react-native';

export const {width: widthScreen, height: heightScreen} =
  Dimensions.get('window');

export const valBgLinearGradientShadow = [
  'rgba(0, 0, 0, 0.22)',
  'rgba(0, 0, 0, 0.18)',
  'rgba(0, 0, 0, 0.12)',
  'rgba(0, 0, 0, 0.06)',
  'rgba(0, 0, 0, 0.01)',
  'rgba(0, 0, 0, 0.01)',
  'rgba(0, 0, 0, 0.01)',
  'rgba(0, 0, 0, 0.09)',
  'rgba(0, 0, 0, 0.18)',
  'rgba(0, 0, 0, 0.3)',
  'rgba(0, 0, 0, 0.4)',
  'rgba(0, 0, 0, 0.5)',
  'rgba(0, 0, 0, 0.55)',
];

export let sizeBackup = 0;
if (heightScreen > 800) {
  sizeBackup = 20;
}

export const navigationHeight = heightScreen * 0.09 + sizeBackup;
