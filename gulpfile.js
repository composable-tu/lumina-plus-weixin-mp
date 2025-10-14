const {series} = require('gulp');
const {exec} = require('child_process');
function generateOSSLicenses(cb) {
    exec('node OSSLicensesBuilder.js', (err, stdout, stderr) => {
        if (err) {
            console.error(`执行 OSSLicensesBuilder.js 出错: ${err}`);
            return cb(err);
        }
        console.log(stdout);
        if (stderr) console.error(stderr);
        cb();
    });
}

function generateUnoCSS(cb) {
    exec('unocss src/components/**/*.wxml src/custom-tab-bar/**/*.wxml src/pages/**/*.wxml !miniprogram/pages/**/node_modules/** !miniprogram/pages/**/miniprogram_npm/** -c uno.config.js -o src/unocss.wxss', (err, stdout, stderr) => {
        if (err) {
            console.error(`生成 UnoCSS 出错: ${err}`);
            return cb(err);
        }
        console.log(stdout);
        if (stderr) console.error(stderr);
        cb();
    });
}

exports.default = series(generateUnoCSS, generateOSSLicenses);
