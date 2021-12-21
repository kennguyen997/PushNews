import {PERMISSIONS, request, check} from 'react-native-permissions';
import {Platform} from 'react-native';

const PERMISSION_LOCATION: any = Platform.select({
  android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
  ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
});

export const Sleep = async (second: number) => {
  await new Promise(resolve => {
    setTimeout(resolve, second);
  });
};

export const SlowFetch = async (
  func: Promise<any | void>,
  timing: number = 1200,
) => {
  const all: [Promise<any>, Promise<void>] = [func, Sleep(timing)];
  return Promise.all(all).then(([res]) => res);
};

export const requestPermissionLocation = async () => {
  return request(PERMISSION_LOCATION);
};

export const checkPermissionLocation = async () => {
  return check(PERMISSION_LOCATION);
};

export default {
  Sleep,
};
