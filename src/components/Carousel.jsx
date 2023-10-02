import { img01 } from "../utils/imgs"

function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner position-relative">
    <div className="carousel-item active">
      <img src={img01} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img01} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img01} className="d-block w-100" alt="..."/>
    </div>
    <div className="carouDetails position-absolute end-0 w-50 text-light">
        <h1>Online-Psychotherapie per Video – zeitnah, einfühlsam & kompetent</h1>
            <p>Wissenschaftlich fundierte, moderne Behandlungsmethoden</p>
            <button className="appointment">Terminvereinbarung</button>
        </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carousel