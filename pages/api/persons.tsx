import dbConnect from '../../lib/mongodbnext'
import Person from '../../models/Person'

export default async function handler(req, res) {
    const {method} = req
    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const persons = await Person.find({});
                res.status(200).json({success: true, data: persons})
            } catch (error) {
                res.status(400).json({success: false});
            }
            break;
        case 'POST':
            try {
                const person = await Person.create(req.body);
                res.status(201).json({succes: true, data: person})
            } catch (error) {
                res.status(400).json({success: false});
            }

            break;
        default:
            res.status(400).json({success: false});
            break;
    }

}
