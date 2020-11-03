import React from 'react'
import './SprintProgress.css'

import Card from "../Card/Card"

const SprintProgress = () => {
    return(
        <Card>
            <div className="sprint-progress">
                <header>
                    <h4>Sprint 20</h4>
                    <div className="sprint-progress-top">
                        <p>Start : <span>10/28/2020</span></p>
                        <p>End : <span>11/14/2020</span></p>
                    </div>
                    <div className="sprint-progress-bottom">
                        <p>Remaining Hours: <span>32</span></p>
                        <p>Task: <span>9</span></p>
                    </div>
                </header>
                <div className="task-complete">
                    <p>Percentage of Task Completed</p>
                    <div className="progress">
                        <div className="bar"></div>
                    </div>
                </div>

            </div>
        </Card>

    )
}

export default SprintProgress