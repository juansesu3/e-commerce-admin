import { mongooseConnect } from "@/lib/mongoose";
import { isAdminRequest } from "./auth/[...nextauth]";
import { Admin } from "@/models/Admin";

const handle = async (req, res) => {
  await mongooseConnect();
  await isAdminRequest(req, res);

  if (req.method === "POST") {
    const { email } = req.body;
    res.json(await Admin.create({ email }));
  }
  if (req.method === "DELETE") {
    const { _id } = req.query;
    await Admin.findByIdAndDelete(_id);
    res.json(true);
  }
  if (req.method === "GET") {
    res.json(await Admin.find());
  }
};

export default handle;
