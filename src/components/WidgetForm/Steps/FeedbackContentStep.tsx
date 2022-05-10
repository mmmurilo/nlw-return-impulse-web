import { CloseButton } from "../../CloseButton";
import { FeedbackType, feedbackTypes } from ".."
import { ArrowLeft, Camera } from "phosphor-react";
import { ScreenshotButton } from "../ScreenshotButton";
import { FormEvent, useState } from "react";
import { api } from "../../../lib/api";
import { Loading } from "../../Loading";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
    onFeedbackSent: () => void;
}

export function FeedbackContentStep({
    feedbackType,
    onFeedbackRestartRequested,
    onFeedbackSent} : FeedbackContentStepProps) {

    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState<string>('');
    const [isSendingFeedback, setIsSendingFeedback] = useState<boolean>(false)

    const feedbackTypeInfo = feedbackTypes[feedbackType]

    async function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault()
        setIsSendingFeedback(true)
        await api.post('/feedbacks', {
            type: feedbackType,
            comment,
            screenshot
        })
        setIsSendingFeedback(false)
        onFeedbackSent()
    }

    return (
        <>
            <header>
                <button
                    type="button"
                    className="top-5 left-5 absolute text-text-secondary dark:text-dark-text-secondary hover:text-text-on-tooltip dark:hover:text-dark-text-on-tooltip"
                    onClick={() => onFeedbackRestartRequested()}
                >
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>
                <span className="text-xl leading-6 flex items-center gap-2 text-text-secondary dark:text-dark-text-secondary">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton />
            </header>

            <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
                <textarea
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-text-secondary dark:placeholder-dark-text-secondary
                     text-text-primary dark:text-dark-text-primary border-stroke dark:border-dark-stroke bg-transparent rounded-md focus:border-brand
                     focus:ring-brand focus:ring-1 resize-none focus:outline-none p-1.5 scrollbar scrollbar-thumb-stroke dark:scrollbar-thumb-dark-stroke
                     scrollbar-track-transparent scrollbar-thin"
                    placeholder="Conte com detalhes o que está acontecendo..."
                    onChange={event => setComment(event.target.value)}
                />
                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton
                        screenshot={screenshot}
                        onScreenshotTook={setScreenshot}
                    />
                    <button
                        type="submit"
                        disabled={comment.length === 0 || isSendingFeedback}
                        className="p-2 bg-brand rounded-md border-transparent flex-1 flex justify-center items-center text-sm
                     hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface-primary dark:focus:ring-offset-dark-surface-primary
                     focus:ring-brand transition-colors disabled:opacity-50 disabled:hover:bg-brand"
                    >
                        {isSendingFeedback ? 
                            <Loading />
                        : 'Enviar Feedback'}
                    </button>

                </footer>
            </form>
        </>
    )
}