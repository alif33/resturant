import nc from 'next-connect';
import Shop from '../../../../models/Shop'
import db from '../../../../utils/db';


const handler = nc();

handler.post(async (req, res) => {
    await db.connect();
    const shop = new Shop({});
    if(await shop.save()){
        await db.disconnect();
        res.send({
            success: true,
            message: 'Shop added successfully'
        })
    }

});

export default handler;
