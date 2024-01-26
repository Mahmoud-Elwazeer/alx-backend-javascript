import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((val) => [
      { status: 'fulfilled', value: val[0] },
      { status: 'fulfilled', value: val[1] },
    ],
    (err) => [
      { status: 'rejected', value: err[0] },
      { status: 'rejected', value: err[1] },
    ]);
}
