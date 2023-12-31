export default function ServicesPage() {
    return (
        <div className="container">
        
        <main className="p-4">
          <section className="services">
            <h2 className="mb-4 text-center">Hizmetlerimiz</h2>
            <div className="service card mb-3">
              <div>
                <div>
                  <h3 className="card-title text-center">Saç Kesimi</h3> 
                </div>
                <div>
                  <strong className="card-body d-flex justify-content-between"> <h6>Profesyonel saç kesimi hizmeti.</h6> $50</strong>
                  <strong className="card-body d-flex justify-content-between"> <h6>Profesyonel saç kesimi hizmeti.</h6> $50</strong>
                  <strong className="card-body d-flex justify-content-between"> <h6>Profesyonel saç kesimi hizmeti.</h6> $50</strong>
                </div>
              </div>
            </div>
            <div className="service card mb-3">
              <div className="card-body d-flex justify-content-between">
                <div>
                  <h3 className="card-title">Renklendirme</h3>
                  <p className="card-text">Modern renklendirme teknikleri ile saç renklendirme.</p>
                </div>
                <div>
                  <p className="card-text"><strong>Fiyat:</strong> $80</p>
                </div>
              </div>
            </div>
            {/* Diğer hizmetler */}
          </section>
        </main>
       
      </div>
    );
}