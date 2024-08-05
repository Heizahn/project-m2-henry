const axios = require("axios");
const { tempData } = require("./tempData.js");

async function fetchData(url) {
    try {
        const res = await axios(url);
        return {
            message: "Solicitud Exitosa",
            data: res.data,
        };
    } catch (error) {
        return {
            error: true,
            message: "Error al pedir la solicitud",
            data: tempData,
        };
    }
}

module.exports = fetchData;
