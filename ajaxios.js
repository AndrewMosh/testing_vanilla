const axios = require("axios");

async function fetchData() {
  const response = await axios.get("https://api.publicapis.org/entries");
  return response.data;
}

module.exports = fetchData;
