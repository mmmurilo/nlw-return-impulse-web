import { CloseButton } from "../../CloseButton";

interface FeedbackSuccessStep {
    onFeedbackRestartRequested: () => void
}

export function FeedbackSuccessStep({ onFeedbackRestartRequested }: FeedbackSuccessStep) {
    return (
        <>
            <header>
                <CloseButton />
            </header>

            <div className="flex flex-col items-center py-10 w-[340px">
                <svg>

                </svg>
                <span className="text-xl mt-2">Agradecemos o seu Feedback!</span>
                <button
                    type="button"
                    className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm
                    leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2
                    focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500
                    disabled:opacity-50 disabled:hover:bg-brand-500"
                    onClick={onFeedbackRestartRequested}
                >
                    Enviar novo Feedback!
                </button>
            </div>
        </>
    )
}