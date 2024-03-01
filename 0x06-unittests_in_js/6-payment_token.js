function getPaymentTokenFromAPI(success) {
  return new Promise((res) => {
    if (success) {
        res({data: 'Successful response from the API' })
    }
  })
}

module.exports = getPaymentTokenFromAPI;
