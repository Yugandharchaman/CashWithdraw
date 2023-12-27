import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updatedBalance} = props
  const {value} = denominationDetails

  const onClickDenominations = () => {
    updatedBalance(value)
  }

  return (
    <li className="denomination-item">
      <button
        type="button"
        className="denomination-button"
        onClick={onClickDenominations}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
