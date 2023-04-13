'use strict';

/**
 * teammates service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::teammates.teammates');
