var json2csv = require("json2csv");

exports.get = (req, res) => {
  var fields = [
    "name.firstName",
    "name.lastName",
    "biography",
    "twitter",
    "facebook",
    "linkedin"
  ];
  //console.log(json2csv);
  const csv = json2csv.parse({ data: "", fields: fields });
  res.set("Content-Disposition", "attachment;filename=authors.csv");
  res.set("Content-Type", "application/octet-stream");

  //res.send(csv);
};
