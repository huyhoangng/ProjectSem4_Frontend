import React from "react";
import { Link, useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams(); // Lấy id từ URL (nếu cần dùng)

  return (
    <div className="container-fluid p-5">
      <div className="row g-5">
        <div className="col-lg-8">
          {/* Blog Detail Start */}
          <div className="mb-5">
            <img
              className="img-fluid w-100 rounded mb-5"
              src={`img/blog-${id || 1}.jpg`} // Sử dụng id hoặc giá trị mặc định
              alt="Blog Detail"
            />
            <h1 className="text-uppercase mb-4">
              Diam dolor est labore duo ipsum clita sed et lorem tempor duo
            </h1>
            <p>
              Sadipscing labore amet rebum est et justo gubergren. Et eirmod
              ipsum sit diam ut magna lorem...
            </p>
            {/* ... Các đoạn văn khác */}
          </div>
          {/* Blog Detail End */}

          {/* Comment List Start */}
          <div className="mb-5">
            <h3 className="text-uppercase mb-4">3 Comments</h3>
            {[1, 2, 3].map((_, index) => (
              <div className="d-flex mb-4" key={index}>
                <img
                  src="img/user.jpg"
                  className="img-fluid rounded"
                  style={{ width: "45px", height: "45px" }}
                  alt="User"
                />
                <div className="ps-3">
                  <h6>
                    <Link to="#">John Doe</Link> <small><i>01 Jan 2045</i></small>
                  </h6>
                  <p>
                    Diam amet duo labore stet elitr invidunt ea clita ipsum
                    voluptua...
                  </p>
                  <button className="btn btn-sm btn-secondary">Reply</button>
                </div>
              </div>
            ))}
          </div>
          {/* Comment List End */}

          {/* Comment Form Start */}
          <div className="bg-dark rounded p-5">
            <h3 className="text-light text-uppercase mb-4">Leave a comment</h3>
            <form>
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control bg-white border-0"
                    placeholder="Your Name"
                    style={{ height: "55px" }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="email"
                    className="form-control bg-white border-0"
                    placeholder="Your Email"
                    style={{ height: "55px" }}
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control bg-white border-0"
                    rows="5"
                    placeholder="Comment"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Leave Your Comment
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* Comment Form End */}
        </div>

        {/* Sidebar Start */}
        <Sidebar />
        {/* Sidebar End */}
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="col-lg-4">
      {/* Search Form Start */}
      <div className="mb-5">
        <div className="input-group">
          <input
            type="text"
            className="form-control p-3"
            placeholder="Keyword"
          />
          <button className="btn btn-primary px-4">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
      {/* Search Form End */}

      {/* Category Start */}
      <div className="mb-5">
        <h3 className="text-uppercase mb-4">Categories</h3>
        <div className="d-flex flex-column justify-content-start bg-dark rounded p-4">
          {["Web Design", "Web Development", "Keyword Research", "Email Marketing"].map(
            (category, index) => (
              <Link
                key={index}
                className="fs-5 fw-bold text-light text-uppercase mb-2"
                to={`/category/${category}`}
              >
                <i className="bi bi-arrow-right text-primary me-2"></i>
                {category}
              </Link>
            )
          )}
        </div>
      </div>
      {/* Category End */}
    </div>
  );
};

export default BlogDetail;
