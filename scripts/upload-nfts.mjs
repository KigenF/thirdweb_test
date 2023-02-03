import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { config } from "dotenv";

config();

const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "goerli");

const addNFTs = async () => {
  const drop = await sdk.getContract(
    "0x5443897f0dcE209D16D3c06D3868a0dEb2843c19",
    "nft-drop"
  );

  try {
    await drop.createBatch([
      "https://my-json-server.typicode.com/thirdweb-dev/updatable-nft-metadata/nfts/0",
      "https://my-json-server.typicode.com/thirdweb-dev/updatable-nft-metadata/nfts/1",
    ]);
    console.log("uploaded all nfts");
  } catch (error) {
    console.log(error);
  }
};

addNFTs();
