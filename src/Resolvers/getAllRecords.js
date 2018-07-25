import {
  Record
} from "../schema";

const getAllRecords = async () => {
  return await Record.find();
};

export default getAllRecords;