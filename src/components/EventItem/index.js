// Write your code here
import './index.css'

const EventItem = props => {
  const {eventsList, onDisplayStatus} = props
  const {id, imageUrl, name, location, registrationStatus} = eventsList

  const onGetClicked = () => onDisplayStatus(registrationStatus)

  return (
    <li className="events-item">
      <button type="button" className="img-btns">
        <img
          src={imageUrl}
          alt="event"
          className="event-img"
          onClick={onGetClicked}
        />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
