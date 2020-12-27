const { createClient } = require("@astrajs/collections")

exports.handler = async function (event, context, callback) {

  const access_token = process.env.FUNCTIONS_ACCESS_TOKEN;

  const token = event.headers["x-access-token"];

  if(token != access_token){
    return {
      statusCode: 401,
      body: "Unauthorized",
    }
  }

  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    username: process.env.ASTRA_DB_USERNAME,
    password: process.env.ASTRA_DB_PASSWORD,
  })

  let collection = "sites";

  if(event.queryStringParameters.site){
    collection = event.queryStringParameters.site;
  }

  const users = astraClient
    .namespace(process.env.ASTRA_DB_KEYSPACE)
    .collection(collection);

  try {
    const res = await users.find({});
    return {
      statusCode: 200,
      body: JSON.stringify(Object.keys(res).map((i) => res[i])),
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    }
  }
}