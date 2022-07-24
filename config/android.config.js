const {config} = require('./wdio.conf')
// const androidExternalAppInfo = require('./android.external.app.info')
const androidInternalAppInfo = require('./android.internal.app.info')

// const path = require('path')

config.capabilities=[
    {
        platformName: 'Android',
        automationName: 'uiautomator2',
        maxInstances: 1,
        noReset: false,
        fullReset: false,
        // deviceName: androidExternalAppInfo.deviceName,
        // platformVersion: androidExternalAppInfo.platformVersion,
        // appPackage: androidExternalAppInfo.appPackage,
        // appActivity: androidExternalAppInfo.appActivity
        // app: path.resolve('apps/' + androidExternalAppInfo.app)
        deviceName: androidInternalAppInfo.deviceName,
        platformVersion: androidInternalAppInfo.platformVersion,
        appPackage: androidInternalAppInfo.appPackage,
        appActivity: androidInternalAppInfo.appActivity

    }
]
config.port = 4723,
config.path = '/wd/hub',
config.specs = [
    './test/appTest/*.ts'
];
exports.config = config;