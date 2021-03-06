import { CloseButton } from "../../CloseButton";

import { feedbackTypes, FeedbackType } from ".."

interface FeedbackTypeStepProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
    return (
        <>
            <header>
                <span className="text-text-primary dark:text-dark-text-primary text-xl leading-6">Fale com a gente!</span>
                <CloseButton />
            </header>

            <div className="flex py-8 gap-2 w-full">
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            className="bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg py-5 w-24 flex-1 flex flex-col items-center
                    gap-2 border-2 border-transparent hover:border-brand focus:border-brand-hover
                    focus:outline-none"
                            onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
                            type="button"
                        >
                            <img
                                className="fill-white"
                                src={value.image.source}
                                alt={value.image.alt}
                                style={{ height: 50, width: 50 }}
                            />
                            <span className="text-text-primary dark:text-dark-text-primary">{value.title}</span>
                        </button>
                    )
                })}
            </div>
        </>
    )
}