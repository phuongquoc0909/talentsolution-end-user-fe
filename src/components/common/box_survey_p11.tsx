'use client';

import React, { useState } from 'react';
import { surveyData } from '@/contants/survey';

const BoxSurveyP11: React.FC = (): React.ReactElement => {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

    if (surveyData.show !== 1 || !surveyData.QUESTION_CONTENT) {
        return <></>;
    }

    const handleAnswerChange = (answerId: number) => {
        setSelectedAnswer(answerId);
    };

    const handleVote = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (selectedAnswer) {
            console.log('Voted for answer ID:', selectedAnswer);
        } else {
            alert('Please select an answer');
        }
    };

    const handleShowResult = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        console.log('Show result clicked');
    };

    return (
        <>
            <h2>Survey</h2>
            <p>{surveyData.QUESTION_CONTENT}</p>
            <ul className="col-xs-12">
                {surveyData.answers.map((answer) => (
                    <li key={answer.ANSWER_ID} className="col-xs-12">
                        <label style={{ fontWeight: 'normal' }}>
                            <input 
                                type="radio" 
                                className="fl_left input_margin" 
                                name="survey_answer" 
                                value={answer.ANSWER_ID}
                                checked={selectedAnswer === answer.ANSWER_ID}
                                onChange={() => handleAnswerChange(answer.ANSWER_ID)}
                            />
                            <span className="fl_left">{answer.ANSWER_CONTENT}</span>
                        </label>
                    </li>
                ))}
            </ul>
            <div className="col-xs-12 col-sm-6 btn-vote">
                <a className="btn" href="#" id="btnVoteSurvey" onClick={handleVote}>Vote</a>
            </div>
            <div className="col-xs-12 col-sm-6 btn-result">
                <a className="showDialog btn" href="#" onClick={handleShowResult}>Result</a>
            </div>
        </>
    );
}

export default BoxSurveyP11;