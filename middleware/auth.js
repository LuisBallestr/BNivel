import jwt from "jsonwebtoken";

const auth = async (req, _, next) => {
  try {
    const token = req.headers.authorization.replace("Bearer ", "");

    let decodedData;

    if (token) {
      decodedData = jwt.verify(token, process.env.SECRET);
      req.userId = decodedData?.id;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
