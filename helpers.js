exports.getBytesUnits = (bytes) => {
  if (bytes < 9999) {
    return bytes + ' bytes';
  } else if (bytes < 999999) {
    return (bytes / 1000).toFixed(2) + ' KB';
  } else if (bytes < 999999999) {
    return (bytes / 1000000).toFixed(2) + ' MB';
  } else {
    return (bytes / 1000000000).toFixed(2) + ' GB';
  }
};
