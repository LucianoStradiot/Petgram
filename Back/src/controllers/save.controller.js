const SaveService = require("../services/save");
const { handleCreate, handleDeleted, handleGetById } = require('./base.controller');
const {modelIds, modelNames} = require('../constants');

// utilizamos los servicios que tenemos en la clase hija en (save.service)
const service = new SaveService();
const Save = service.getModel(modelNames.Save) //obtenemos el modelo que necesitamos

const create = async (req,res) => {
    let dataBody = { ...req.body, status:true };
    await handleCreate(req, res, service.create.bind(service),Save, dataBody);
}

const getById = async (req, res) => {
    const { id } = req.params;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20; 
    await handleGetById(req, res, service.findAllSaved.bind(service),Save, id, modelIds.saveId,page,limit);
};

const _deleted = async (req, res) => {
    const { id } = req.params;
    await handleDeleted(req, res, service.update.bind(service),Save, id, { status: false },modelIds.saveId);
};

module.exports = {
    create, getById, _deleted
};
