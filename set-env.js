const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const targetPath = 'src/environment.ts';

const envConfigFile = (
`const environment = {
  nodeEnv: process.env.NODE_ENV,
  development: process.env.DEVELOPMENT,
};

export default environment;`
);

fs.writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Environment file generated at ${targetPath}`);
  }
});
