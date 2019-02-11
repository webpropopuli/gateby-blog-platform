// <Footer> is included at the end of <Header>, not in <Layout>
import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a href="#a" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#b" className="icon fa-github">
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a href="#c" className="icon fa-envelope-o">
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; Synergy Media</li>
            <li>
              Built by: <a href="http://webpropopuli.com/">webpropopuli</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
