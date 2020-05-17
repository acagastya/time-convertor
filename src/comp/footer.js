import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-5 w-100" style={{ bottom: 0, position: 'absolute' }}>
      <hr />
      <div className="page-footer text-center">
        <h5 aria-level="5">
          Copyright &copy; {year}{' '}
          <a href="https://en.wikinews.org/wiki/User:Acagastya">acagastya</a>.
          This project is licensed under{' '}
          <a href="https://opensource.org/licenses/BSD-3-Clause">
            BSD-3-Clause license
          </a>
          .
        </h5>
      </div>
    </footer>
  );
}

export default Footer;
