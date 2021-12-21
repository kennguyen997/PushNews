import axios from 'axios';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AccountService} from './AccountService';

import {AccountGateway} from '../Gateways/AccountGateway';

const restConnector = axios.create({baseURL: Config.API_URL});

const accountGateway = new AccountGateway(restConnector, AsyncStorage);

export const accountService = new AccountService(accountGateway);
