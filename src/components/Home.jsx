import React from "react";
import Product from './Product'

const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div class="carousel-inner" style={{ marginBottom: "200px" }}>
          <div class="carousel-item active">
            <img
              src="https://media.discordapp.net/attachments/1004356980669952011/1171100536980910080/troca_de_pneus_e.png?ex=655b735e&is=6548fe5e&hm=cf38669445e12a02f3e6c96bbcdbf55333f1b1e051931930bf2c7c16f19f5804&=&width=960&height=554"
              class="d-block w-100"
              alt=""
              height="600px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://media.discordapp.net/attachments/1004356980669952011/1171100945434816674/troca_de_pneus_e_1.png?ex=655b73bf&is=6548febf&hm=79d92dfeb74721169b082456bd98954e3290e93e38fa8df9efbf3760dbd585b8&=&width=960&height=554"
              class="d-block w-100"
              alt="IPhone"
              height="600px"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Próximo</span>
        </button>
      </div>

      <Product/>

      <div>
        <div className="container py-5">
          <div className="row">
            
            <div className="col-12 text-center" >
                <a href="/products" className="text-dark fw-bold mb-4 text-center arrumar" style={{ marginTop: "20px" }}>
                    Veja mais...
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
