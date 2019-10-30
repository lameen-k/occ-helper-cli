const gitIgnore = `node_modules
.env
# OS X
.DS_Store*
Icon?
._*

# Windows
Thumbs.db
ehthumbs.db
Desktop.ini

# Linux
.directory
*~
`;

const envFile = vars => {
  return `env_path = "${vars.envPath}"
app_key = "${vars.appKey}"
`;
};

module.exports = {
  gitIgnore,
  envFile
};
