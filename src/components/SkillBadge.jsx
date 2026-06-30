// Props are passed in like HTML attributes:
// <SkillBadge skill="React" color="blue" />
// React collects all of them into one props object

// Destructure directly in the parameter — cleanest approach
export default function SkillBadge({ skill, level = "Intermediate", color = "#58a6ff" }) {
  const bgColor = `${color}20`;   // hex with 20% opacity
  const borderColor = `${color}50`; // hex with 50% opacity

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      background: bgColor,
      border: `1px solid ${borderColor}`,
      color: color,
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '13px',
      fontWeight: 600
    }}>
      {skill}
      <span style={{ fontSize: '10px', opacity: 0.8 }}>· {level}</span>
    </span>
  );
}