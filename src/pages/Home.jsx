import ProjectCard from '../components/ProjectCard';
import SkillBadge from '../components/SkillBadge';
import StatCard from '../components/StatCard';

// This is your DATA — in a real app this comes from an API
const PROJECTS = [
  {
    id: 1,
    name: "REVIVE — Outreach Pipeline",
    description: "Automated pipeline that identifies company decision-makers, enriches contact data using Ocean.io and Prospeo APIs, and sends AI-personalised emails via LLM integration.",
    language: "Python",
    stars: 45,
    completed: true,
    tags: ["Python", "REST APIs", "Ollama", "Email Automation", "LLM"],
    githubUrl: "https://github.com/Devaprasanth2706/REVIVE-outreach-pipeline",
    liveUrl: null
  },
  {
    id: 2,
    name: "FILMSPOT — Movie Discovery",
    description: "Cross-platform mobile application for movie discovery built with Flutter. Integrates TMDB REST API to fetch real-time movie data, ratings, reviews, and posters.",
    language: "Flutter",
    stars: 23,
    completed: true,
    tags: ["Flutter", "TMDB API", "REST APIs", "Mobile"],
    githubUrl: "https://github.com/Devaprasanth2706/FLIMSPOT",
    liveUrl: null
  },
  {
    id: 3,
    name: "SnapLink — URL Shortener",
    description: "Full-stack URL shortener with real-time analytics dashboard. Shows click counts, geographic data, and referrer sources with beautiful charts.",
    language: "JavaScript",
    stars: 0,
    completed: false,
    tags: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: null,
    liveUrl: null
  }
];

const SKILLS = [
  { skill: "Python",    level: "Advanced",     color: "#3572A5" },
  { skill: "Django",    level: "Advanced",     color: "#092E20" },
  { skill: "React",     level: "Learning",     color: "#61DAFB" },
  { skill: "Node.js",   level: "Learning",     color: "#339933" },
  { skill: "MongoDB",   level: "Intermediate", color: "#47A248" },
  { skill: "Flutter",   level: "Intermediate", color: "#54C5F8" },
  { skill: "Claude API",level: "Advanced",     color: "#cc785c" },
  { skill: "REST APIs", level: "Advanced",     color: "#FF6C37" },
];

const STATS = [
  { value: "9.17", label: "CGPA at SASTRA", emoji: "🎓", highlight: true },
  { value: "2",    label: "Projects Live",   emoji: "🚀", highlight: false },
  { value: "2",    label: "Certifications",  emoji: "📜", highlight: false },
  { value: "25",   label: "Days to MERN",    emoji: "⚡", highlight: false },
];

export default function Home() {
  return (
    <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 24px' }}>

      {/* === HERO SECTION === */}
      <section id="about" style={{ marginBottom: '80px', textAlign: 'center' }}>
        <div style={{
          display: 'inline-block', background: '#58a6ff15',
          border: '1px solid #58a6ff40', borderRadius: '20px',
          padding: '6px 16px', fontSize: '13px', color: '#58a6ff',
          fontWeight: 600, marginBottom: '20px'
        }}>
          🎓 SASTRA University · CS (AI & Data Science) · Year 2
        </div>

        <h1 style={{ fontSize: '56px', fontWeight: 800, marginBottom: '20px', lineHeight: 1.1 }}>
          Hi, I'm{' '}
          <span style={{ color: '#58a6ff' }}>Devaprasanth</span>
        </h1>

        <p style={{ fontSize: '20px', color: '#8b949e', maxWidth: '600px', margin: '0 auto 32px', lineHeight: 1.6 }}>
          AI & Full Stack Developer building intelligent web applications
          with Python, Django, MERN Stack, and Claude API.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://github.com/Devaprasanth2706" target="_blank" rel="noreferrer"
            style={{
              background: '#238636', color: '#fff', padding: '12px 24px',
              borderRadius: '8px', textDecoration: 'none', fontWeight: 700,
              fontSize: '15px'
            }}>
            View GitHub
          </a>
          <a href="#contact"
            style={{
              background: 'transparent', color: '#e6edf3',
              padding: '12px 24px', borderRadius: '8px',
              textDecoration: 'none', fontWeight: 600, fontSize: '15px',
              border: '1px solid #30363d'
            }}>
            Contact Me
          </a>
        </div>
      </section>

      {/* === STATS === */}
      <section style={{ display: 'flex', gap: '16px', marginBottom: '80px', flexWrap: 'wrap' }}>
        {/* Props in action — passing data down to StatCard */}
        {STATS.map(stat => (
          <StatCard
            key={stat.label}
            value={stat.value}
            label={stat.label}
            emoji={stat.emoji}
            highlight={stat.highlight}
          />
        ))}
      </section>

      {/* === PROJECTS === */}
      <section id="projects" style={{ marginBottom: '80px' }}>
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '8px' }}>Projects</h2>
          <p style={{ color: '#8b949e' }}>
            {PROJECTS.filter(p => p.completed).length} complete ·{' '}
            {PROJECTS.filter(p => !p.completed).length} in progress
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '20px'
        }}>
          {/* Render all projects — map returns array of components */}
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* === SKILLS === */}
      <section id="skills">
        <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '24px' }}>Skills</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {SKILLS.map(({ skill, level, color }) => (
            <SkillBadge key={skill} skill={skill} level={level} color={color} />
          ))}
        </div>
      </section>

    </main>
  );
}