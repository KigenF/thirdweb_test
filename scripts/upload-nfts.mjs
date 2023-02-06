import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { config } from "dotenv";

config();

const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "goerli");

const addNFTs = async () => {
  const drop = await sdk.getContract(
    "0xFbfd246071D9488f31e22295b8e55bA24C4Cad6b",
    "nft-drop"
  );

  try {
    await drop.createBatch([
      "https://my-json-server.typicode.com/KigenF/thirdweb_test/nfts/0"
    ]);
    console.log("uploaded all nfts");
  } catch (error) {
    console.log(error);
  }
};

addNFTs();
