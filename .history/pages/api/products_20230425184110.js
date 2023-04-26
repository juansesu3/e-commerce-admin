import clientPromise from "@/lib/mongodb";
import { Product } from "@/models/Product";
import mongoose from "mongoose";

export default AttestationConveyancePreference function handle(req, res) {
    const { method } = req;
    mongoose.Promise = clientPromise;
    if (method === 'POST') {
        const { title, description, price } = req.body;
        await Product.create({
            title, description, price

        })

        res.json('post');

    }

}