import {AccountGateway} from '../Gateways/AccountGateway';
import {
  LoginCredentials,
  LoginUser,
  SignUp,
  ChangePassword,
} from '../Models/Account';
// import {checkValidates, Validation, TypesCheck} from '../Models';

export class AccountService {
  private accountGateway: AccountGateway;

  constructor(accountGateway: AccountGateway) {
    this.accountGateway = accountGateway;
  }

  async login(loginForm: LoginCredentials) {
    // checkValidates(loginForm, settingValidateLogin);
    const {token} = await this.accountGateway.login(loginForm);
    await this.accountGateway.useAndSaveAccessToken(token);
    return this.accountGateway.getLoginUser();
  }

  async logout() {
    await this.accountGateway.logout();
    await this.accountGateway.useAndSaveAccessToken('');
  }

  signUp(signUpForm: SignUp) {
    // checkValidates(signUpForm, settingValidateSignUp);
    return this.accountGateway.signUp(signUpForm);
  }

  getLoginUser(): Promise<LoginUser | null> {
    return this.accountGateway.getLoginUser();
  }

  editAccount(userForm: LoginUser): Promise<void | null> {
    return this.accountGateway.edit(userForm);
  }

  uploadFile(file: Object): Promise<Object | null> {
    return this.accountGateway.upload(file);
  }

  forgotPassword(email: string): Promise<Object | null> {
    return this.accountGateway.forgotPassword(email);
  }

  changePassword(data: ChangePassword): Promise<Object | null> {
    return this.accountGateway.changePassword(data);
  }
}
