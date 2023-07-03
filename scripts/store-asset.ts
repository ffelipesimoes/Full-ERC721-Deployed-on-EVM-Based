import { NFTStorage, File } from "nft.storage";
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.NFT_STORAGE_API_KEY!;

async function storeAsset(): Promise<void> {
  const client = new NFTStorage({ token: API_KEY });
  const metadata = await client.store({
    name: 'ExampleNFT',
    description: 'My ExampleNFT is an awesome artwork!',
    image: new File(
      [await fs.promises.readFile('assets/nft.jpg')],
      'nft.jpg',
      { type: 'image/jpg' }
    ),
  });
  console.log("Metadata stored on Filecoin and IPFS with URL:", metadata.url);
}

storeAsset()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
