import hakkimizdaİlkResim from "../../assets/images/hakkimizda_image/1.jpeg"
import hakkimizdaİkinciResim from "../../assets/images/hakkimizda_image/2.jpg"
import hakkimizdaUcuncuResim from "../../assets/images/hakkimizda_image/3.jpg"


export default function AboutPage() {
  
  return (
    <div className="hakkimizda-container">
    {/* İlk İçerik */}
    <div className="hakkimizda-content">
      <div className="image-container">
        <img src={hakkimizdaİlkResim} alt="İşletme Resmi 1" className="img-fluid" />
      </div>
      <div className="text-container">
        <h2>Hakkımızda 1</h2>
        <p>İşletmeniz hakkında bilgi buraya gelecek.</p>
      </div>
    </div>

    {/* İkinci İçerik */}
    <div className="hakkimizda-content">
    <div className="text-container">
        <h2>Hakkımızda 2</h2>
        <p>İşletmeniz hakkında bilgi buraya gelecek.</p>
      </div>
      <div className="image-container">
        <img src={hakkimizdaİkinciResim} alt="İşletme Resmi 2" className="img-fluid" />
      </div>
      
    </div>

    {/* Üçüncü İçerik */}
    <div className="hakkimizda-content">
      <div className="image-container">
        <img src={hakkimizdaUcuncuResim} alt="İşletme Resmi 3" className="img-fluid" />
      </div>
      <div className="text-container">
        <h2>Hakkımızda 3</h2>
        <p>İşletmeniz hakkında bilgi buraya gelecek.</p>
      </div>
    </div>
  </div>
  );
}
