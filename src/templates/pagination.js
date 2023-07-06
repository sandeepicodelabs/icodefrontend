import React from 'react'
 

export default function Pagination(props) {
    const { pageContext, data } = props;
  return (
    <>
     {/* <Layout theme="st_header_area sticky-bg-chambray"> */}
      {/* <SEO title="technology trends for web & mobile app development" /> */}
      <section className="st_inner_banner_area bg-chambray text-center" >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="">
                <div className="">
                  <h1 className="st-font-34 st-font-lg-30 st-font-sm-24 text-st-white"><strong>Blog </strong></h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <ArticlesComponent articles={data.articles.edges} pageContext={pageContext} /> */}

    {/* </Layout> */}
    </>
  )
}
