import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((val) => [
      { status: 'Fulfilled', value: val[0] },
      { status: 'Fulfilled', value: val[1] },
    ],
    (err) => [
      { status: 'Rejected', value: err[0] },
      { status: 'Rejected', value: err[1] },
    ]);
}
