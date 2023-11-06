import React from "react";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-dark fw-bold mb-4">Sobre nós</h1>
            <p>
              Atualmente, a loja de pneus possui uma vasta seleção de marcas e modelos, desde pneus para carros de passeio até veículos pesados. Além disso, ela oferece serviços especializados, como alinhamento de rodas, balanceamento e troca de pneus. Os clientes podem confiar na experiência e na qualidade da loja, sabendo que suas necessidades serão atendidas com profissionalismo e atenção.{" "}
            </p>
            <p>
              {" "}
              Ao chegar a 2023, a loja de pneus celebra oito anos de sucesso e crescimento contínuo. Sua reputação como um destino confiável para pneus de alta qualidade e serviços excepcionais continua a se fortalecer. Com uma visão clara, compromisso com a qualidade e dedicação à satisfação do cliente, a loja de pneus está pronta para qualquer desafio!{" "}
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/images/about1.png"
              alt="About Us"
              height="400px"
              width="400px"
              style={{ marginBottom: "100px" }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/images/about.png"
              alt="About Us"
              height="300px"
              width="450px"
              style={{ marginBottom: "100px" }}
            />
          </div>
          <div className="col-md-6">
            <h3 className="text-dark mb-4">Como surgiu?</h3>
            <p>
              {" "}
              A fundação dessa loja de pneus foi impulsionada pela paixão de um empreendedor chamado Carlos. Ele percebeu a necessidade de uma loja especializada que oferecesse uma ampla variedade de pneus de alta qualidade, atendendo às demandas de motoristas exigentes. Com determinação e visão, Carlos estabeleceu a loja com uma equipe dedicada, pronta para fornecer um serviço excepcional e uma experiência de compra única.
            </p>
            <p>
              Desde o início, a loja se comprometeu a oferecer produtos de excelência, mantendo-se atualizada com as tendências e inovações da indústria de pneus. Parcerias estratégicas com os principais fabricantes permitiram que a loja oferecesse uma ampla seleção de marcas e modelos, atendendo a todas as necessidades e preferências dos clientes.
            </p>
          </div>
        </div>
      </div>
    </div>


  );
};

export default About;
