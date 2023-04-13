'use strict';

/**
 *  article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({strapi}) => ({
  async findOne(ctx) {
    const {id} = ctx.params;
    
    const entity = await strapi.db.query('api::article.article').findOne({
      where: {slug: id}
    });
    const sanitizedResults = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedResults);
  }
}));
