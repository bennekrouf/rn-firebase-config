module.exports = {
    dependency: {
      platforms: {
        android: {
          sourceDir: './android',
          packageImportPath: 'import com.mayorana.mayofirebaseconfig.FirebaseConfigExtractorModule;',
          packageInstance: 'new FirebaseConfigExtractorModule(reactContext)',
        },
      },
    },
  };
  