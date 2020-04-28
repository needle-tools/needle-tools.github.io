import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

class Navi extends React.Component {
  render()
  {
    const { location, title } = this.props
    return (
      <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary">
        <div className="container">
          <Link className="text-center" to="/">
            <h1 className="navbar-brand mb-0">{title}</h1>
          </Link>
          <div className="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav flex-row">
              <li
                className={
                  location.pathname === '/' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/profile/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/profile/" className="nav-link">
                  Profile
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/release/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/release/" className="nav-link">
                  Releases
                </Link>
              </li>

            </ul>
          </div>
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
        </div>
      </nav>
    )
  }
}

export default Navi


// {data.nodes.map(n => (
  //   <section class="section">
  //     <div key={n.frontmatter.slug}>
  //       <h2>
  //         <Link to={`/${n.frontmatter.path}`}>{n.frontmatter.title}</Link>
  //       </h2>
  //     </div>
  //   </section>
  // ))}
// export const pageQuery = graphql`
// {
//   allMarkdownRemark {
//     nodes {
//       frontmatter { path title }
//     }
//   }
// }
// `
