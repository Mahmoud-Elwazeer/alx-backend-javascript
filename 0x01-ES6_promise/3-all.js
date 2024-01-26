import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  const photo = await uploadPhoto();
  const user = await createUser();

  console.log(photo.body, user.firstName, user.lastName);
}
