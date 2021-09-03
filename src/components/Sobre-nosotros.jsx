import stylesNosotros from "../components/Nosotros.module.css";
import Navbar from "../components/Navbar";

const SobreNosotros = ({}) => {
  return (
    <div>
      <Navbar />
      <div className="container pt-3">
        <div class="row ">
          <div class="col-lg-12">
            <h1 class={stylesNosotros.pageHeader}>Sobre Nosotros</h1>
          </div>
        </div>
        <div class="row g-0">
          <div class="col-md-6 sm-3">
            <img
              class="mb-3 me-0 pe-0"
              src="https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd.jpg"
              alt="movies"
            />
          </div>
          <div class="col-md-6 sm-3 ms-0 ps-0">
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
              <button
                type="button"
                name="button"
                class="btn btn-outline-secondary mb-4"
                data-bs-toggle="modal"
                data-bs-target="#contacto-modal"
              >
                <i class="far fa-envelope"></i> Contacto
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreNosotros;
