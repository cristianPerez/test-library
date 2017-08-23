'use strict';

/**
 * Class oriented to build a API Rest from whatever endpoint.
 * @class Resource
 */
class Resource {

    /**
   * Constructor using for initialize a class.
   * @param {*} client
   */
    constructor(client) {
        this.config = client.key;
    }



    /**
     * Function to count all rows in whatever collection.
     * @function count
     */
    async count(number) {

        const result = await this.all(number);
        return result;

    }

    /**
   * Function that return all rows in a collection.
   * @function all
   */
    all(number) {
        return number*3;
    }

}

module.exports = Resource;
