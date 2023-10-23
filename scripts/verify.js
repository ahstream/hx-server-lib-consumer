import { round, fetchHelper } from 'hx-client-lib';
import { randomBytes, createWallet } from 'hx-server-lib';

async function run() {
  const resp = await fetchHelper('https://www.google.com/');
  console.log('www.google.com:', resp.data.substr(0, 100));
  console.log(`round(10.1234, 2) = ${round(10.1234, 2)}`);
  console.log(`randomBytes(5) = ${randomBytes(5)}`);
  console.log(`createWallet() =`, createWallet());
}

async function main() {
  run();
}

main()
  .then(() => {})
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
