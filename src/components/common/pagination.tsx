import React from 'react';

const Pagination: React.FC = () => {
    return (
        <ul id="jb_pagination">
            <li className="previous"><a href="#">&nbsp;</a></li>
            <li><a href="#">9</a></li>
            <li className="active">10</li>
            <li><a href="#">11</a></li>
            <li className="next"><a href="#">&nbsp;</a></li>
        </ul>
    );
}

export default Pagination; 