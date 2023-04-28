import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";

const handle = async (req, res) => {
    const { method } = req;
    await mongooseConnect();

    if (method === 'GET') {
        res.json(await Category.find().populate('parent'));
    }

    if (method === 'POST') {
        const { name, parentCategory } = req.body;
        const categoryDoc = await Category.create({
            name,
            parent: parentCategory
        });
        res.json(categoryDoc);
    }
    if (method === 'PUT') {
        const { name, parentCategory, _id } = req.body;
        const categoryDoc = await Category.updateOne({ _id }, {
            name,
            parent: parentCategory
        });
        res.json(categoryDoc);

    }

    if (method === 'DELETE') {
        const { _id } = req.query;
        aw Category.deleteOne({ _id });
    }
}

export default handle