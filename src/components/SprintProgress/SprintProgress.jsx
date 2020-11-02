import React from 'react'
import './SprintProgress.css'

import Card from "../Card/Card"

const SprintProgress = () => {
    return(
        <Card>
            <div className="sprint-progress">
                <header>
                    <h4>Current Sprint 20</h4>
                    <p>Start : <span>10/28/2020</span></p>
                    <p>End : <span>11/14/2020</span></p>
                    <p>Remaining Hours: <span>32</span></p>
                </header>
                <div className="task-complete">
                    <p>Number of Task Completed</p>
                    <div className="progress">
                        <div className="bar"></div>
                    </div>
                </div>

            </div>
        </Card>

    )
}

export default SprintProgress