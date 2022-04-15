const { brand, client } = require('../models');
const response = require('../helper/response.utils');

class brandController {

  static getAll = async (req, res) => {
    await brand.findAll({
      attributes: ['id', 'name', 'is_big_brand', 'client_id'],
      include: [{
        model: client,
        attributes: ['id', 'name', 'ktp_number', 'npwp_number']
      }]
    })
      .then((result) => {
        return response.successResponse(res, result);
      })
      .catch((err) => {
        return response.badRequestResponse(res, err.message);
      })
  }

  static getById = async (req, res) => {
    const id = req.params.id;
    const option = {
      where: {
        id: id
      }
    }

    await brand.findOne(option)
      .then((result) => {
        if (result === null) {
          return response.notFoundResponse(res);
        } else {
          return response.successResponse(res, result)
        }
      })
      .catch((err) => {
        return response.badRequestResponse(res, err.message);
      })

  }

  static create = async (req, res) => {
    const { name, is_big_brand, client_id } = req.body;

    await brand.create({
      name, is_big_brand, client_id
    })
      .then((result) => {
        return response.successCreateResponse(res, result)
      })
      .catch((error) => {
        const err = error.errors
        const errorList = err.map(d => {
          let obj = {}
          obj[d.path] = d.message
          return obj;
        })
        return res.status(400).json({
          status: 'error',
          message: errorList
        })
      })
  }

  static update = async (req, res) => {
    const id = req.params.id;
    const { name, is_big_brand, client_id } = req.body;
    const option = {
      where: {
        id: id
      }
    }

    await brand.findOne(option)
      .then(async (rsl) => {
        if (rsl === null) {
          return response.notFoundResponse(res);
        } else {
          await brand.update({
            name, is_big_brand, client_id
          }, option)
            .then(async () => {
              await brand.findOne(option)
                .then((result) => {
                  return response.successUpdateResponse(res, result)
                })
                .catch((err) => {
                  return response.badRequestResponse(res, err.message);
                })
            })
            .catch((error) => {
              const err = error.errors
              const errorList = err.map(d => {
                let obj = {}
                obj[d.path] = d.message
                return obj;
              })
              return res.status(400).json({
                status: 'error',
                message: errorList
              })
            })
        }
      })
      .catch((err) => {
        return response.badRequestResponse(res, err.message);
      })
  }

  static delete = async (req, res) => {
    const id = req.params.id;
    const option = {
      where: {
        id: id
      }
    }

    await brand.findOne(option)
      .then(async (result) => {
        if (result === null) {
          return response.notFoundResponse(res)
        } else {
          await brand.destroy(option)
            .then(() => {
              return response.successDeleteResponse(res)
            })
            .catch((err) => {
              return response.badRequestResponse(res, err.message);
            })
        }
      })
  }
}

module.exports = brandController;