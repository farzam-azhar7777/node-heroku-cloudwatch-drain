module.exports = {
    // how many messages should we buffer and send to AWS at once
  batchSize: 50,

  // at what port should our server be listening
  serverPort: process.env.PORT,

  // your cloudwatch log group
  logGroup: 'WeGuideEngageCanaryLogGroup',

  // prefix for all stream names (a random number will be appended)
  logStreamPrefix: "dyno",

  // we strongly recommend using env variables for the credentials, however you can still add them here
  awsCredentials: {
    region: "ap-southeast-2",
  },

  // access token, which will be sent from heroku on every request
  accessToken: "sometoken"
};