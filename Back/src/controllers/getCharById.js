//HW Integration de 03.Promises
// const axios = require('axios');
// const URL_BASE = "https://be-a-rym.up.railway.app/api";
// const KEY = "0976a66d7e82.e06bb0df0c2f8fbac366";

// const getCharById = (res, id) => {
//     axios.get(`${URL_BASE}/character/${id}?key=${KEY}`)
//         .then (response => {const {id, image, name, gender, species} = response.data;
//             res.writeHead(200, {"Content-Type" : "application/json"});
//             res.end(JSON.stringify({id, name, gender, species, image}));
//         })
//         .catch(err => {
//             res.writeHead(500, {"Content-Type" : "text/plain"});
//             res.end(err.message);
//         });
// }

// module.exports = getCharById;//

//Acá comienza la integration de 05.Express//


const axios = require('axios');
const URL = "https://be-a-rym.up.railway.app/api";
const KEY = "0976a66d7e82.e06bb0df0c2f8fbac366";

const getCharById = (req, res)=>{
    const {id} = req.params;
    //Esto se puede modularizar aún más creando la cb de then por fuera
    axios
        .get(`${URL}/character/${id}?key=${KEY}`)
        .then ((response) => {
            const {id, image, name, gender, species} = response.data;
            res.status(200).json({id, name, gender, species, image});
    })
      .catch(err => {
        res.status(500).json({error: err.message});
    });
}

module.exports = getCharById;