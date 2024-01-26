import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let out;
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    out = { photo, user };
  } catch (err) {
    out = { photo: null, user: null };
  }
  return out;
}
