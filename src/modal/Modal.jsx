
import "./Modal.css";

export function Modal({ title, children, state, setState }) {

    const handleModalContainerClick = e => e.stopPropagation();
    return (
        <section className={`modal ${state && "is_open"}`} onClick={setState}>
            <div className="modal_container" onClick={handleModalContainerClick}>
                <div className="modal_header">
                    {title}
                    <button className="modal_close_button" onClick={setState}>X</button>
                </div>
                <div className="modal_content">
                    {children}
                </div>
            </div>

        </section>
    )
}