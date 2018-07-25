import { Record } from "../schema";

const saveRecord = async name => {
  return await new Record({ name }).save();
};

export default saveRecord;
