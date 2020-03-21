import React from 'react';

const Disclaimer = (props) => {

  const lastUpdateIndo = (date) => {
    const d = new Date(date);
    const monthIndo = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    return `${d.getDate()} ${monthIndo[d.getMonth()]} ${d.getFullYear()} o'clock ${d.getHours()}.${d.getMinutes()}`;
  }

  return (
    <div className="footer">
      Data per-{lastUpdateIndo(props.lastUpdate)} <br></br>
      Check data resources from <a href="https://github.com/mathdroid/covid-19-api">here</a>
    </div>
  )
}

export default Disclaimer;
