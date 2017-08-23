'use strict';

const Resource = require('../core/resource');

class Addon extends Resource {

    constructor (client) {

        super(client);
        this.url = '/addOns';

    }

}

module.exports = Addon;
