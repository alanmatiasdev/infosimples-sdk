import resources from '../resources';
 
export type IConnectOpts = {
  token: string;
}

const authorization = (opts: IConnectOpts) => {
  if(!opts.token){
    throw Error('You must provide a token ');
  }

  return opts;
}

const isFunction = (func: any) => {
  return typeof func === "function";
}

const binder = (func: Function, args: any) => func.bind(this, args);

const looper = (resource: any, auth: IConnectOpts) => {
  return Object.entries<any>(resource).reduce((result: any, [method, func]: [method: string, func: any]) => {
    result[method] = isFunction(func) ? binder(func, auth) : looper(func, auth);
    return result;
  }, {});
}

const connect = (opts: IConnectOpts): typeof resources => {
  const auth = authorization(opts);
  const parsedResources =  Object.entries<any>(resources).reduce((result: any, [resource, methods]: [resource: string, methods: any]) => {
    result[resource] = looper(methods, auth);
    return result;
  }, {});
  return parsedResources;
};

export declare type InfoSimplesClient = typeof resources;
export * from '../resources';

export default connect;