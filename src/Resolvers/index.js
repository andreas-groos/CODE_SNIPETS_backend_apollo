import {saveUser, getUserInfo} from "./user";



const resolvers = {
  Query: {
    getUserInfo: (root, args, context) => {
      return getUserInfo(args)
    },
    hello: () => 'Hello world!',
  },
  Mutation: {
    // saveUser: async(root, args, context) => await saveUser(args)
  }
}

export default resolvers