Make_USER_TOKEN_KEY = require("crypto").randomBytes(64).toString("hex");

/***************************************
 *********--------------------**********
 *********|| verify with jwt ||*********
 *********--------------------**********
 ***************************************/

function verifyJwt(req, res, next) {
    const userTokens = req.headers.authorization;
    if (!userTokens) {
        return res.status(401).send("Unauthorized access");
    }
    jwt.verify(userTokens, process.env.USER_TOKEN, (err, decoded) => {
        if (err) {
            return res.status(403).send("unauthorized user");
        }
        req.decoded = decoded;
        next();
    });
}

/***************************************
 *********------------------************
 *********|| verify Admin ||************
 *********------------------************
 ***************************************/

const verifyAdmin = async (req, res, next) => {
    const decodedEmail = req.decoded.email;
    const adminquery = { email: decodedEmail };

    const userData = await usersCollection.findOne(adminquery);
    if (userData?.role !== "Admin") {
        return res.send({ message: "You are not an admin" });
    }
    next();
};

app.get("addprice", async (req, res) => {
    const query = {};

    const updatedoc = { $set: { price: 99 } };
    const options = { upsert: true };

    const result = await usersCollection.updateMany(query, updatedoc, options);
});
