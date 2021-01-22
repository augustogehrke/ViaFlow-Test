'use strict'

const Env = use('Env')
const axios = require('axios')

class DataPoaApi {
  constructor (Config) {
    this.Config = Config
  }

  async searchLines () {
    try {
      const { data } = await axios.get(`${Env.get('DATA_POA_API_URL')}?a=nc&p=%&t=o`)
      return data
    } catch (error) {
      throw new Error({
        message: 'The Data Poa API is not currently available',
        name: 'Unavailable Service',
        status: 400
      })
    }
  }

  async searchItineraryByLineId (lineId) {
    try {
      const { data } = await axios.get(`${Env.get('DATA_POA_API_URL')}?a=il&p=${lineId}`)
      return data
    } catch (error) {
      throw new Error({
        message: 'The Data Poa API is not currently available',
        name: 'Unavailable Service',
        status: 400
      })
    }
  }
}

module.exports = DataPoaApi
