import React from "react";

function Card(props) {
  return (
    <div className="col-lg-4 my-3">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {props.contentType.subs}
          </h5>
          <h6 className="card-price text-center">
            ${props.contentType.price}
            <span className="period">/month</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {props.contentType.user}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {props.contentType.storage}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {props.contentType.publicProjects}
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {props.contentType.access}
            </li>
            <li>
              {props.contentType.privateProjects ? (
                <span>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  Unlimited Private Projects
                </span>
              ) : (
                <span className="text-muted">
                  <span className="fa-li">
                    <i class="fas fa-times"></i>
                  </span>
                  Unlimited Private Projects
                </span>
              )}
            </li>
            <li>
              {props.contentType.support ? (
                <span>
                  <span className="fa-li">
                    
                    <i className="fas fa-check"></i>
                  </span>
                  Dedicated Phone Support
                </span>
              ) : (
                <span className="text-muted">
                  <span className="fa-li">
                    <i class="fas fa-times"></i>
                  </span>
                  Dedicated Phone Support
                </span>
              )}
            </li>
            <li>
              {props.contentType.domain ? (
                <span>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  Free Subdomain
                </span>
              ) : (
                <span className="text-muted">
                  <span className="fa-li">
                    <i class="fas fa-times"></i>
                  </span>
                  Free Subdomain
                </span>
              )}
            </li>
            <li>
              {props.contentType.report ? (
                <span>
                  <span className="fa-li">
                    <i className="fas fa-check"></i>
                  </span>
                  Monthly Status Reports
                </span>
              ) : (
                <span className="text-muted">
                  <span className="fa-li">
                    <i class="fas fa-times"></i>
                  </span>
                  Monthly Status Reports
                </span>
              )}
            </li>
          </ul>
          <div className="d-grid">
            <button class="btn btn-primary text-uppercase">button</button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Card;
