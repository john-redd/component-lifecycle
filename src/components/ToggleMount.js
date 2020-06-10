import React from 'react'

function ToggleMount(props) {
  return (
    <div>
      <button onClick={props.toggleMount}>
        {props.isMounted ? 'Unmount' : 'Mount'}
      </button>
    </div>
  )
}

export default ToggleMount