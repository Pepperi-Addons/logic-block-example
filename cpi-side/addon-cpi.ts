import '@pepperi-addons/cpi-node'
import { Client } from '@pepperi-addons/cpi-node/build/cpi-side/events/client';

export const router = Router();

export async function load(configuration: any) {
    console.log('cpi side works!');
    // Put your cpi side code here
}

router.post('/example_block', async (req, res) => {
    if(req.body) {
        if ((req as any).client)
        {
            let client = (req as any).client as Client;
            await client.navigateTo({url:req.body.Slug})
        }
        else {
            console.log(`chosen slug is: ${req.body.Slug}`);
        }
    }
    else {
        console.log('no body was sent');
    }
    res.json({
    })
})