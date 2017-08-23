'use strict';

const resources = require('./resources/index');

class RetailPointSDK {

    constructor(key = '') {

        this.key = key;

    }

    loadResources() {

        console.log(`${this.key} The key`);

        this['addons'] = new resources.addons(this);

        console.log('SSSS');
        console.log(this.addons.count(2).then(function(data) {
            console.log(data);
        }));


    }

}


module.exports = RetailPointSDK;
