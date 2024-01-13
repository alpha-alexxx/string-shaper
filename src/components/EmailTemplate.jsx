
const EmailTemplate = ({ name, email, subject, comment, website = 'string shaper' }) => {
  const logoUrl = 'https://iili.io/JYd1hMv.md.png';

  return (
    <div>
      <title>{subject}</title>
      <div style={{ display: 'none', overflow: 'hidden', lineHeight: '1px', opacity: '0', maxHeight: '0', maxWidth: '0' }}>
        Message From {website}, sent by {name}
      </div>
      <body style={{ backgroundColor: 'rgb(255,255,255)', marginTop: 'auto', marginBottom: 'auto', marginLeft: 'auto', marginRight: 'auto', fontFamily: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
        <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style={{ maxWidth: '48rem', borderWidth: '2px', backgroundColor: 'rgb(245,245,245)', borderStyle: 'solid', borderColor: 'rgb(212,212,212)', borderRadius: '0.375rem', marginTop: '40px', marginBottom: '40px', marginLeft: 'auto', marginRight: 'auto', padding: '20px', boxShadow: '0 0 #0000, 0 0 #0000, 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)' }}>
          <tbody>
            <tr>
              <td>
                <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style={{ marginTop: '2rem' }}>
                  <tbody>
                    <tr>
                      <td>
                        <img alt={website} src={logoUrl} style={{ display: 'block', outline: 'none', border: 'none', textDecoration: 'none', width: '10rem', marginTop: '0px', marginBottom: '0px', marginLeft: 'auto', marginRight: 'auto' }} />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h1 style={{ color: 'rgb(0,0,0)', fontSize: '1rem', lineHeight: '1.5rem', textAlign: 'center', padding: '0px', marginTop: '30px', marginBottom: '30px', marginLeft: '0px', marginRight: '0px', fontWeight: '700' }}>{subject}</h1>
                <p style={{ fontSize: '0.875rem', lineHeight: '24px', margin: '16px 0', color: 'rgb(0,0,0)' }}>Sender Name: <strong>{name}</strong></p>
                <p style={{ fontSize: '0.875rem', lineHeight: '24px', margin: '16px 0', color: 'rgb(0,0,0)' }}>Sender Email: <strong>{email}</strong></p>
                <p style={{ fontSize: '1.125rem', lineHeight: '24px', margin: '16px 0', color: 'rgb(0,0,0)', fontWeight: '400', padding: '0.5rem' }}>{comment}</p>
                <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style={{ marginTop: '1rem' }}>
                  <tbody>
                    <tr>
                      <td>
                        <footer style={{ width: '100%', textAlign: 'center', fontFamily: 'urbanist', fontSize: '1rem', lineHeight: '1.5rem' }}>❤️ Email from <strong>{website.toUpperCase()}</strong> ❤️</footer>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </div>
  );
};

export default EmailTemplate;
