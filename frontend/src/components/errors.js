import { connect } from "react-redux"
import React from "react"

const Errors = (props) => {
  let errs = props.errors.map(
    (err, i) => <li className="message" key={i}>{err}</li>
  )
  
  let slide = ""
  if (props.errors.length > 0) slide = "slide-in"
  if (props.errors.length > 2) errs = "Looks like you missed some things"
  return (
    <div className={`err-flash-messages ${slide}`}>
      <div className="error-content">
        <ul className="message-list">
          {errs}
        </ul>
      </div>
    </div>
  )
}

const mSTP = state => ({
  errors: Object.values(state.errors.session)
})

export default connect(mSTP, {})(Errors)