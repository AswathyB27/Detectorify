import React from "react";
import "./detect.scss";
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

export default function Help() {
    return (
        <div className="HelpContainer">
            <div>
                <TipsAndUpdatesOutlinedIcon fontSize="large" />
                <span>How to use? </span>
                <br />
                Drag and drop your file into the toolbox above to begin.
            </div>
            <div>
                <WorkspacePremiumOutlinedIcon fontSize="large" />
                <span>Don't worry about security.</span>
                <br />
                Your security is our priority. All our file transfers are secured
            </div>
            <div>
                <LockOutlinedIcon fontSize="large" />
                <span>Access from anywhere</span>
                <br />
                You can access dectectorify video converter anywhere, with an internet connection.
            </div>
            <div>
                <CloudUploadOutlinedIcon fontSize="large" />
                <span>Perform on all devices</span>
                <br />
                You do not need to register or install a software.
            </div>
        </div>
    );
}