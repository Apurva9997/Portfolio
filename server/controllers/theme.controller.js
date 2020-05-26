const ThemeRepository = require('../repositories/theme.repository');
const ResponseUtil = require('../utils/response.util');

const getThemes = async (req, res) => {
  try {
    const themes = ThemeRepository.getAllThemes();
    return ResponseUtil(res, "Themes fetched successfully.", themes, 200);
  }
  catch (err) {
    res.status(500).send('Server error occured while trying to fetch themes.');
  }
}

module.exports = {
  getThemes
}