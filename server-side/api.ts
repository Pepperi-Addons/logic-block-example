import UtilitiesService from './utilities-service'
import { Client, Request } from '@pepperi-addons/debug-server'

// add functions here
// this function will run on the 'api/foo' endpoint
// the real function is runnning on another typescript file
export async function foo(client: Client, request: Request) {
    // const service = new UtilitiesService(client)
    // const res = await service.getAddons()
    // return res
};

