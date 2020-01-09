import React from "react"
import Header from "./header"
import Footer from "./footer"

export default ({ children }) => (
  <div>
	  <Header/>
	  <main>
	  {children}
	  </main>
	  <Footer/>
  </div>
)