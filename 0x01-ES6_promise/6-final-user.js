import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((vals) => vals.map((val) => {
      let out;
      if (val.status === 'fulfilled') {
        out = { status: val.status, value: val.value };
      } else if (val.status === 'rejected') {
        out = { status: val.status, value: val.reason };
      }
      return out;
    }));
}
