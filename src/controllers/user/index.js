import { signup } from './signup';
import { login } from './login';
import { getOne, getAll, getMe } from './get.user';
import { update } from './update.user';
import { validateToken } from './validateToken';

export default ({
  signup, login, getOne, getAll, getMe, update, validateToken,
});
