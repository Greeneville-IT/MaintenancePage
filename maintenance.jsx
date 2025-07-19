// pages/maintenance.jsx

export default function Maintenance() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e40af 0%, #0ea5e9 100%)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center',
      fontFamily: `'Segoe UI', 'Helvetica Neue', Arial, sans-serif`
    }}>
      <img
        src="/logo.png"
        alt="The Lead Platform"
        style={{
          height: '80px',
          marginBottom: '2rem',
          filter: 'drop-shadow(0 4px 16px rgba(30,64,175,0.45))'
        }}
      />
      <h1 style={{
        fontSize: '2.8rem',
        fontWeight: 700,
        letterSpacing: '-1.5px',
        marginBottom: '1rem',
        lineHeight: 1.2,
      }}>
        The Lead Platform<br/>
        <span style={{
          fontSize: '1.1rem',
          fontWeight: 500,
          color: '#ffd700',
          display: 'block',
          marginTop: '0.4rem'
        }}>
          Maintenance Mode 🚧
        </span>
      </h1>
      <p style={{
        fontSize: '1.2rem',
        maxWidth: '520px',
        margin: '0 auto 1.5rem',
        color: '#e0e7ef',
      }}>
        Big things are happening!<br/>
        We're upgrading your lead experience with exclusive features, faster automations, and a new dashboard that puts you in total control.
      </p>
      <div style={{
        background: 'rgba(255,255,255,0.10)',
        borderRadius: 16,
        padding: '1.2rem 1.5rem',
        maxWidth: 400,
        margin: '0 auto 2rem',
        color: '#fff',
        fontWeight: 500,
        boxShadow: '0 4px 18px rgba(0,0,0,0.08)'
      }}>
        <span style={{ color: '#ffd700' }}>What’s Coming:</span>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: '1rem 0 0 0',
          textAlign: 'left',
          fontSize: '1.08rem'
        }}>
          <li>🚀 All-new CRM & dashboard</li>
          <li>🤖 Built-in AI lead assist</li>
          <li>📱 Mobile-first experience</li>
          <li>🔒 Advanced security & privacy</li>
          <li>💬 Automated SMS/email follow-ups</li>
        </ul>
      </div>
      <p style={{
        fontSize: '1.15rem',
        margin: '0 0 2rem 0'
      }}>
        We’ll be live again soon. <span style={{ color: '#ffd700', fontWeight: 600 }}>Stay tuned for the launch — you don’t want to miss this.</span>
      </p>
      <p style={{
        fontSize: '1rem',
        color: '#fff',
        opacity: 0.8
      }}>
        Need urgent help? Email us at <a href="mailto:support@theleadplatform.com" style={{
          color: '#ffd700',
          textDecoration: 'underline'
        }}>support@theleadplatform.com</a>
      </p>
      <footer style={{
        marginTop: '3rem',
        fontSize: '0.9rem',
        color: '#b3c3ec'
      }}>
        &copy; {new Date().getFullYear()} The Lead Platform. All rights reserved.
      </footer>
    </div>
  )
}
