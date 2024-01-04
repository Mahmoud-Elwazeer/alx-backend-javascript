export default function handleResponseFromAPI(promise) {
    promise.then((value) => {
        {
            status: 200
            body: 'success'
        }
    });
    promise.catch((err)=> {new Error});
    console.log("Got a response from the API");
}