'use client';

import React, { useState, useCallback } from 'react';
import { surveyData } from '@/contants/survey';
import ResultSurvey from '@/components/UI/dialog/ResultSurvey';

const SURVEY_STYLES = {
    label: {
        fontWeight: 'normal' as const,
    }
} as const;

interface SurveyState {
    isOpenResultSurvey: boolean;
}

const BoxSurveyP21 = () => {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [state, setState] = useState<SurveyState>({
        isOpenResultSurvey: false
    });

    const handleAnswerChange = useCallback((answerId: number) => {
        setSelectedAnswer(answerId);
    }, []);

    const handleVote = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (selectedAnswer) {
            console.log('Voted for answer ID:', selectedAnswer);
            // Handle vote logic here
        } else {
            const errorMessage = 'Please select an answer before voting';
            console.warn(errorMessage);
            // Could use a toast notification instead of alert
            alert(errorMessage);
        }
    }, [selectedAnswer]);

    const handleCloseResultSurvey = useCallback(() => {
        setState(prev => ({ ...prev, isOpenResultSurvey: false }));
    }, []);

    const handleShowResult = useCallback(() => {
        setState(prev => ({ ...prev, isOpenResultSurvey: true }));
    }, []);

    // Check render conditions: show === 1
    if (surveyData.show !== 1) {
        return null;
    }

    return (
        <>
            <div className="widget insight grid_1 widget-col-2">
                <div className="insight-image survey-box">
                    <h2>Survey</h2>
                    <p>{surveyData.QUESTION_CONTENT}</p>
                    <ul role="radiogroup" aria-labelledby="survey-title">
                    {surveyData.answers.map((answer) => (
                        <li key={answer.ANSWER_ID} className="col-xs-12">
                            <label style={SURVEY_STYLES.label}>
                                <input 
                                    type="radio" 
                                    className="fl_left input_margin" 
                                    name="survey_answer" 
                                    value={answer.ANSWER_ID}
                                    checked={selectedAnswer === answer.ANSWER_ID}
                                    onChange={() => handleAnswerChange(answer.ANSWER_ID)}
                                />
                                <span 
                                    id={`answer-${answer.ANSWER_ID}`}
                                    className="fl_left"
                                >
                                    {answer.ANSWER_CONTENT}
                                </span>
                            </label>
                        </li>
                    ))}
                    </ul>
                    <div className="full-width center">
                        <a
                            className="tm-bright-blue-round-button view-jobs"
                            id="btnVoteSurvey"
                            tabIndex={0}
                            role="button"
                            aria-label="Submit your vote"
                            onClick={handleVote}
                        >
                            Vote
                        </a>
                        <a
                            className="showDialogD result-jobs"
                            tabIndex={0}
                            role="button"
                            aria-label="View survey results"
                            onClick={handleShowResult}
                        >
                            Result
                        </a>
                    </div>
                </div>
            </div>
            <ResultSurvey
                isOpen={state.isOpenResultSurvey}
                onClose={handleCloseResultSurvey}
            />
        </>
    );
}

export default BoxSurveyP21;