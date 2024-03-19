import React, { useEffect, useState } from 'react'
import BounceLoader from 'react-spinners/BounceLoader';

const formatDate = (date) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
}

const Projects = () => {
    const url = "https://api.github.com/users/PAhlback/starred";
    const [githubProjects, setGithubProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then(respone => respone.json())
            .then((data) => {
                setGithubProjects(data);
                setIsLoading(false);
            })
            .catch(e => console.log(e))
    }, []);

  return (
    <section id="projects" className='projects-wrapper'>
        <h2>My Projects</h2>
        <p className='projects-introduction'>These are some of my projects currently up on Github. They are mostly projects made for school.</p>
        {isLoading ? (
            <div className='loading-projects'><BounceLoader color="#36d7b7" /></div>
        ) : 
        <>
            <section className='projects'>
                {
                    githubProjects.map((proj) => {

                        let date = proj.updated_at;
                        date = formatDate(date);

                        return(
                            <article className='project-card' key={proj.name}>
                                <img src={proj.homepage} alt="" className='project-card-image'/>
                                <h3>{proj.name}</h3>
                                <p>{proj.description}</p>
                                <a href={proj.html_url} target="_blank">View on Github</a>
                                <h6>Last updated: {date}</h6>
                            </article>
                        )
                    })
                }
            </section>
        </>}
    </section>
  )
}

export default Projects