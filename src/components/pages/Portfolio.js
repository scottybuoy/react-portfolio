import React from 'react';
import '../../styles/portfolio.css'

const styles = {
  img: {
    width: '100%',
  },
  customCard: {
    width: '100%',
    height: ''
  },
  test: {
    background: '',
    maxWidth: '100%'
  },
  icon: {
    width: '35px',
    opacity: '.4'
  },
  links: {
    textDecoration: 'none',
  }
}

export default function Portfolio({ projects }) {
  return (
   
    <div className='d-flex justify-content-center custom-port-container'>
      {projects.map(project => (
        <div key={project.id} className='card custom-card'>
          <a href={project.deployed}>
            <img className='card-img' style={styles.img} src={project.img} alt='alt test'/>
          </a>
          <div className='card-body'>
            <a href={project.deployed} style={styles.links}>
              <h4 className='custom-title'>{project.title}</h4>
            </a>
            <p className='custom-desc'>{project.description}</p>
          </div>
          <div className='p-3 d-flex justify-content-between'>
              <a href={project.gitRepo}>
                <img src='images/github-icon.png' alt='Github icon' style={styles.icon}/>
              </a>
              <p className='skills'>{project.skills}</p>
          </div>
        </div>
      ))}
    </div>
  );
}