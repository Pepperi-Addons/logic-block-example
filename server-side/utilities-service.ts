import { PapiClient, InstalledAddon, Relation } from '@pepperi-addons/papi-sdk'
import { Client } from '@pepperi-addons/debug-server';

class UtilitiesService {

    papiClient: PapiClient

    constructor(private client: Client) {
        this.papiClient = new PapiClient({
            baseURL: client.BaseURL,
            token: client.OAuthAccessToken,
            addonUUID: client.AddonUUID,
            addonSecretKey: client.AddonSecretKey,
            actionUUID: client.ActionUUID
        });
    }

    // For page block template
    async upsertRelation(relation): Promise<Relation> {
        return await this.papiClient.addons.data.relations.upsert(relation);
    }
}

export default UtilitiesService;