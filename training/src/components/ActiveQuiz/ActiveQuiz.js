import React from 'react';
import classes from './ActiveQuiz.module.scss';

const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>2.</strong>&nbsp;
                How is going?
            </span>

            <small>4 of 12</small>
        </p>

        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
)

export default ActiveQuiz