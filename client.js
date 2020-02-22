const axios = require('axios')

const day = process.argv[2]

const url = `xxxxxxx${day}`

const logSummary = async (url) => {
  await axios.get(url)
  console.log(response.data)
}

logSummary(url)