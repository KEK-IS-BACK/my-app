import React from 'react'
import styles from './News.module.css'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const News = (props) => {
    return (
        <div>
            News
        </div>
    );
}

export default withAuthRedirect(News);