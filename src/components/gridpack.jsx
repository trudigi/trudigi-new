import React from "react"

export default ({ children, title }) => (
  <section className={`hero-summary py-5 d-flex flex-column text`}>
	  <div className="hero-content container p-3 text-center">
        <h1>{title}</h1>
        <div className="product-summary d-flex flex-row justify-content-center bd-highlight mb-3 p-3 row text-center">
		      {children}
        </div>
	  </div>
  </section>
)
