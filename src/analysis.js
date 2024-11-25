const appDataStore = [
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
  //retrieving and analyzing a particular app by using its's ID
  function getAppAnalysis(id) {
    const app = appDataStore.find(app => app.id === id);
    if (!app) return null;
  
    const riskLevel = app.sensitiveData ? 'High' : 'Low';
    const queriesRisk = app.queriesMade > 10 ? 'High Usage' : 'Low Usage';
  
    return {
      ...app,
      analysis: {
        riskLevel,
        queriesRisk,
      },
    };
  }
  
  // retrieving and analyzing all the apps
  function getAllAppAnalyses() {
    return appDataStore.map(app => {
      const riskLevel = app.sensitiveData ? 'High' : 'Low';
      const queriesRisk = app.queriesMade > 10 ? 'High Usage' : 'Low Usage';
      return {
        ...app,
        analysis: {
          riskLevel,
          queriesRisk,
        },
      };
    });
  }
  module.exports = {
    getAppAnalysis,
    getAllAppAnalyses,
  };
  