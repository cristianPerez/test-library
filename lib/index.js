'use strict';

//const _ = require('lodash');
const resources = require('./resources/index');

class RetailPointSDK {

    constructor(key = '') {

        this.key = key;

    }

    loadResources() {

        console.log(`${this.key} The key`);

        this['addons'] = new resources.addons(this);

        console.log(this);

    }

}


module.exports = RetailPointSDK;
