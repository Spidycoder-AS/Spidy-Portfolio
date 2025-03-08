import React, { useEffect, useState } from "react";
import "./NFTMarketplace.css"; // Link to improved CSS
import Particle from "../Particle";

const NFTMarketplace = () => {
  const [nfts, setNfts] = useState([]);
  const walletAddress =
    "0:8f76bb4147a75f5cb299f9d325cecf25b75ede45de32c2b2e0a0ac89e70667ea"; // Replace with your wallet

  const fetchNFTs = async () => {
    try {
      const response = await fetch(
        `https://tonapi.io/v2/accounts/${walletAddress}/nfts`
      );
      if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();
      console.log("Fetched NFTs:", data.nft_items);

      setNfts(data.nft_items || []);
    } catch (error) {
      console.error("Error fetching NFTs:", error);
      setNfts([]);
    }
  };

  useEffect(() => {
    fetchNFTs();
  }, []);

  return (
    <div className="nft-marketplace">
      <Particle />
      <h1>
        🌟<span className="purple">NFT</span> Marketplace
      </h1>
      {/* Buy NFT Button */}
      <a
        href="https://getgems.io/user/EQCPdrtBR6dfXLKZ-dMlzs8lt17eRd4ywrLgoKyJ5wZn6q3r"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="button-30" role="button">
          Buy NFT🌟
        </button>
      </a>
      <div className="nft-container">
        {nfts.length > 0 ? (
          nfts.map((nft) => (
            <div key={nft.address} className="nft-card">
              <img
                src={
                  nft.previews?.[2]?.url || // Highest quality preview
                  nft.previews?.[1]?.url ||
                  nft.previews?.[0]?.url ||
                  nft.metadata?.image ||
                  "/default-nft.png" // Fallback image
                }
                alt={nft.metadata?.name || "NFT Image"}
                className="nft-image"
              />
              <h3>{nft.metadata?.name || "Unknown NFT"}</h3>
              <p>{nft.metadata?.description || "No description available"}</p>
            </div>
          ))
        ) : (
          <p className="loading-text">🔄 Fetching NFTs...</p>
        )}
      </div>
    </div>
  );
};

export default NFTMarketplace;
