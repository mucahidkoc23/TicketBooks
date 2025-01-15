const colors = jest.genMockFromModule("colors");

const unity = (s) => s;
colors.bgBlue = {};
colors.blue = colors.red = colors.bgBlue = unity;

module.exports = colors;
