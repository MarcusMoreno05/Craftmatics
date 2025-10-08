import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import TextBlock from './components/TextBlock';

export default function App() {
  const [project, setProject] = useState(null);

  // frontend/src/App.jsx — replace the useEffect with:
useEffect(() => {
  const url = 'http://127.0.0.1:4000/api/project/project1';
  console.log('Fetching project from', url);
  fetch(url)
    .then(res => {
      console.log('Response status', res.status, res.statusText);
      return res.json();
    })
    .then(data => {
      console.log('Fetched project', data);
      setProject(data);
    })
    .catch(err => {
      console.error('Fetch error', err);
    });
}, []);

    if (!project) return <div>Loading project...</div>;

  return (
    <div style={{ fontFamily: project.theme?.font || undefined }}>
      <div className="app-container">
        <h1 style={{ textAlign: 'center', marginTop: '1.5rem' }}>{project.title}</h1>
        {project.layout.map(block => {
          switch (block.type) {
            case 'hero':
              return <Hero key={block.id} {...block.props} />;
            case 'text':
              return <TextBlock key={block.id} {...block.props} />;
            default:
              return (
                <div key={block.id} className="section">
                  <h2>{block.type}</h2>
                  <pre>{JSON.stringify(block.props, null, 2)}</pre>
                </div>
              );
          }
        })}
      </div>
    </div>
  );
}