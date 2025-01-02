import React from 'react';

const BlogMain = () => {
  return (
    <div className="container-fluid p-5">
      <div className="row g-5">
        {/* Blog list Start */}
        <div className="col-lg-8">
          <div className="row g-5">
            {[1, 2, 3, 1, 2, 3, 1, 2].map((item, index) => (
              <div className="col-md-6" key={index}>
                <div className="blog-item">
                  <div className="position-relative overflow-hidden rounded-top">
                    <img className="img-fluid" src={`img/blog-${item}.jpg`} alt="" />
                  </div>
                  <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
                    <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
                      <span>01</span>
                      <h6 className="text-light text-uppercase mb-0">January</h6>
                      <span>2045</span>
                    </div>
                    <a className="h5 text-uppercase text-light" href="/detail">Sed amet tempor amet sit kasd sea lorem</a>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-12">
              <nav aria-label="Page navigation">
                <ul className="pagination pagination-lg justify-content-center m-0">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true"><i className="bi bi-arrow-left"></i></span>
                    </a>
                  </li>
                  {[1, 2, 3].map((page) => (
                    <li className={`page-item ${page === 1 ? 'active' : ''}`} key={page}>
                      <a className="page-link" href="/detail">{page}</a>
                    </li>
                  ))}
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true"><i className="bi bi-arrow-right"></i></span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/* Blog list End */}

        {/* Sidebar Start */}
        <div className="col-lg-4">
          {/* Search Form Start */}
          <div className="mb-5">
            <div className="input-group">
              <input type="text" className="form-control p-3" placeholder="Keyword" />
              <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
            </div>
          </div>
          {/* Search Form End */}

          {/* Category Start */}
          <div className="mb-5">
            <h3 className="text-uppercase mb-4">Categories</h3>
            <div className="d-flex flex-column justify-content-start bg-dark rounded p-4">
              {["Web Design", "Web Development", "Keyword Research", "Email Marketing"].map((category, index) => (
                <a
                  className="fs-5 fw-bold text-light text-uppercase mb-2"
                  href="#"
                  key={index}
                >
                  <i className="bi bi-arrow-right text-primary me-2"></i>
                  {category}
                </a>
              ))}
            </div>
          </div>
          {/* Category End */}

          {/* Recent Post Start */}
          <div className="mb-5">
            <h3 className="text-uppercase mb-4">Recent Post</h3>
            <div className="bg-dark rounded p-4">
              {[1, 2, 3, 1, 2].map((item, index) => (
                <div className="d-flex overflow-hidden mb-3" key={index}>
                  <img
                    className="img-fluid flex-shrink-0 rounded-start"
                    src={`img/blog-${item}.jpg`}
                    style={{ width: '75px' }}
                    alt=""
                  />
                  <a
                    href="/detail"
                    className="d-flex align-items-center bg-light rounded-end h5 text-uppercase p-3 mb-0"
                  >
                    Sed amet tempor amet sit kasd sea lorem
                  </a>
                </div>
              ))}
            </div>
          </div>
          {/* Recent Post End */}

          {/* Tags Start */}
          <div className="mb-5">
            <h3 className="text-uppercase mb-4">Tag Cloud</h3>
            <div className="d-flex flex-wrap m-n1">
              {["Design", "Development", "Marketing", "SEO", "Writing", "Consulting"].map((tag, index) => (
                <a href="" className="btn btn-dark m-1" key={index}>{tag}</a>
              ))}
            </div>
          </div>
          {/* Tags End */}

          {/* Plain Text Start */}
          <div>
            <h3 className="text-uppercase mb-4">Plain Text</h3>
            <div className="bg-dark rounded text-center text-light" style={{ padding: '30px' }}>
              <p>
                Vero sea et accusam justo dolor accusam lorem consetetur, dolores sit
                amet sit dolor clita kasd justo, diam accusam no sea ut tempor magna
                takimata, amet sit et diam dolor ipsum amet diam
              </p>
              <a href="" className="btn btn-primary py-2 px-4">Read More</a>
            </div>
          </div>
          {/* Plain Text End */}
        </div>
        {/* Sidebar End */}
      </div>
    </div>
  );
};

export default BlogMain;
