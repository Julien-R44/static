console.log("Building sponsors.svg...");
await $`pnpm sponsorkit`;

console.log("Uploading to R2...");
await $`pnpm wrangler r2 object put static/sponsors.svg --file=sponsorkit/sponsors.svg`;

console.log("Updating repo...");
await $`git add . && git commit -m "Update sponsors.png" && git push`;

console.log("Done!");
