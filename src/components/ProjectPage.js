import React from 'react';
import { useParams } from 'react-router-dom';
import { projectDetails } from './path-to-your-data-file';

function ProjectPage() {
    const { name } = useParams();
    const project = projectDetails.find(p => p.name === name);

}

export default ProjectPage;