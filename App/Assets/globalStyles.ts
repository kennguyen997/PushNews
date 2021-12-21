import {StyleSheet} from 'react-native';
import {colors} from '.';
import {sizes} from './fonts';
import {sizeBackup} from './constants';

export const globalStyles = StyleSheet.create({
  headerPadding: {
    paddingTop: sizes.s3 + sizeBackup * 1.25,
  },
  stIconBack: {
    marginRight: 8,
    marginLeft: 3,
    fontSize: 22,
  },
  sizeIcon: {
    fontSize: 22.5,
  },
  textWhite: {
    color: colors.white,
  },
  textWhiteBold: {
    color: colors.white,
    fontWeight: '500',
  },
  textBold: {
    fontWeight: '500',
  },
  flex1: {
    flex: 1,
  },
  flexJustifyEnd: {
    justifyContent: 'flex-end',
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  absoluteFull: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  shadowBlack: {
    backgroundColor: colors.white,
    //android
    shadowColor: colors.black_50,
    shadowOffset: {
      width: 7,
      height: 10,
    },
    shadowOpacity: 0.275,
    shadowRadius: 6.27,
    //ios
    elevation: 15,
  },
  shadowBlack75: {
    backgroundColor: colors.white,
    //android
    shadowColor: colors.black_75,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.275,
    shadowRadius: 6.27,
    //ios
    elevation: 15,
  },
  shadowCard: {
    backgroundColor: colors.white,
    //android
    shadowColor: colors.black_75,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6.27,
    //ios
    elevation: 15,
  },
  shadowCard50: {
    backgroundColor: colors.white,
    //android
    shadowColor: colors.black_50,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6.27,
    //ios
    elevation: 15,
  },
  shadowCard25: {
    backgroundColor: colors.white,
    //android
    shadowColor: colors.black_25,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.27,
    //ios
    elevation: 15,
  },
  paddingContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  // size common
  mt2: {
    marginTop: sizes.s2,
  },
  mt3: {
    marginTop: sizes.s3,
  },
  mt4: {
    marginTop: sizes.s4,
  },
  mb3: {
    marginBottom: sizes.s3,
  },
  mr1: {
    marginRight: sizes.s1,
  },
  mx1: {
    marginHorizontal: sizes.s1,
  },
});
