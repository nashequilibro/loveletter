/**
 * @file RedisClient to export a running Redis client to the app to be cached and served.
 * @author George Danzer
 * @version 0.0.1
 */

/**
 * Start the Redis client.
 */
var Redis = require('ioredis');
var redis = new Redis();

/**
 * Make the client accessible to the public
 */
module.exports = redis;
