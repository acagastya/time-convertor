import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="mt-5 w-100"
      style={{ bottom: 0, left: 0, position: 'fixed' }}
    >
      <hr />
      <div className="page-footer text-center" style={{ padding: '5px' }}>
        Copyright &copy; {year}{' '}
        <a
          href="https://en.wikinews.org/wiki/User:Acagastya"
          target="_blank"
          rel="noopener noreferrer"
        >
          acagastya
        </a>
        . This project is licensed under{' '}
        <a
          href="https://opensource.org/licenses/BSD-3-Clause"
          target="_blank"
          rel="noopener noreferrer"
        >
          BSD-3-Clause license
        </a>
        .
      </div>
    </footer>
  );
}

export default Footer;
