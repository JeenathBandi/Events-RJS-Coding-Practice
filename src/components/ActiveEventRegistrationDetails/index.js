// Write your code here
import './index.css'
import {Component} from 'react'

const registrationStatus = {
  initial: 'INITIAl',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  renderInitialView = () => (
    <div>
      <p className="initial-heading">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  renderRegisteredView = () => (
    <div className="registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="registered-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  renderYetToRegisterView = () => (
    <div className="yet-to-register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-img"
      />
      <p className="description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="btn">
        Register Here
      </button>
    </div>
  )

  renderRegistrationClosedView = () => (
    <div className="closed-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="closed-img"
      />
      <h1 className="para">Registrations Are Closed Now!</h1>
      <p className="description">
        Stay tuned. We will reopen the registration soon!
      </p>
    </div>
  )

  render() {
    const {triggeredImageItem} = this.props
    console.log(triggeredImageItem)
    switch (triggeredImageItem) {
      case registrationStatus.registered:
        return this.renderRegisteredView()
      case registrationStatus.yetToRegister:
        return this.renderYetToRegisterView()
      case registrationStatus.registrationClosed:
        return this.renderRegistrationClosedView()
      default:
        return this.renderInitialView()
    }
  }
}

export default ActiveEventRegistrationDetails
