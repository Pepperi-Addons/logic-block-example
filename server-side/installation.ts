
/*
The return object format MUST contain the field 'success':
{success:true}

If the result of your code is 'false' then return:
{success:false, erroeMessage:{the reason why it is false}}
The error Message is importent! it will be written in the audit log and help the user to understand what happen
*/

import { Client, Request } from '@pepperi-addons/debug-server'
import { Relation } from '@pepperi-addons/papi-sdk'
import UtilitiesService from './utilities-service';

export async function install(client: Client, request: Request): Promise<any> {
    // For block template uncomment this.
    const res = await createBlockRelation(client);
    return res;
}

export async function uninstall(client: Client, request: Request): Promise<any> {
    return {success:true,resultObject:{}}
}

export async function upgrade(client: Client, request: Request): Promise<any> {
    return {success:true,resultObject:{}}
}

export async function downgrade(client: Client, request: Request): Promise<any> {
    return {success:true,resultObject:{}}
}

async function createBlockRelation(client: Client): Promise<any> {
    try {
        // TODO: change to block name (this is the unique relation name and the description that will be on the block).
        const blockName = 'ExampleBlock';

        const filename = `file_${client.AddonUUID}`;

        const logicBlockRelation: Relation = {
            RelationName: 'LogicBlock',
            Name: blockName,
            Description: `${blockName} block`,
            Type: "NgComponent",
            SubType: "NG14",
            AddonUUID: client.AddonUUID,
            AddonRelativeURL: filename,
            ComponentName: `LogicBlockComponent`, // This is should be the block component name (from the client-side)
            ModuleName: `LogicBlockModule`, // This is should be the block module name (from the client-side),
            ElementsModule: 'WebComponents',
            ElementName: `example-logic-block-element-${client.AddonUUID}`,
            BlockExecutionRelativeURL: '/addon-cpi/example_block'
        };

        const service = new UtilitiesService(client);
        const result = await service.upsertRelation(logicBlockRelation);
        return { success:true, resultObject: result };
    } catch(err) {
        return { success: false, resultObject: err , errorMessage: `Error in upsert relation. error - ${err}`};
    }
}