import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1 className="text-dark fw-bold mb-4" style={{ marginTop: "50px" }}>Fale Conosco</h1>
            <hr style={{ color: "orangered" }}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md 5 d-flex justify-content-center">
            <img
              src="/assets/images/about2.png"
              alt="Contact Us"
              height="350px"
              width="450px"
              style={{ marginBottom: "100px" }}
            />
          </div>
          <div className="col-md-6">
            <form>
              <div class="mb-3">
                <label for="exampleForm" class="form-label fw-bold">
                  Nome completo
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleForm"
                  placeholder="nome completo"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label fw-bold">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="nome@gmail.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label fw-bold">
                  Ligue diretamente!
                </label>
                <p> Telefone:(11) 3348-9033</p>
                <p> WhatsApp: (11) 97972-8033</p>
              </div>
              <button type="submit" class="btn btn-outline-primary">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
