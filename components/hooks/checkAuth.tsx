import { userAuthStore } from '../../store/user';

export default function checkAuth() {
  const { user } = userAuthStore();

  if (user == null) {
    console.log('unauthenticated');
    window.location.replace('/login');
  }
  return;
}
