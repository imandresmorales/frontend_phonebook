import axios from "axios";
const baseUrl = '/api/persons';

const getAll = () => {
    return axios.get(baseUrl)
}

const create = (newObject) => {
    return axios.post(baseUrl,newObject)
}

const get = (id) => {
    return axios.get(`${baseUrl}/${id}`)
}
//delete
const eliminar = (id) => {
   return axios.delete(`${baseUrl}/${id}`)
}

const put = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}

export default {getAll, create, eliminar, put, get}