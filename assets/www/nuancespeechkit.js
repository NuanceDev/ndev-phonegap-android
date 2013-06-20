
var NuanceSpeechKitPlugin = function() {
};

/**
  * Initialize speech kit
  *  
  * @param credentialClassName The class name to be loaded to retrieve the app id and key
  * @param serverName The hostname of the server to connect to
  * @param port The port number for connection
  * @param sslEnabled True if SSL is enabled for the connection
  * @param successCallback The callback function for success
  * @param failureCallback The callback function for error
  */
NuanceSpeechKitPlugin.prototype.initialize = function(credentialClassName, serverName, port, sslEnabled, successCallback, failureCallback) {
 return PhoneGap.exec( successCallback, 
		 			   failureCallback, 
		 			   'NuanceSpeechKitPlugin', 
		 			   'init',  
		 			   [credentialClassName, serverName, port, sslEnabled]);  
};

/**
 * Clean up speech kit
 *  
 * @param successCallback The callback function for success
 * @param failureCallback The callback function for error
 */
NuanceSpeechKitPlugin.prototype.cleanup = function(successCallback, failureCallback) {
	 return PhoneGap.exec(successCallback,    
			 			  failureCallback, 
			 			  'NuanceSpeechKitPlugin', 
			 			  'cleanup',      
			 			  []);
};

/**
 * Starts speech recognition
 *  
 * @param recoType Type of recognition (dictation or websearch)
 * @param language Language code for recognition
 * @param successCallback The callback function for success
 * @param failureCallback The callback function for error
 */
NuanceSpeechKitPlugin.prototype.startRecognition = function(recoType, language, successCallback, failureCallback) {
		 return PhoneGap.exec(successCallback,
				 			  failureCallback,
				 			  'NuanceSpeechKitPlugin',
				 			  'startReco', 
				 			  [recoType, language]);
};

/**
 * Stops speech recognition
 *  
 * @param successCallback The callback function for success
 * @param failureCallback The callback function for error
 */
NuanceSpeechKitPlugin.prototype.stopRecognition = function(successCallback, failureCallback) {
	 return PhoneGap.exec(successCallback,
			 			  failureCallback,
			 			  'NuanceSpeechKitPlugin',
			 			  'stopReco', 
			 			  []); 
};

/**
 * Gets the last set of results from speech recognition
 *  
 * @param successCallback The callback function for success
 * @param failureCallback The callback function for error
 */
NuanceSpeechKitPlugin.prototype.getResults = function(successCallback, failureCallback) {
	 return PhoneGap.exec(successCallback,
			 		      failureCallback,
			 		      'NuanceSpeechKitPlugin', 
			 		      'getRecoResult', 
			 		      []);
};

/**
 * Plays text using text to speech
 *  
 * @param text The text to play
 * @param language Language code for TTS playback
 * @param voice The voice to be used for TTS playback
 * @param successCallback The callback function for success
 * @param failureCallback The callback function for error
 */
NuanceSpeechKitPlugin.prototype.playTTS = function(text, language, voice, successCallback, failureCallback) {
	 return PhoneGap.exec(successCallback, 
			 			  failureCallback, 
			 			  'NuanceSpeechKitPlugin', 
			 			  'playTTS', 
			 			  [text, language, voice]); 
};

/**
 * Stops text to speech playback
 *  
 * @param text The text to play
 * @param language Language code for TTS playback
 * @param voice The voice to be used for TTS playback
 * @param successCallback The callback function for success
 * @param failureCallback The callback function for error
 */
NuanceSpeechKitPlugin.prototype.stopTTS = function(successCallback, failureCallback) {
	 return PhoneGap.exec(successCallback,
			 			  failureCallback, 
			 			  'NuanceSpeechKitPlugin', 
			 			  'stopTTS', 
			 			  []); 
};


/**
 * Sets up a callback for the next event
 *  
 * @param successCallback The callback function for success
 * @param failureCallback The callback function for error
 */
NuanceSpeechKitPlugin.prototype.queryNextEvent = function(successCallback, failureCallback) {
	 return PhoneGap.exec(successCallback,
			 			  failureCallback, 
			 			  'NuanceSpeechKitPlugin', 
			 			  'queryNextEvent', 
			 			  []); 
};

//PhoneGap.addConstructor(function() {
//    PhoneGap.addPlugin('NuanceSpeechKitPlugin', new NuanceSpeechKitPlugin());
//});