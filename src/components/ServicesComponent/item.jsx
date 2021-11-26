import React from 'react';

const Item = (props) => {
    return (
        <>
            <button  className='buttonWithImage'><img src={props.imagePath} alt={props.iconAlt} /></button>
            <h5 className='hover-underline-animation'>{props.title}</h5>
            <div className='descriptionDiv'>
                <p>{props.description}</p>
            </div>
            <p className='subDescription'>{props.subDescription1}</p>
            <p className='subDescription'>{props.subDescription1}</p>
            <button className='primaryButton margin-top-2rem'>{props.button}</button>
        </>
      );
}
 
export default Item;