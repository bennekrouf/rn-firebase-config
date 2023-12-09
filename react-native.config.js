module.exports = {
    dependency: {
      platforms: {
        android: {
          sourceDir: './android',
          packageInstance: "new FirebaseConfigPackage()"
          // packageInstance: 'new FirebaseConfigExtractorModule(reactContext)'
        },
      },
    },
  };
  