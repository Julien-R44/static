const shouldUpdateRepo = !process.argv.includes("--no-update-repo");

console.log("Removing old files...");
await $`rm -rf sponsorkit`;

console.log("Building sponsors.svg...");
await $`pnpm sponsorkit`;

console.log("Uploading to R2...");
await $`pnpm wrangler r2 object put static/sponsors.png --file=sponsorkit/sponsors.png --content-type=image/png`;

if (shouldUpdateRepo) {
  console.log("Updating repo...");
  await $`git add . && git commit -m "Update sponsors.png" && git push`;
}

console.log("Done!");
