const { getAppAnalysis, getAllAppAnalyses } = require('./analysis');  // this is an Import functions from analysis.js
let appDataStore = [
  { id: '4', name: 'Be My Eyes', sensitiveData: true, queriesMade: 0 },
  { id: '5', name: 'HandicapX', sensitiveData: false, queriesMade: 0 },
  { id: '6', name: 'Twelve Steps', sensitiveData: true, queriesMade: 0 },
  { id: '7', name: 'Quitzilla', sensitiveData: true, queriesMade: 0 },
  { id: '8', name: 'BME Application', sensitiveData: false, queriesMade: 0 },
  { id: '9', name: 'ICT4PWDs', sensitiveData: true, queriesMade: 0 },
  { id: '10', name: 'Dateability', sensitiveData: true, queriesMade: 0 },
  { id: '11', name: 'I Am Sober', sensitiveData: true, queriesMade: 0 },
  { id: '12', name: 'Loosid', sensitiveData: true, queriesMade: 0 },
  { id: '13', name: 'Awed', sensitiveData: false, queriesMade: 0 },
  { id: '14', name: 'Disabled Singles Dating', sensitiveData: true, queriesMade: 0 },
  { id: '15', name: 'Sober Grid', sensitiveData: true, queriesMade: 0 },
  { id: '16', name: 'AccessNow', sensitiveData: false, queriesMade: 0 },
  { id: '17', name: 'SpeakLiz', sensitiveData: true, queriesMade: 0 }
];
const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
    getAllApps: () => getAllAppAnalyses(),  // Uses analysis function for all the apps
    appAnalysis: (parent, { id }) => getAppAnalysis(id),  // Gets analysis for a particular app by ID
  },
  Mutation: {
    createApp: (parent, args) => {
      const newApp = {
        id: `${appDataStore.length + 1}`,
        name: args.name,
        sensitiveData: args.sensitiveData,
        queriesMade: 0,
      };
      appDataStore.push(newApp);
      return newApp;
    },
    incrementQueries: (parent, { id }) => {
      const app = appDataStore.find(app => app.id === id);
      if (app) {
        app.queriesMade += 1;
        return app;
      }
      return null;
    },
  },
};
module.exports = resolvers;