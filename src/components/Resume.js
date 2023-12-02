import React from 'react';

const Resume = () => {
    const resumeLink = 'https://docs.google.com/document/d/1lvHKs57saE5xA2iAH_CxwDGqyrew4vh-YrVQ-OEmg4U/export?format=pdf';

    return (
        <div>
            <a href={resumeLink} download="My_Resume.pdf" style={{ textDecoration: 'none', color: 'white' }}>
                Download My Resume
            </a>
        </div>
    );
};

export default Resume;