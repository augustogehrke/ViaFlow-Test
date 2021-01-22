'use strict'

class Line {
  async fails (error) {
    return this.ctx.response.status(400).send({ error: { message: error[0].message, name: 'IncorretFilter', status: 400 } })
  }

  get rules () {
    return {
      name: 'required',
      code: 'required',
    }
  }

  get messages () {
    return {
      'name.required': 'Please, enter the name',
      'code.required': 'Please, enter the code'
    }
  }
}

module.exports = Line
