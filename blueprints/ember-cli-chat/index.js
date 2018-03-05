/* eslint-env node */
module.exports = {
  description: 'ember-cli-chat',

  // locals(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  beforeInstall() {
    return this.addPackagesToProject({
      packages: [
        { name: 'ember-engines' }
      ]
    });
  }
};
