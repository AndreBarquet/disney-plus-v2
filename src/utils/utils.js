
function exists(value) {
  return value !== undefined && value !== null;
};

function notExists(value) {
  return value === undefined || value === null;
};


export {
  exists,
  notExists,
}