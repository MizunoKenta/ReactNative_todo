import {Configuration} from './generated-rest-client';
const waitResponse: Middleware = {
  post: async context => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    return Promise.resolve(context.response);
  },
};
export const config = new Configuration({basePath: 'http://192.168.150.149:9080/api'});
