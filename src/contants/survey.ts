export interface Answer {
    ANSWER_ID: number;
    ANSWER_CONTENT: string;
}

export interface SurveyItem {
    show: number; // 0: hidden, 1: show
    QUESTION_CONTENT: string;
    answers: Answer[];
}

export const surveyData: SurveyItem = {
    show: 1,
    QUESTION_CONTENT: 'Bạn mong muốn điều gì nhất khi làm việc tại công ty?',
    answers: [
        { ANSWER_ID: 1, ANSWER_CONTENT: 'Mức lương cạnh tranh và phúc lợi tốt' },
        { ANSWER_ID: 2, ANSWER_CONTENT: 'Môi trường làm việc chuyên nghiệp và thân thiện' },
        { ANSWER_ID: 3, ANSWER_CONTENT: 'Cơ hội phát triển và thăng tiến trong sự nghiệp' },   
        { ANSWER_ID: 4, ANSWER_CONTENT: 'Sự cân bằng giữa công việc và cuộc sống' }
    ]
};