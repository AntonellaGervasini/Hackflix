import Navbar from "../components/Navbar";
import stylesContact from "../components/contact.module.css";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contacto = ({}) => {
  const customId = "custom-id-yes";
  return (
    <div>
      <Navbar />
      <div className={`${stylesContact.paddingTop} container`}>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <form
              className=" rounded shadow"
              action="https://formspree.io/mknznvvg"
              method="POST"
            >
              <div className="modal-header mt-5">
                <h5 className="modal-title">Contacto</h5>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label for="name" className="form-label">
                    Nombre
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    value=""
                    className="form-control"
                    placeholder="Ingresar nombre completo..."
                  />
                </div>
                <div clclassNameass="mb-3">
                  <label for="email" className="form-label">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value=""
                    className="form-control"
                    placeholder="Ingresar Email..."
                  />
                </div>
                <div className="mb-3">
                  <label for="message" className="form-label">
                    Mensaje
                  </label>
                  <textarea
                    required
                    name="message"
                    rows="8"
                    cols="30"
                    className="form-control"
                    placeholder="Ingresar mensaje..."
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={() =>
                    toast(
                      "Esta funcionalidad quedó fuera del alcance del proyecto",

                      {
                        type: toast.TYPE.INFO,
                        toastId: customId,
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 2500,
                        pauseOnFocusLoss: false,
                        transition: Slide,
                        pauseOnHover: false,
                      }
                    )
                  }
                >
                  <ToastContainer
                    icon={false}
                    className={`${stylesContact.sizeToastify}`}
                  />
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
