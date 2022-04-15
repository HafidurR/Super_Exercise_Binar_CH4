const { address, client, city, province, country } = require('../models');
const response = require('../helper/response.utils');

class addressController {

  static getAll = async (req, res) => {
    await address.findAll({
      attributes: ['id', 'address_description', 'postal_code', 'client_id', 'city_id'],
      include: [{
        model: client,
        attributes: ['id', 'name', 'ktp_number', 'npwp_number']
      },
      {
        model: city,
        attributes: ['id', 'name', 'province_id'],
        include: [{
          model: province,
          attributes: ['id', 'name', 'country_id'],
          include: [{
            model: country,
            attributes: ['id', 'name', 'country_code', 'phone_code']
          }]
        }]
      }
      ]
    })
      .then((result) => {
        return response.successResponse(res, result);
      })
      .catch((err) => {
        return response.badRequestResponse(res, err.message)
      })
  }

  static getById = async (req, res) => {
    const id = req.params.id;
    const option = {
      where: {
        id: id
      }
    }

    await address.findOne(option)
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
    const { address_description, postal_code, client_id, city_id } = req.body;

    await address.create({
      address_description, postal_code, client_id, city_id
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
    const { address_description, postal_code, client_id, city_id } = req.body;
    const option = {
      where: {
        id: id
      }
    }

    await address.findOne(option)
      .then(async (rsl) => {
        if (rsl === null) {
          return response.notFoundResponse(res);
        } else {
          await address.update({
            address_description, postal_code, client_id, city_id
          }, option)
            .then(async () => {
              await address.findOne(option)
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

    await address.findOne(option)
      .then(async (result) => {
        if (result === null) {
          return response.notFoundResponse(res)
        } else {
          await address.destroy(option)
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

module.exports = addressController;