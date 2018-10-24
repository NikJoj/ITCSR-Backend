const Promise = require('bluebird');

const models = require('../../models');
// const obtainInformation = require('./obtainInformation');

const parametersunderheadsMethods = {};

parametersunderheadsMethods.addParametersunderheads = (info) => {
  console.log('inside adding parameter under heads');
  return new Promise((resolve, reject) => {
    models.parameters_under_heads.create(info)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

// findid
// parameterunderheadsMethods.findById = (parameter_id) => {
//   // console.log('finding by id');
//   return new Promise((resolve, reject) => {
//     models.parameter_under_heads.findAll({
//       where:
//       { paramter_id },

//     }).then((people) => {
//       if (people) {

//         resolve( people);

//         resolve(people);

//       } else {
//         reject(new Error('Not a valid  person id'));
//       }
//     }).catch((err) => {
//       console.log(err);
//       reject(err);
//     });
//   });
// };

 parametersunderheadsMethods.getAllParametersunderheads = () => new Promise((resolve,reject) => {
  models.parameters_under_heads.findAll()
    .then((result) => {
      resolve(result);
    })
    .catch((err) => {
      console.log(err);
      reject(err);
    });
});

 parametersunderheadsMethods.updateParametersunderheads = (info, data) => new Promise((resolve, reject) => {
  models.parameters_under_heads.update(data, {
    where: {
      parameter_id: info.people_id,
    },
  })
    .then((updated) => {
      if (updated > 0) {
        resolve(updated);
      } else {
        reject(new Error());
        // throw ('err')
      }
    }).catch((error) => {
      reject(error);
    });
});



 peopleMethods.deletePeople = info => new Promise((
  resolve,
  reject,
) => {
  models.people.destroy({
    where: {
      people_id: info.people_id,

    },
  }).then((deleted) => {
    if (deleted === 0) {
      console.log('error deleted 0');
      reject(new Error());
    } else {
      resolve(deleted);
    }
  }).catch((err) => {
    reject(err);
  });
});

module.exports =  peopleMethods;