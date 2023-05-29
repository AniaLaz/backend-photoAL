const fs = require("fs/promises");
const path = require("path");
// const { nanoid } = require("nanoid");

const photoPath = path.join(__dirname, "photos.json");

const getAll = async () => {
    const data = await fs.readFile(photoPath);
     console.log("1111111111111");
    return JSON.parse(data);
}

const getById = async (id) => {
  const photos = await getAll();
  console.log("22222222");
  const result = photos.find((item) => item.id === id);
  return result || null;
};



module.exports = {
  getAll,
  getById,
};