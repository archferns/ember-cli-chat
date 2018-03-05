/* eslint-env node */
module.exports = {
  description: 'ember-cli-chat',

  // locals(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall(options) {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-engines' }
      ]
    });
  }
};
