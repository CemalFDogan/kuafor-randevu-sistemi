
import kuaforResmiA from "../../assets/images/kuaforler_image/a.png"
import kuaforResmiB from "../../assets/images/kuaforler_image/b.png"
import kuaforResmiC from "../../assets/images/kuaforler_image/c.png"
import kuaforResmiD from "../../assets/images/kuaforler_image/d.png"
import kuaforResmiE from "../../assets/images/kuaforler_image/e.png"
import kuaforResmiF from "../../assets/images/kuaforler_image/f.png"




const kuaforlar = [
    { id: 1, resim: kuaforResmiA, ad: 'Kuaför 1' },
    { id: 2, resim: kuaforResmiB, ad: 'Kuaför 2' },
    { id: 3, resim: kuaforResmiC, ad: 'Kuaför 3' },
    { id: 4, resim: kuaforResmiD, ad: 'Kuaför 4' },
    { id: 5, resim: kuaforResmiE, ad: 'Kuaför 5' },
    { id: 6, resim: kuaforResmiF, ad: 'Kuaför 6' },
   
  ];
  
  const TeamPage = () => {
    return (
      <div className="kuafor-listesi">
        {kuaforlar.map((kuafor) => (
          <div key={kuafor.id} className="kuafor-karti">
            <img src={kuafor.resim} alt={kuafor.ad} className="img-fluid" />
            <div className="overlay">
              <p>{kuafor.ad}</p>
            </div>
          </div>
        ))}
      </div>
    );

  };
export default TeamPage;