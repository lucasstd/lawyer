import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer class="page-footer font-small mdb-color lighten-3 pt-4" style={{ backgroundColor: "#74B8B9", color: "white" }}>
        <div class="container text-center text-md-left">

          <div class="row">

            <div class="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">

              <h5 class="font-weight-bold text-uppercase mb-4">Sobre</h5>
              <p>
                Advogada com experiência em técnicas de prevenção de litígios, palestras e treinamentos para advogados e clientes, 
                sustentações orais no Tribunal de Ética da OAB e Tribunal Estadual, pareceres, negociações e elaboração de estratégias jurídicas em contencioso estratégico. 
              </p>
              <p>
                Possui experiência em direito imobiliário, médico, digital, startups e civil. 
                Integrante de grupo de estudos de direito imobiliário (ESA), direito processual civil (PUCRS) e membro da AGADIE e IBRADIM.
              </p>

            </div>

            <hr class="clearfix w-100 d-md-none" />

            <div class="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">

              <h5 class="font-weight-bold text-uppercase mb-4">Endereço</h5>

              <ul class="list-unstyled">
                <li>
                  <p>
                    <i class="fas fa-home mr-3"></i> Av. João Wallig, 635 - sala 202 - Passo d'Areia, Porto Alegre - RS, 91340-000</p>
                </li>
                <li>
                  <p>
                    <i class="fas fa-envelope mr-3"></i> daiana.staudt@gmail.com</p>
                </li>
                <li>
                  <p>
                    <i class="fas fa-phone mr-3"></i> +55 (51) 99898-9192 </p>
                </li>
              </ul>

            </div>

            <hr class="clearfix w-100 d-md-none" />

            <div class="col-md-2 col-lg-2 text-center mx-auto my-4">

              <h5 class="font-weight-bold text-uppercase mb-4">Redes sociais</h5>

              <a type="button" class="btn-floating btn-fb">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a type="button" class="btn-floating btn-tw">
                <i class="fab fa-twitter"></i>
              </a>
              <a type="button" class="btn-floating btn-gplus">
                <i class="fab fa-google-plus-g"></i>
              </a>
              <a type="button" class="btn-floating btn-dribbble">
                <i class="fab fa-dribbble"></i>
              </a>
            </div>

          </div>
        </div>
      </footer>
    );
  }
}
