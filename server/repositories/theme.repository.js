const ThemeService = require('../services/theme.service');

const getAllThemes = async () => {
  return await ThemeService.allThemes();
}

module.exports = {
  getAllThemes
};