import './ArtProjectCard.css';

function ArtProjectCard({data}){
    const {name,img,description, year}=data;
    return(
        <li className='art-project-card'>
                <h1>{name}</h1>
            <img className='project-img' src={img} alt='???'/>
            <div className='info'>
                <h3>{description}</h3>
                <h3 className='year-text' >{year}</h3>
            </div>
        </li>
    )
};


export default ArtProjectCard;