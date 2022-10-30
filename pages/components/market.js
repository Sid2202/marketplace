import Image from 'next/image'
export default function Market() {
  return (
    <div className="overflow-auto bg-cover bg-fixed bg-center bg-back h-screen text-white">
        <div className="sticky backdrop-blur-md flex justify-between top-0 p-5 border-zinc-800 border-b-2">
            <div className="mt-2">
                <Image 
                    src="/../public/assets/logo.png"
                    width={150}
                    height={90}
                    alt="logo"
                />
            </div>
            <div className="text-2xl font-light font-serif">
                Recipes
            </div>
            <div className="text-xl font-light font-serif">
                0xcasdf...
            </div>
        </div>

        <div className="flex flex-col justify-center items-center">
            <div className="p-8 flex flex-col items-center">
                <div className="p-2 text-3xl font-bold font-serif">
                    Web3 Recipe Marketplace
                </div>
                <div className="p-2">
                A suite of plug and play modules that leverage the best technologies web3 has to offer.
                </div>
            </div>
            <div className="flex flex-wrap flex-row overflow-auto m-10">
                <div className="m-2 w-1/4 flex flex-col border-gray-400 border-2 rounded-xl">
                    <div className="flex justify-center bg-black">
                        <Image 
                            src="/../public/assets/auth.png"
                            width={200}
                            height={100}
                            alt="Auth"
                            className="rounded-xl"
                        />
                    </div>
                    <div className="p-2 border-gray-400 border-t-2 ">
                        <div className="p-1 text-2xl font-bold">
                            Bio-Auth
                        </div>
                        <div className="p-1 text-sm font-mono">
                            A web3 recipe to quickly integrate biometric authentication in your dapp. Enable your users to login and connect their wallet address using their biometrics. 
                        </div>
                    </div>
                </div>

                <div className="m-2 w-1/4 flex flex-col border-gray-400 border-2 rounded-xl">
                    <div className="flex justify-center bg-black">
                        <Image 
                            src="/../public/assets/kyc.png" 
                            width={200}
                            height={100}
                            alt="kyc"
                        />
                    </div>
                    <div className="p-2 border-gray-400 border-t-2 ">
                        <div className="p-1 text-2xl font-bold">
                            ZK-kyc
                        </div>
                        <div className="p-1 text-sm font-mono">
                            Prove your users identity by creating a zero knowledge proof of their verified identity. The fastest solution to integrate a ZK-KYC module in your dapp⚡
                        </div>
                    </div>
                </div>

                <div className="m-2 w-1/4 flex flex-col border-gray-400 border-2 rounded-xl">
                    <div className="flex justify-center bg-black">
                        <Image 
                            src="/../public/assets/signx.png" 
                            width={200}
                            height={100}
                            alt="signx"
                        />
                    </div>
                    <div className="p-2 border-gray-400 border-t-2 ">
                        <div className="p-1 text-2xl font-bold">
                            SignX
                        </div>
                        <div className="p-1 text-sm font-mono">
                            Instantly attest all your documents with your digital signature on the blockchain. Upload your documents and assign signers by wallet address and much more!
                        </div>
                    </div>
                </div>

                <div className="m-2 w-1/4 flex flex-col border-gray-400 border-2 rounded-xl">
                    <div className="flex justify-center bg-black">
                        <Image 
                            src="/../public/assets/escrow.png" 
                            width={200}
                            height={100}
                            alt="escrow"
                        />
                    </div>
                    <div className="p-2 border-gray-400 border-t-2 ">
                        <div className="p-1 text-2xl font-bold">
                            Escrow
                        </div>
                        <div className="p-1 text-sm font-mono">
                            Find ready to use documents to create a Proof-of-Work escrow system among other web3 users. Edit the documents to create an escrow and assign the work among your peers.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
