'use client';

import React, { useState, useCallback, memo } from 'react';
import { surveyData } from '@/contants/survey';

const SURVEY_STYLES = {
    label: {
        fontWeight: 'normal' as const,
    }
} as const;

const BoxSurveyP11 = memo((): React.ReactElement | null => {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

    if (surveyData.show !== 1 || !surveyData.QUESTION_CONTENT) {
        return null;
    }

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
            alert(errorMessage);
        }
    }, [selectedAnswer]);

    const handleShowResult = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        // Handle show result logic here
        console.log('Show result clicked');
    }, []);

    return (
        <div role="region" aria-labelledby="survey-title">
            <h2 id="survey-title">Survey</h2>
            <p>{surveyData.QUESTION_CONTENT}</p>
            <ul className="col-xs-12" role="radiogroup" aria-labelledby="survey-title">
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
                                aria-describedby={`answer-${answer.ANSWER_ID}`}
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
            <div className="col-xs-12 col-sm-6 btn-vote">
                <a 
                    className="btn" 
                    href="#" 
                    id="btnVoteSurvey" 
                    onClick={handleVote}
                    role="button"
                    aria-label="Submit your vote"
                >
                    Vote
                </a>
            </div>
            <div className="col-xs-12 col-sm-6 btn-result">
                <a 
                    className="showDialog btn" 
                    href="#" 
                    onClick={handleShowResult}
                    role="button"
                    aria-label="View survey results"
                >
                    Result
                </a>
            </div>
        </div>
    );
});

BoxSurveyP11.displayName = 'BoxSurveyP11';

export default BoxSurveyP11;