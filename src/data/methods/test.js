
var heads = require('./heads');

var proposal = require('./proposal');
var people = require('./people');
var request = require('./request');
var headsUnderProject = require('./heads_under_project');

//TEST

// CREATE
// proposal.addProposals({
//   project_id:1,
//   file_no:"./",
//   name:"manga",
//   data:{},
//   start_date:"2201-12-18",
//   duration:1000

// }).then(function(result){
//   console.log(result);
// });
// proposal.updateProposal({
// 	project_id:3,
//   file_no:"./",
//   name:"manga",
//   data:{},
//   start_date:"2201-12-18",
//   duration:1000
// },
// {
// 	project_id:3,
//   file_no:"blah",
//   name:"mazznga",
//   data:{},
//   start_date:"2201-12-18",
//   duration:1000

// }).then(function(result){
// 	console.log(result);
// });

//FIND BY ID
// proposal.findById(3).then(function(result){
// console.log(result);
// });

//GET ALL
// proposal.getAllProposals().then(function(result){
//   result.forEach(function(row){
//     console.log(row.get('project_id'));
//   });
// });
//DELETE
// proposal.deleteProposal({project_id:1}).then(function(result){
// console.log(result);
// });

//TEST

//CREATE
// heads.addHeads({
//   head_id:0,
//   name:"machinery",
//   remark:{"a":"b", "c":"d"}

// }).then(function(result){
//   console.log(result);
// });

// //FIND BY ID
// heads.findById(1).then(function(result){
// console.log(result);
// });

// //GET ALL
// heads.getAllHeads().then(function(result){
//   result.forEach(function(row){
//     console.log(row.get('head_id'));
//   });
// });

// heads.deleteHeads({head_id:0}).then(function(result){
// console.log(result);
// }).catch(function(result){
// 	console.log("Nothing to delete")
// });
// PEOPLE TEST

// people.addPeople({
//   people_id:2,
//   name:"sasidharan",
//   designation:"principal_investigator",
//   privilege:2,
//   date:"2018-03-03",
//   status:1
// }).then(function(result){
//   console.log(result.get('name'))
// });

// people.findById(1).then(function(result){
//   console.log(result);
// });

// people.getAllPeople().then(function(result){
//   console.log(result);
// });

// people.findById(1).then(function(result){
//   console.log(result);
// });

//DELETE
// people.deletePeople({people_id:1}).then(function(result){
// console.log(result);
// });

// //CREATE
request.addRequest({
    request_id:30,
    project_id : 1,
    head_id:1,
    description: "First request is being submitted",
    date: "2018-02-11",
    approval_level: 0,
    estimated_amount : 1000.00,
    remark: {}
  }).then(function(result){
    console.log(result);
  })
  .catch(function(err){
    console.log("fund exceeded");
  });
  
  // //FIND BY ID
  // request.findById(1).then(function(result){
  // console.log(result);
  // });
  
  //GET ALL
  // request.getAllRequests().then(function(result){
  //   result.forEach(function(row){
  //     console.log(row.get('request_id'));
  //   });
  // });
  // //DELETE
  // request.deleteRequest({request_id:0}).then(function(result){
  // console.log(result);
  // });
  // //UPDATE REQUEST
  // request.updateRequest({request_id:0,
  //   project_id : 1,
  //   description: "First request is being submitted",
  //   date: "2018-02-11",
  //   approval_level: 0,
  //   estimated_amount : 1200.00,
  //   remark: {}},{request_id:0,
  //   project_id : 1,
  //   description: "First request is being submitted",
  //   date: "2018-02-11",
  //   approval_level: 2,
  //   estimated_amount : 1200.00,
  //   remark: {}}).then(function(result){
  // console.log(result);
  // });
  
  // headsUnderProject.addNewHeadUnderProject({
  //     project_id:1,
  //     head_id:1,
  //     fund:200,
  //     spent:0
  // }).then(function(result){
  //     console.log(result);
  // });     
  
  // //FIND BY ID
  // headsUnderProject.findById(1,1).then(function(result){
  // console.log(result);
  // });