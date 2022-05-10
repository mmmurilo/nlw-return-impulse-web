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
                    className="py-2 px-6 mt-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-md border-transparent text-sm
                    leading-6 hover:bg-surface-secondary-hover dark:hover:bg-dark-surface-secondary-hover transition-colors focus:outline-none focus:ring-2
                    focus:ring-offset-2 focus:ring-offset-surface-primary dark:focus:ring-offset-dark-surface-primary focus:ring-brand
                    disabled:opacity-50 disabled:hover:bg-brand"
                    onClick={onFeedbackRestartRequested}
                >
                    Enviar novo Feedback!
                </button>
            </div>
        </>
    )
}