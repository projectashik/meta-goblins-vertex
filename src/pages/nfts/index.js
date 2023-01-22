import DashboardLayout from "@/layouts/DashboardLayout";
import { useAddress } from "@thirdweb-dev/react";

import {
  useContract,
  useOwnedNFTs,
  ThirdwebNftMedia,
} from "@thirdweb-dev/react";

const Nfts = () => {
  const walletAdddress = useAddress();
  console.log(walletAdddress);
  const { contract } = useContract(
    "0xD9c428eC45Fa88a2230AF65273472aAEc6c1C680"
  );
  const { data: ownedNFTs, isLoading } = useOwnedNFTs(contract, walletAdddress);

  return (
    <DashboardLayout>
      <div className="my-4">
        <p className="font-bold text-2xl text-center">Your NFTS</p>
      </div>

      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : ownedNFTs.length > 0 ? (
          <div className="flex bg-white h-full w-80% p-16 items-center justify-center flex-col">
            <div className="flex flex-col justify-center items-center w-full">
              {ownedNFTs?.map((nft) => (
                <ThirdwebNftMedia
                  metadata={nft.metadata}
                  key={nft.metadata.id}
                  width="300px"
                />
              ))}
            </div>
            <div className="flex justify-between flex-col md:flex-row mt-8">
              <div>
                <p className="max-w-lg md:mr-4">
                  We provide a organized system of food management for the
                  eradication of hunger by incentivising donor individuals and
                  volunteers. We also include local clubs who wants to do social
                  works to support this mission for distribution.
                </p>
              </div>
              <div>
                <p className="mt-4 md:mt-0 max-w-lg">
                  A sustainable finance to incentivise individuals is gathered
                  through manure distrubtion. These incentivise is done in
                  blockchain to provide transparency and give identity to
                  deserved individuals..
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p>No NFT owned found.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};
export default Nfts;
