import '@pepperi-addons/cpi-node'

export const router = Router();

export async function load(configuration: any) {
    console.log('cpi side works!');
    // Put your cpi side code here
}

router.post('/example_block', async (req, res) => {
    if(req.body) {
        console.log(`chosen slug is: ${req.body.slug}`);
    }
    else {
        console.log('no body was sent');
    }
    res.json({
    })
})