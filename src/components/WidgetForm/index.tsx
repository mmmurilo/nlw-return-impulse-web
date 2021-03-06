import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import feedbackImageUrl from '../../assets/feedback.svg'
import { useState } from "react";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um Inseto'
        }
    },
    IDEA: {
        title: 'Sugestão',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma Lâmpada'
        }
    },
    FEEDBACK: {
        title: 'Avaliação',
        image: {
            source: feedbackImageUrl,
            alt: 'Imagem de Mãos acenando Positivo e Negativo'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackSent(false)
        setFeedbackType(null)
    }

    return (
        <div className="bg-surface-primary dark:bg-dark-surface-primary p-4 relative rounded-2xl flex flex-col
            items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            {feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep
                            feedbackType={feedbackType}
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </>
            )}

            <footer className="text-xs text-text-secondary dark:text-dark-text-secondary">
                Feito pela <a className="underline underline-offset-2" href="https://www.troquecommerce.com.br/">Troquecommerce</a>
            </footer>
        </div>
    )
}