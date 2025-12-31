// productController.js
import productModel from "../models/productModel.js";
import sendMail from "../utils/mailer.js";

const getProduct = async (req, res) => {
  try {
    const{ page = 1, limit = 5,search = ""} = req.query;

    const query = {
        title:{$regex: search, $options: "i"}
    };


    const product = await productModel.find(query).skip((page-1)*limit).limit(Number(limit))
    const total = await productModel.countDocuments(query)
    // const product = await productModel.countDocuments();
    res.status(200).json({
    total,
    page:Number(page),
    pages:Math.ceil(total/limit),
    product

    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const postProduct = async (req, res) => {
  try {
    const product = await productModel.create(req.body);

    await sendMail({
      to: "rupaliwakhare184@gmail.com",
      sunject: "New Product Added",
      html: `<h1>New Product Added</h1>
      <p><b>Name: </b>${product.title}</p>
      <p><b>Price: </b>${product.price}</p>`,
    });

    res.status(201).json({ message: "Product added", product });
  } catch (error) {
    res.status(500).send(error);
  }
};


const updateProduct = async(req,res)=>{
    try {
        const id = req.params.id;
        const product = await productModel.findByIdAndUpdate(id,req.body)
        res.status(200).json({message:"Product updated",product})
    } catch (error) {
        res.status(500).send({message:"Error", error:error.error });
    }
}

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productModel.findByIdAndDelete(id, req.body);
    res.status(200).json({ message: "Product deleted", product });
  } catch (error) {
    res.status(500).json({ sucess: false, message: "error" });
  }
};
export { getProduct, postProduct, updateProduct, deleteProduct };
