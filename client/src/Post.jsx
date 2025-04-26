import React from 'react'

function Post() {
  return (
    <div className="post">
    <div className="image">
      <img
        src="https://techcrunch.com/wp-content/uploads/2025/04/Inspo_Truck_web.jpg?resize=1200,800"
        alt=""
      />
    </div>

    <div className="texts">
      <h2>Slate’s ‘transformer’ EV truck breaks cover</h2>
      <p className="info">
        <a className="author">vinit kumar</a>
        <time>2025-04-25</time>
      </p>
      <p className="summary">
        I’m talking about the U.S. Department of Transportation’s new
        Automated Vehicle Framework, which includes a standing general order
        (SGO) on crash reporting for vehicles equipped with certain advanced
        driver-assistance systems and automated driving systems.
      </p>
    </div>
  </div>
  )
}

export default Post