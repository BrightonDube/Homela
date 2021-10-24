import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroller from "../components/scroller"
import PortfolioModal from "../components/portfolio/modal"
import PortfolioCarousel from "../components/portfolio/carousel"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
    this.state = {
      modalShow: false,
      modalCurrent: 0,
    }
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this)
    this.setModal = this.setModal.bind(this)
  }

  handlePortfolioClick(index, e) {
    e.preventDefault()
    this.setModal(true, index)
  }

  setModal(isShown, current) {
    this.setState({
      modalShow: isShown,
      modalCurrent: current,
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <section className="page-section bg-primary" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">Who are we?</h2>
                <hr className="divider light my-4" />
                <p className="text-white-50 mb-4">
                  Homela Tree Felling professionals have been managing
                  residential and commercial trees and gardens for many years.
                  We are highly qualified, fully insured, skillful,
                  knowledgeable, and have many years of experience in the tree
                  felling industry.
                  <br />
                  Our professionals can advise and assist on which trees to
                  remove. Homela Tree felling workforce knows what machinery to
                  use, where to cut and how to attend to tree roots in the
                  locality of pipes and electrical systems. Homela Tree Felling
                  strives to provide professional tree felling services with
                  friendly & experienced staff, reasonable prices and
                  high-quality work.
                </p>
                <a
                  className="btn btn-light btn-xl js-scroll-trigger"
                  href="#contact"
                  onClick={Scroller.handleAnchorScroll}
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="services">
          <div className="container">
            <h2 className="text-center mt-0">At Your Service</h2>
            <hr className="divider my-4" />
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-tree text-success mb-4"></i>
                  <h3 className="h4 mb-2">Tree felling</h3>
                  <p className="text-muted mb-0">
                    We handle all tree felling and removals, including root and
                    branch removal or removal of and entire tree.
                    <br />
                    We also undertake tree trimming, which will help to maintain
                    the tree shape and appearance while trimming broken or dead
                    branches will reduce any potential risks they may impose.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-broom text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Other Services</h3>
                  <p className="text-muted mb-0"></p>

                  <ul className="list-unstyled">
                    <li className="text-muted mb-0">Tree Trimming</li>
                    <li className="text-muted mb-0">Tree Surgery</li>
                    <li className="text-muted mb-0">Tree Shaping</li>
                    <li className="text-muted mb-0">Tree Removal</li>
                    <li className="text-muted mb-0">Land & Clearing</li>
                    <li className="text-muted mb-0">Stump Grinding</li>
                    <li className="text-muted mb-0">Weed Control</li>
                    <li className="text-muted mb-0">
                      Tree Clearing from Power Lines
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-heart text-primary mb-4"></i>
                  <h3 className="h4 mb-2">Love our work</h3>
                  <p className="text-muted mb-0">
                    We are passionate about what we do and the results speak for
                    themselves. We have hundreds of satisfied customers.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="mt-5">
                  <i className="fas fa-4x fa-leaf text-success mb-4"></i>
                  <h3 className="h4 mb-2">Gardening</h3>
                  <p className="text-muted mb-0">
                    We know gardens!All our staff are trained and permanently
                    employed. We do not make use of unskilled and untrustworthy
                    labour. Each team is managed by a dedicated, qualified and
                    professional supervisor. Team supervisors play and active
                    role in your garden’s care and relationship building with
                    our clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/1.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 0)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[0].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-name">View</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/2.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 1)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[1].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-name">View</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/3.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 2)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[2].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-name">View</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="images/portfolio/fullsize/4.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 3)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[3].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-name">View</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/5.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 4)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[4].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption">
                    <div className="project-name">View</div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a
                  className="portfolio-box"
                  href="img/portfolio/fullsize/6.jpg"
                  onClick={this.handlePortfolioClick.bind(this, 5)}
                >
                  <Img
                    fluid={
                      this.props.data.images.edges[5].node.childImageSharp.fluid
                    }
                  />
                  <div className="portfolio-box-caption p-3">
                    <div className="project-name">View</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section bg-dark text-white">
          <div className="container text-center">
            <h2 className="mb-4">Get an obligation-free Quote</h2>
            <a
              className="btn btn-light btn-xl js-scroll-trigger"
              href="#contact"
              onClick={Scroller.handleAnchorScroll}
            >
              Get a Quote
            </a>
          </div>
        </section>

        <section className="page-section" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Let's Get In Touch!</h2>
                <hr className="divider my-4" />
                <p className="text-muted mb-5">
                  Ready to start your next project with us? Give us a call,{" "}
                  <a
                    href="https://wa.me/+27603883801"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>{" "}
                  or send us an email and we will get back to you as soon as
                  possible!
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                <div>
                  <a href="tel:060 388 3801">060 388 3801</a>
                </div>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
                <a
                  className="d-block"
                  href="mailto:info@homelatreefelling.co.za?cc=homelatreefelling@gmail.com"
                >
                  info@homelatreefelling.co.za
                </a>
              </div>
            </div>
          </div>
        </section>
        <PortfolioModal
          show={this.state.modalShow}
          onHide={() => this.setModal(false, 0)}
        >
          <PortfolioCarousel
            images={this.props.data.images.edges}
            current={this.state.modalCurrent}
          />
        </PortfolioModal>
      </Layout>
    )
  }
}

export const imageData = graphql`
  query {
    images: allFile(
      filter: { relativePath: { glob: "portfolio/fullsize/*.jpg" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
