# Seed project
This project is an example for structuring your cordova applications.

# Setup
This setup is geared towards Windows development. PowerShell or cmd will do.

### Node.js and related cli tools
Get either [Node.js](http://nodejs.org/) or [nodist](https://github.com/marcelklehr/nodist) in case you need to manage multiple node versions.

*Remember to restart your shell window after performing all of the above in order to get PATH changes*

**Make sure you also have git installed and accessible through your command line.**

Now we need to install some node based tools globally:

```
npm install -g cordova gulp bower
```

Now cd to the project's root directory and execture the following
```
npm install && bower install
```

use `gulp build` to build the app and `gulp watch` to setup development

# Windows Phone 8 setup

Get [Window Phone 8 SDK](http://www.microsoft.com/en-us/download/details.aspx?id=35471)

# Android setup
Take note of all the paths you install into so that we can modify our PATH variable later.

## Required downloads

### [Java JDK 7](http://www.oracle.com/technetwork/java/javase/downloads/)

### [Android SDK](http://developer.android.com/sdk/)
Use the download link under "Use an existing IDE".

### [Apache Ant](http://ant.apache.org/bindownload.cgi)

Now we need to add some system variables. My setup looks like this.
```
ANDROID_HOME = C:\Users\BogdanR\AppData\Local\Android\android-sdk
ANT_HOME = C:\dev\apache-ant-1.9.3
JAVA_HOME = C:\Program Files\Java\jdk1.7.0_51
```

Then we can add this to PATH
```
%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools;%ANT_HOME%\bin;%JAVA_HOME%\bin
```

Now go to `%ANDROID_HOME%` and run `SDK MANAGER.exe`. Make sure you have installed one of the newer Android API versions.

In **Tools** you should have Android SDK Tools, ANdroid SDK Platform-tools, Android SDK Build-tools.

In **Extras** get Google Play services and Google USB Driver.
