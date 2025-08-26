1) create one web page with some basic code 
	i) link the jqurry , style files
	ii) create basic navigation 

2) convert into pwa 
	i) Install the Vite PWA plugin.
		npm install vite-plugin-pwa -D
	II) Install Bubblewrap 
		npm install -g @bubblewrap/cli
	III) Now run Bubblewrap
		bubblewrap init --manifest http://localhost:8080/manifest.json
		bubblewrap build
		bubblewrap install
	IV) Do you want Bubblewrap to install the JDK  --> Y
			Downloading the JDK 17 Sources...
			Decompressing the JDK 17 Sources...
			Decompressing the JDK 17 Binaries...
	V ) Do you want Bubblewrap to install the Android SDK --> Y
		Do you agree to the Android SDK terms and conditions at --> Y

-----------------------------------------------------------------------------------
	--> Web app details (1/5)
		domin, url path,
	--> Android app details (2/5)
		Application name
		short name
		application ID
		Display mode
		sttaus bar color
	--> Launcher icons and splash screen (3/5)
		Splash screen color
		 Icon URL
		 maskable Icon Url
	--> Optional Features (4/5)
		Include support for Play Billing? No
		Request geolocation permission? No
	--> KEY LOCATION 
		 Key store location: /home/tm-17/Working Area/2nd_PWA_APP/android.keystore
   
-------------------------------------------------------------------------
1. Clean up partial project

	rm -rf ./android
	rm -rf ./app
	rm -f twa-manifest.json
