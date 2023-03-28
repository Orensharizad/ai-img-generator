
'use client'

import fetchImgs from "@/lib/fetchImgs"
import fetchSuggestionChatGPT from "@/lib/fetchSuggestionFromChatGPT"
import { FormEvent, useState } from "react"
import useSWR from 'swr'
import toast from 'react-hot-toast';


type Props = {}

function PromptInput({ }: Props) {

    const [input, setInput] = useState('')
    const { data, isLoading, mutate, isValidating } = useSWR('/api/suggestion', fetchSuggestionChatGPT, { revalidateOnFocus: false })
    const { mutate: updateImgs } = useSWR('imgs', fetchImgs, { revalidateOnFocus: false })


    const loading = isLoading || isValidating

    const submitPrompt = async (useSuggestion?: boolean) => {
        const inputPrompt = input
        setInput('')
        const prompt = useSuggestion ? data : inputPrompt
        const notificationPrompt = prompt
        const notificationPromptShort = notificationPrompt.slice(0, 20)

        const notification = toast.loading(
            `DALL·E is creating: ${notificationPromptShort}...`
        );

        const response = await fetch('/api/generateImg', {
            method: "POST",
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({ prompt })
        })

        const res = await response.json()
        if (res.error) {
            toast.error(res.error);
        } else {
            toast.success(`Your AI Art has been Generated!`, {
                id: notification,
            });
        }


        updateImgs()

    }


    const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault()

        await submitPrompt()



    }

    return (
        <div className="m-10">
            <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 border rounded-md lg:divide-x">
                <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder={`${loading && 'loading...' || data || 'Enter a Prompt'}`} className="flex-1 p-4 outline-none rounded-md" />

                <button type="submit" disabled={!input} className={`p-4 ${input ? 'bg-violet-500 text-white transition-colors duration-200' : 'text-gray-300 cursor-not-allowed'}`}>Generate</button>

                <button onClick={() => submitPrompt(true)} type="button" className="p-4 bg-violet-400 text-white transition-colors duration-200 font-bold disabled:bg-gray-400 disabled:cursor-not-allowed ">Use Suggestion</button>

                <button type="button" onClick={mutate} className="p-4 bg-white text-violet-500 border-none transition-colors duration-200 rounded-b-md md:rounded-r-md md:rounded-bl-none font-bold">New Suggestion</button>
            </form>
            {input && (
                <p className="italic pt-2 font-light">Suggestion:{" "}
                    <span className="text-violet-500">{loading ? 'loading...' : data}</span>
                </p>
            )}
        </div>
    )
}

export default PromptInput