import './PhotoProjectCard.css';

function PhotoProjectCard({data}){
    const {img, year}=data;
    return(
        <li className='photo-project-card'>
            <img className='project-img' src={img} alt='???'/>
            <div className='info'>
                <h3 className='year-text' >{year}</h3>
            </div>
        </li>
    )
};


export default PhotoProjectCard;