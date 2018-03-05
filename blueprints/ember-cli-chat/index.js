/* eslint-env node */
module.exports = {
  description: 'ember-cli-chat',
  normalizeEntityName() {},
  afterInstall(options) {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-engines' }
      ]
    });
  }
};
