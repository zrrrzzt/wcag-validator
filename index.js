const querystring = require('querystring')
const axios = require('axios')
const validUrl = require('valid-url')
const uri = 'https://achecker.ca/checkacc.php'

function makeUrl (options) {
  const query = {
    uri: options.uri,
    id: options.id,
    output: options.output || 'html',
    guide: options.guide || 'WCAG2-AA',
    offset: options.offset || 0
  }
  return `${uri}?${querystring.stringify(query)}`
}

module.exports = async function (options) {
  if (!options.uri) {
    throw new Error('Missing required param: uri')
  }

  if (options.uri && !validUrl.isWebUri(options.uri)) {
    throw new Error('Invalid url')
  }

  if (!options.id) {
    throw new Error('Missing required param: id')
  }

  try {
    const url = makeUrl(options)
    const { data } = await axios(url)
    return data
  } catch (error) {
    throw error
  }
}
