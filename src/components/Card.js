import React from 'react';

export const Card = ({ location, data, handleToggle }) => {

  return (
    <article  id={location}
              className='district-card'
              onClick={() => { handleToggle(location) } }>
      <h3>{ location }</h3>

        {Object.keys(data).map((year, index) => {
          if(data[year] < 0.5) {
            return(
              <section key={index}>
              <p>{year}</p>
              <p className='below'>{data[year]}</p>
              </section>
            )
          } else {
            return(
              <section key={index}>
              <p>{year}</p>
              <p className='above'>{data[year]}</p>
              </section>
            )
          }
        })}

    </article>
  )


}

const { object } = React.PropTypes
Card.propTypes = {
  kinderData: object.isRequired
}




// return (
//   <section>
//     { Object.keys(data).map((key, index) => {
//       return (
//         <article  className='district-card'
//                   key={index}
//                   onClick={(e) => { handleToggle(e) } }>
//           <h3>{ kinderData[key].location }</h3>
//           <section>
//             <Year year={kinderData[key].data}/>
//             <YearlyData yearData={kinderData[key].data}/>
//           </section>
//         </article>
//       )
//     }) }
//   </section>
// )
