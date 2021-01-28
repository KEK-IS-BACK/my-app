import React from 'react'
import styles from './Settings.module.css'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const Settings = () => {
    return (
        <div>
            Settings
        </div>
    );
}

export default withAuthRedirect(Settings);