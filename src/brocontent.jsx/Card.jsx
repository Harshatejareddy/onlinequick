import babuPic from './assets/pic1.jpg';

function Card(){
    return(
        <div className="card">
            <img src={babuPic} alt="babu" className="cardimg"/>
            <h1>mahesh babu </h1>
            <p>Global trotting movies and intense drama and spectacluar visuals</p>
        </div>
    );
}
export default Card
