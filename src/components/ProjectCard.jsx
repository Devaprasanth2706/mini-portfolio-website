import './link.css';

export default function ProjectCard({ project }) {
  // project = { name, description, language, stars, githubUrl, liveUrl, tags, completed }

  const langColors = {
    Python: '#3572A5',
    JavaScript: '#f1e05a',
    Flutter: '#54C5F8',
    Dart: '#00B4AB',
  };

  const color = langColors[project.language] || '#58a6ff';

  return (
    <div style={{
        background: '#161b22',
        border: '1px solid #30363d',
        borderRadius: '12px',
        padding: '24px',
        //display: 'flex',
        //flexDirection:'column',
        //gap: '10px',
        transition: 'border-color 0.2s, transform 0.2s',
        cursor: 'pointer'
    }}
    onMouseEnter={e=> {
        e.currentTarget.style.borderColor='#58a6ff';
        e.cuurentTarget.style.transform= 'translateY(-4px)';
    }}
    onMouseLeave={e=> {
        e.currentTarget.style.borderColor='#30363d';
        e.cuurentTarget.style.transform= 'translateY(0px)';
    }}
    >

    <div>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <h4>{project.name}</h4>
            {project.completed && (
                <div style={{
                    background:'#3fb95020',
                    color:'#3fb950',
                    padding: '4px 6px',
                    lineHeight: '1',
                    borderRadius: '12px',
                    fontSize: '11px'
                }}>
                    <strong>✓ Complete</strong>
                </div>
            )}
        </div>
        <br></br>
        <p style={{
            color:'#7f8081',
        }}>{project.description}</p>
        <br></br>

        {
            project.tags && project.tags.length>0 && (
                <div style={{
                    display: 'flex',
                    gap: '8px',
                    height: '20px',
                    
                }}>
                    {
                        project.tags.map(tag => (
                            <p style={{
                                 border: '0.5px solid #30363d',
                                 background:'#30363d',
                                 padding: '4px 8px',
                                 borderRadius: '5px',
                                 color: '#7f8081',
                                 fontSize: '12px',
                                 lineHeight: '1',
                            }}>{tag}</p>
                        ))
                    }
                </div>
            )
        }
        

    </div>
    <br></br>
    <div style={{
        display: 'flex',
        justifyContent:'space-between',
    }}>
        <div style={{
            display: 'inline-flex',
            gap: '8px',
            alignItems: 'center'
        }}>
            <div style={{background:color , width:'10px', height: '10px', borderRadius: '50%'}}></div>
            <p style={{color: '#7f8081',fontSize: '14px'}}>{project.language}</p>
        </div>
        {project.githubUrl && (
            <a href={project.githubUrl} style={{
                textDecoration: 'none',
            }} target="_blank" className='address' >GitHub →</a>
        )}

        {project.liveUrl && (
            <a href={project.liveUrl} style={{
                textDecoration: 'none',
            }} target="_blank" className='address' >Live →</a>
        )}
    </div>
    </div>
  );
}