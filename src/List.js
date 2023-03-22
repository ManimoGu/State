import React from 'react'

import proptypes from "prop-types"

const List = (props) => {


  return (
    <div>

      <h1>{props.title}</h1>

{
      props.Humans.map(item =>(
        <div className='card'>
        <p>{item.nom}</p>
        <p>{item.prenom}</p>
        <img src={item.image} alt=""width="100px" height="100px" />
        <button onClick={()=> props.say(item.nom, item.prenom)}>Say hi</button>
        </div>
      )
      )
     }
    </div>
  )
}


List.defaultProps = {

  title : "Here s a title",

  Humans : [
    

  ]

}

List.propTypes = {

  title : proptypes.string

}

export default List