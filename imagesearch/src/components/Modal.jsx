import { useEffect } from "react";

export default function Modal({ img, onClose }) {
  useEffect(() => {
    const onEsc = e => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [onClose]);

  return (
    <div className="Overlay" onClick={onClose}>
      <div className="Modal" onClick={e => e.stopPropagation()}>
        <img src={img} alt="" />
      </div>
    </div>
  );
}
