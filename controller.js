const express = require('express');

const date_generator = (req, res) => {
  const param = req.params.param;

  let api = getDate(param);
  res.json(api);
}

const getDate = param => {
  let date, api, dateObj;

  const options = {year: 'numeric', month: 'long', day: 'numeric'};
  const notTimestamp = isNaN(Number(param));

  if(notTimestamp) {
    date = new Date(param);
  } else {
    let timestamp = parseInt(param);
    date = new Date(timestamp);
  }

  const unix = date.getTime();
  let natural = date.toLocaleDateString('en-US', options);
  if(natural === "Invalid Date") natural = null;

  api = {
    unix,
    natural
  }

  return api;
}

module.exports = date_generator;
