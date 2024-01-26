import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((vals) => {
      vals.forEach((val) => {
        if (val.status === 'fulfilled') {
          console.log({ status: val.status, value: val.value });
        } else if (val.status === 'rejected') {
          console.log({ status: val.status, value: val.reason });
        }
      });
    });
}
