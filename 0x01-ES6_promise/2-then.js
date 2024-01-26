export default function handleResponseFromAPI(promise) {
  promise.then(
    (value) => {
      return { status: 200, body: 'success' };
    },
    (error) => {
      return new Error();
    }
  );
  console.log('Got a response from the API');
}
