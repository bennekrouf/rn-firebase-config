Pod::Spec.new do |s|
    s.name         = "mayo-firebase-config"
    s.version      = "1.2.17 "
    s.summary      = "Firebase config auto extractor."
  
    s.description  = <<-DESC
                    From firebase config we can extract a file that already contains all what is needed to interact with firebase and firestore. So this package is extracting these parameters from these files, to avoid to have to build again a firebaseconfig object or file
                    DESC
  
    s.homepage     = "https://github.com/bennekrouf/mayo-firebase-config"
  
    s.license      = { :type => "MIT", :file => "LICENSE" }
  
    s.author             = { "bennekrouf" => "mb@mayorana.ch" }
    s.platform     = :ios, "9.0"
    
    s.source       = { :git => "https://github.com/bennekrouf/mayo-firebase-config.git", :tag => s.version.to_s }
  
    s.source_files  = "ios/**/*.{h,m,swift}"
    s.dependency 'React'
  
    s.swift_version = '5.0'
  end
  