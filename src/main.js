const { google } = require('googleapis')
require('dotenv').config()

const books = google.books({
  version: 'v1',
  auth: process.env.GOOGLE_CREDENTIAL
})
// Do the magic
async function main() {
  const auth = new google.auth.GoogleAuth({
    // Scopes can be specified either as an array or as a single, space-delimited string.
    scopes: ['https://www.googleapis.com/auth/books'],
  });

  // Acquire an auth client, and bind it to all future calls
  const authClient = await auth.fromAPIKey('AIzaSyAd_b7XuqjWc2u-68ls7zbGriX1OXx0Yy8')
  google.options({auth: authClient});

  // Do the magic
  const res = await books.bookshelves.get({
    shelf: 'teste'
  })
  userId: '105020858009407835072'
  console.log(res.data)
  // Example response
  // {
  //   "access": "my_access",
  //   "created": "my_created",
  //   "description": "my_description",
  //   "id": 0,
  //   "kind": "my_kind",
  //   "selfLink": "my_selfLink",
  //   "title": "my_title",
  //   "updated": "my_updated",
  //   "volumeCount": 0,
  //   "volumesLastUpdated": "my_volumesLastUpdated"
  // }
}

main().catch(e => {
  console.error(e);
  throw e;
});
