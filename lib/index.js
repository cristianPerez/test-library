'use strict';

//const _ = require('lodash');
//const resources = require('./resources');

class RetailPointSDK {

    constructor(key = '') {

        this.key = key;

    }

    loadResources() {

        console.log(`${this.key} The key`);

        //this['addons'] = new addons(this);

        console.log(this);

    }

}


module.exports = RetailPointSDK;
