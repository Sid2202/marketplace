import Image from 'next/image'
import { ConnectButton } from '@rainbow-me/rainbowkit';
  
export default function Market() {
  return (
    <div className="text-white bg-drops bg-cover overflow-auto h-screen ">
    {/* bg-cover bg-fixed bg-center bg-back */}
    <div className="flex flex-col items-center justify-center">
        <div className="m-4 p-2 w-1/2 flex justify-between rounded-full backdrop-blur-md bg-gray-900">
            <div className="px-4 mt-6">
                <Image 
                    src="https://i.postimg.cc/NjWKX5mM/logo.png"
                    width={90}
                    height={90}
                    alt="logo"
                />
            </div>
            <div className="p-2">
                <ConnectButton label="Connect" accountStatus="avatar" chainStatus="none" />
            </div>
        </div>

        <div className="h-screen flex justify-center">
            <div className="flex flex-col items-center m-20">
                <div className="p-2 mt-10 text-6xl font-bold font-serif">
                    Web3 Recipe Marketplace
                </div>
                <div className="p-2">
                    A suite of plug and play modules that leverage the best technologies web3 offers.
                </div>
                <div className="mt-12">
                    <div className="bg-slate-900 rounded-full p-3 px-10 font-mono">
                        npm i hyper3-core
                    </div>
                    
                </div>
                <div className="flex flex-col items-center mt-10">
                    <div className="">
                        Create ZK identity proofs and integrate with easy to use web3 modules in your dapp in 
                    </div>
                    <div className="p-1 font-bold">
                        {'<'}2 lines of code
                    </div>
                </div>
            </div>
        </div>

        <div className="m-0 bg-cover bg-fixed bg-center bg-back flex flex-col justify-center items-center">
            
            <div className="flex flex-wrap flex-row overflow-auto m-10 py-20">
                <div class="zoom" className="m-2 w-1/4 flex flex-col border-gray-400 border-2 rounded-xl" >
                    <div className="flex justify-center bg-black">
                        
                        <Image 
                            src="https://i.postimg.cc/Zn339pDJ/auth.png"
                            width={200}
                            height={100}
                            alt="Auth"
                            className="rounded-xl"
                        />
                    </div>
                    <div className="p-2 backdrop-blur-md border-gray-400 border-t-2 ">
                        <div className="p-1 text-2xl font-bold">
                            Bio-Auth
                        </div>
                        <div className="p-1 text-sm font-mono">
                            A web3 recipe to quickly integrate biometric authentication in your dapp. Enable your users to login and connect their wallet address using their biometrics. 
                        </div>
                    </div>
                </div>

                <div class="zoom" className="m-2 w-1/4 flex flex-col border-gray-400 border-2 rounded-xl">
                    <div className="flex justify-center bg-black">
                        <Image 
                            src="https://i.postimg.cc/RhcRkkm1/kyc.png"
                            width={200}
                            height={100}
                            alt="kyc"
                        />
                    </div>
                    <div className="p-2 backdrop-blur-md border-gray-400 border-t-2 ">
                        <div className="p-1 text-2xl font-bold">
                            ZK-kyc
                        </div>
                        <div className="p-1 text-sm font-mono">
                            Prove your users identity by creating a zero knowledge proof of their verified identity. The fastest solution to integrate a ZK-KYC module in your dapp⚡
                        </div>
                    </div>
                </div>

                <div class="zoom" className="m-2 w-1/4 flex flex-col border-gray-400 border-2 rounded-xl">
                    <div className="flex justify-center bg-black">
                        <Image 
                            src="https://i.postimg.cc/mkG3ym9P/signx.png" 
                            width={200}
                            height={100}
                            alt="signx"
                        />
                    </div>
                    <div className="p-2 backdrop-blur-md border-gray-400 border-t-2 ">
                        <div className="p-1 text-2xl font-bold">
                            SignX
                        </div>
                        <div className="p-1 text-sm font-mono">
                            Instantly attest all your documents with your digital signature on the blockchain. Upload your documents and assign signers by wallet address and much more!
                        </div>
                    </div>
                </div>

                <div class="zoom" className="m-2 w-1/4 flex flex-col border-gray-400 border-2 rounded-xl">
                    <div className="flex justify-center bg-black">
                        <Image 
                            src="https://i.postimg.cc/63FbJVvK/escrow.png" 
                            width={200}
                            height={100}
                            alt="escrow"
                        />
                    </div>
                    <div className="p-2 backdrop-blur-md border-gray-400 border-t-2 ">
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
    </div>
  )
}
