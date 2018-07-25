import { Record } from "../schema";

const getRecord = async name => {
  return await Record.findOne({
    name
  });
};

export default getRecord;
