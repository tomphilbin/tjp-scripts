import { execSync } from 'child_process';
import jsonfile from 'jsonfile';
import path from 'path';
import yargs from 'yargs';

const scripts = jsonfile.readFileSync(
  path.join(__dirname, '../config/scripts.json')
);

export default function app() {
  scripts.forEach(
    ({ name, description, script }) =>
      yargs.command(name, description, () => {
        try {
          execSync(script, { stdio: 'inherit' });
        } catch (err) {
          process.exit(err.status);
        }
      }).argv
  );
}
