import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  photo.then((result) => {
    const body = result.body;
    const user = createUser();
    user.then((result) => {
      const firstname = result.firstName;
      const lastname = result.lastName;
      console.log(body, firstname, lastname);
    });
  });
}
