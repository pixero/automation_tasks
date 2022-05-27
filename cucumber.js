const common = `
  --require-module ts-node/register
  --require src/settings/**/*
  --require src/step-definitions/**/*.ts
  --publish
  `;
module.exports = {
  default: `${common}`
};
