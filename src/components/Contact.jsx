import Navbar from "../components/Navbar";

const Contacto = ({}) => {
  return (
    <div>
      <Navbar />
      <div className="container pt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <form
              className=" rounded shadow"
              action="https://formspree.io/mknznvvg"
              method="POST"
            >
              <div className="modal-header">
                <h5 className="modal-title">Contacto</h5>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label for="name" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    value=""
                    className="form-control"
                    placeholder="Ingresar nombre completo..."
                  />
                </div>
                <div clclassNameass="mb-3">
                  <label for="email" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value=""
                    className="form-control"
                    placeholder="Ingresar Email..."
                  />
                </div>
                <div class="mb-3">
                  <label for="message" className="form-label">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    rows="8"
                    cols="30"
                    className="form-control"
                    placeholder="Ingresar mensaje..."
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-success">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contacto;
