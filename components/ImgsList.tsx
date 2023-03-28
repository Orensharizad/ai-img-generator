'use client'
import Image from 'next/image'
import useSWR from 'swr'
import fetchImgs from '@/lib/fetchImgs'

type Props = {}

type Img = {
    name: string
    url: string
}

function ImgsList({ }: Props) {

    const { data: imgs, isLoading, isValidating, mutate: refreshImgs } = useSWR('imgs', fetchImgs, { revalidateOnFocus: false })
    return (
        // <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-0 md:px-10">
        //     {imgs?.imageUrls?.map((img: Img, idx: number) =>
        //         <div className={`relative cursor-help hover:scale-[103%] transition-transform duration-200 ease-in-out ${idx === 0 && 'md:col-span-2 row-span-2'}`} key={img.name}>

        //             <div className='absolute flex justify-center items-center w-full h-full bg-white opacity-0 hover:opacity-80 transition-opacity duration-200 z-10 '>
        //                 <p className='text-center font-light text-lg p-5'>{img.name.split("_").shift()?.toString().split('.').shift()}</p>
        //             </div>

        //             <Image src={img.url} alt={img.name}
        //                 height={800}
        //                 width={800}
        //                 className="w-full rounded-sm shadow-2xl drop-shadow-lg -z-10"
        //             />
        //         </div>

        //     )}
        // </div>
        <div>
            <button
                className="fixed bottom-10 right-10 bg-violet-400/90 text-white px-5 py-3 rounded-md 
      hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400 font-bold z-20"
                onClick={() => refreshImgs(imgs)}
            >
                {!isLoading && isValidating ? "Refreshing..." : "Refresh Images"}
            </button>

            {isLoading && (
                <p className="animate-pulse text-center pb-7 font-extralight">
                    Loading <span className="text-violet-400">AI</span> Generated
                    Images...
                </p>
            )}

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-0 md:px-10">
                {imgs?.imageUrls?.map((image: Img, i: number) => (
                    <div
                        className={`relative cursor-help ${i === 0 && "md:col-span-2 md:row-span-2"
                            } hover:scale-[103%] transition-transform duration-200 ease-in-out 
            
            `}
                        key={image.name}
                    >
                        {/* create a white div that when hovered it appears */}
                        <div className="absolute flex justify-center items-center w-full h-full bg-white opacity-0 hover:opacity-80 transition-opacity duration-200 z-10">
                            <p className="text-center font-light text-lg p-5">
                                {/* This removes the Timestamp and File extension */}
                                {image.name.split("_").shift()?.toString().split(".").shift()}
                            </p>
                        </div>
                        <Image
                            src={image.url}
                            alt=""
                            height={800}
                            width={800}
                            className="w-full rounded-sm shadow-2xl drop-shadow-lg -z-10"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImgsList