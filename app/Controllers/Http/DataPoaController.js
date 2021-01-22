'use strict'

const DataPoaApi = use('Services/DataPoaApi')

class DataPoaController {
  async listLines ({ request }) {
    const allLines = await DataPoaApi.searchLines()
    const name = request.input('name')
    if (name) {
      const listLines = await this.filterLineByName(allLines, name)
      return listLines
    }

    return allLines
  }

  async filterLineByName (lines, name) {
    return lines.filter(line => line.nome === name)
  }

  async listItineraries ({ request }) {
    const lineId = request.input('lineId')
    const allLines = await DataPoaApi.searchItineraryByLineId(lineId)
    return allLines
  }
}

module.exports = DataPoaController
