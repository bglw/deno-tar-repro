import { Untar } from "https://deno.land/std@0.139.0/archive/tar.ts";

const standardFile = await Deno.open("pagefind-v0.10.7-aarch64-apple-darwin.tar", { read: true });
const standardFileUntar = new Untar(standardFile);

const sparseFile = await Deno.open("pagefind-v0.10.6-aarch64-apple-darwin.tar", { read: true });
const sparseFileUntar = new Untar(sparseFile);

console.log("\nStandard tar file contents:");
for await (const entry of standardFileUntar) {
    console.log(`• ${entry.fileName}`);
}

console.log("\nSparse tar file contents:");
for await (const entry of sparseFileUntar) {
    console.log(`• ${entry.fileName}`);
}

console.log("\n(Both should extract as one file `pagefind`)");

standardFile.close();
sparseFile.close();
