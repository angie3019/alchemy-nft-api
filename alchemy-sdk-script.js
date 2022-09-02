// This script demonstrates access to the NFT API via the Alchemy SDK.
import {
    Network,
    initializeAlchemy,
    getNftsForOwner,
    getNftMetadata,
    BaseNft,
    NftTokenType,
    getNftsForCollection,
  } from "@alch/alchemy-sdk";
  
  // Optional Config object, but defaults to demo api-key and eth-mainnet.
  const settings = {
    apiKey: "H05z-vVAtpuGfD_6JyPTFTv2eGDcM069", // Replace with your Alchemy API Key.
    network: Network.MATIC_MAINNET, // Replace with your network.
    maxRetries: 10,
  };
  
  const alchemy = initializeAlchemy(settings);
 
  // Print owner's wallet address:
  const ownerAddr = "0xD829Dfc422EeC32D017a7F558aBD9E3BC9951c40";
  console.log("fetching NFT for address:", ownerAddr);
  console.log("...");
  
  // Print total NFT count returned in the response:
  const nftsForOwner = await getNftsForOwner(alchemy, ownerAddr);

  console.log("number of NFTs found:", nftsForOwner.totalCount);
  console.log("...");
  
  // Print contract address and tokenId for each NFT:
  for (const nft of nftsForOwner.ownedNfts) {
    console.log("===");
    console.log("contract address:", nft.contract.address);
    console.log("token ID:", nft.tokenId);
  }
  console.log("===");
  /*
  // Fetch metadata for a particular NFT:
  console.log("fetching metadata for Metawork project NFT...");
  const response = await getNftMetadata(
    alchemy,
    "0xD0dbD6Abd9d3b68A5C283E417DF511B9F2Da6288",
    "0"
  );

  // Uncomment this line to see the full api response:
  // console.log(response);
  
  // Print some commonly used fields:
  console.log("NFT name: ", response.title);
  console.log("token type: ", response.tokenType);
  console.log("image url: ", response.rawMetadata.image);
  console.log("time last updated: ", response.timeLastUpdated);
  console.log("description",response.description);
  console.log("tokenId",response.tokenId);
  console.log("tokenURI",response.tokenUri);

*/

  console.log("===");

  const nftsForCollection = await getContractMetadata(alchemy, "0x43172583f6354526a97965FC41a8CBA986936Da7");
  console.log(nftsForCollection);