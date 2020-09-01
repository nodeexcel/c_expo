'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    findImage: async ctx=>{
    const {imageKey} = ctx.params
    const fetched =  await strapi.query('image').model.query(qb => {
      qb.where({'imageKey':imageKey});
    })
    .fetch();
    return fetched;
  }
};
