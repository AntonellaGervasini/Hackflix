import stylesNosotros from "../components/Nosotros.module.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const SobreNosotros = ({}) => {
  return (
    <div>
      <Navbar />
      <div className={`${stylesNosotros.paddingTop} container`}>
        <div className="row pt-5">
          <div className="col-lg-12">
            <h1 className={stylesNosotros.pageHeader}>Sobre Nosotros</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 sm-3">
            <img
              className="d-none d-md-table-cell img-fluid"
              src="https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd.jpg"
              alt="movies"
            />
          </div>
          <div className="col-md-6 ">
            <h2>
              <span>The movies DB</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
              voluptate nihil eum consectetur similique? Consectetur, quod,
              incidunt, harum nisi dolores delectus reprehenderit voluptatem
              perferendis dicta dolorem non blanditiis ex fugiat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
              magni, aperiam vitae illum voluptatum aut sequi impedit non velit
              ab ea pariatur sint quidem corporis eveniet. Odit, temporibus
              reprehenderit dolorum!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
              consequuntur, modi mollitia corporis ipsa voluptate corrupti eum
              ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti
              necessitatibus perspiciatis quis?
            </p>
            <p>
              <Link to="/contacto" className="btn btn-outline-secondary mb-4">
                <i className="far fa-envelope"></i> Contacto
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreNosotros;
