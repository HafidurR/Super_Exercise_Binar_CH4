const { client, address, city, province, country } = require('../models');
const response = require('../helper/response.utils');

class clientController {

  static getAll = async (req, res) => {
    await client.findAll({
      attributes: ['id', 'name', 'ktp_number', 'npwp_number'],
      include: [{
        model: address,
        attributes: ['id', 'address_description', 'postal_code', 'client_id', 'city_id'],
        include: [{
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
        }]
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

    await client.findOne(option)
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
    const { name, ktp_number, npwp_number } = req.body;

    await client.create({
      name, ktp_number, npwp_number
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
    const { name, ktp_number, npwp_number } = req.body;
    const option = {
      where: {
        id: id
      }
    }

    await client.findOne(option)
      .then(async (rsl) => {
        if (rsl === null) {
          return response.notFoundResponse(res);
        } else {
          await client.update({
            name, ktp_number, npwp_number
          }, option)
            .then(async () => {
              await client.findOne(option)
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

    await client.findOne(option)
      .then(async (result) => {
        if (result === null) {
          return response.notFoundResponse(res)
        } else {
          await client.destroy(option)
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

module.exports = clientController;