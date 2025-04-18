const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const scoreCollection = db.collection('scores');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ email: user.email }, { $set: user });
}

async function addScore(newScore) {
  const collection = db.collection('scores');

  // Try to find an existing score
  const existing = await collection.findOne({ name: newScore.name });

  if (!existing) {
    // No score yet? Just insert it
    await collection.insertOne(newScore);
  } else if (existing.clicks < newScore.clicks) {
    // New score is better? Update it
    await collection.updateOne(
      { name: newScore.name },
      { $set: { clicks: newScore.clicks } }
    );
  }
}

async function getHighScores() {
  // console.log('Fetching high scores...');

  // Step 1: Create the cursor
  const cursor = scoreCollection.find();
  // console.log('Cursor created:', cursor);

  // Step 2: Apply sorting
  const sortedCursor = cursor.sort({ clicks: -1 });
  // console.log('Sorting applied');

  // Step 3: Apply limit
  const limitedCursor = sortedCursor.limit(10);
  // console.log('Limit applied');

  // Step 4: Convert to array
  const scores = await limitedCursor.toArray();
  // console.log('Scores retrieved:', scores);

  return scores;
}

module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  addScore,
  getHighScores,
};
