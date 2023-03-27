import Image from "next/image"
import Link from "next/link"


function Header() {
    return (
        <header className="p-5 flex justify-between sticky yop-0 bg-white z-50 shadow-md">
            <div className="flex space-x-2 items-center">
                <Image src='https://links.papareact.com/4t3' alt="logo" height={30} width={30} />
                <div>
                    <h1><span className="text-violet-500">AI</span> Image Generator </h1>
                    <h2 className="text-xs">
                        Powered by DALL.E,Chat GPT & Microsoft Azure
                    </h2>
                </div>
            </div>
            <div>

            </div>

        </header>
    )
}

export default Header