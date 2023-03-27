
'use client'

import { useState } from "react"

type Props = {}

function PromptInput({ }: Props) {

    const [input, setInput] = useState('')



    return (
        <div className="m-10">
            <form className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 border rounded-md lg:divide-x">
                <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter a Prompt" className="flex-1 p-4 outline-none rounded-md" />
                <button disabled={!input} className={`p-4 ${input ? 'bg-violet-500 text-white transition-colors duration-200' : 'text-gray-300 cursor-not-allowed'}`}>Generate</button>
                <button className="p-4 bg-violet-400 text-white transition-colors duration-200 font-bold disabled:bg-gray-400 disabled:cursor-not-allowed ">Use Suggestion</button>
                <button className="p-4 bg-white text-violet-500 border-none transition-colors duration-200 rounded-b-md md:rounded-r-md md:rounded-bl-none font-bold">Now Suggestion</button>
            </form>
        </div>
    )
}

export default PromptInput