export default function Navbar(){
    return(
        <>
        <nav style={{
            display:'flex',
            justifyContent:'space-between',
            background: '#161b22',
            borderBottom: '1px solid #30363d',
            position: 'sticky',
            
        }}>
            {/* Logo */}
            <span style={{ fontSize: '20px', fontWeight: 800, color: '#58a6ff' }}>
                Dev.
            </span>
            {
                ['About', 'Projects', 'Skills', 'Contact'].map(link => (
                    <a href={`#${link}`}
                    key={link}
                    style={{
                        textDecoration:'none',
                        color: '#8b949e',
                        fontSize:'14px',
                        
                    }}
                    onMouseEnter={e => e.target.style.color = '#e6edf3'}
                    onMouseLeave={e => e.target.style.color = '#8b949e'}
                    >
                        {link}
                    </a>
                ))
            }
        </nav>
        </>
    );
}