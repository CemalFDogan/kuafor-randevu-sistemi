
import salonA from "../../assets/images/salon_image/1.jpeg"
import salonB from "../../assets/images/salon_image/2.jpeg"
import salonC from "../../assets/images/salon_image/3.jpeg"
import salonD from "../../assets/images/salon_image/4.jpeg"
import salonE from "../../assets/images/salon_image/5.jpeg"
import salonF from "../../assets/images/salon_image/6.jpeg"


export default function SalonPage() {
    return (
        <div className="container my-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <img src={salonA} alt="Gallery 1" className="img-fluid gallery-image" />
          </div>
          <div className="col-md-4 mb-4">
            <img src={salonB} alt="Gallery 2" className="img-fluid gallery-image" />
          </div>
          <div className="col-md-4 mb-4">
            <img src={salonC} alt="Gallery 3" className="img-fluid gallery-image" />
          </div>
          <div className="col-md-4 mb-4">
            <img src={salonD} alt="Gallery 4" className="img-fluid gallery-image" />
          </div>
          <div className="col-md-4 mb-4">
            <img src={salonE} alt="Gallery 5" className="img-fluid gallery-image" />
          </div>
          <div className="col-md-4 mb-4">
            <img src={salonF} alt="Gallery 6" className="img-fluid gallery-image" />
          </div>
        </div>
      </div>
    );
}