'use strict'

class LineId {
  async fails (error) {
    return this.ctx.response.status(400).send({ error: { message: error[0].message, name: 'IncorretFilter', status: 400 } })
  }

  get rules () {
    return {
      lineId: 'required',
      lineId: 'number',
    }
  }

  get messages () {
    return {
      'lineId.required': 'Please, enter the lineId',
      'lineId.number': 'Please, the lineId must be number'
    }
  }
}

module.exports = LineId
