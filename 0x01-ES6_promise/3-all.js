import { uploadPhoto, createUser } from './utils'

export default function handleProfileSignup() {
  photo = uploadPhoto();
  photo.then((result) => {
    body = result.body;
    user = createUser();
    user.then((result) => {
      firstname = result.firstName
      lastname = result.lastName
      console.log(body, firstname, lastname)
    });
  });
}
