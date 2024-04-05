import { useState } from "react";

type AlertCardProps = {
    children: React.ReactNode
}

function AlertCard({ children}: AlertCardProps) {

    const [showAlert, setShowAlert] = useState(true);

    const hideAlert = () => {
        setShowAlert(false);
    }

  return (
    <div className={`flex gap-4 items-baseline bg-alert-light px-6 py-4 rounded-lg m-3 ${!showAlert && "hidden" }`}>
        <i className="fa-solid fa-circle-exclamation text-alert-dark"/>
        <div className="w-full">
        <p className="text-alert-base w-11/12">{children}</p>
        </div>
        <button type="button" onClick={hideAlert}>
            <i className="fa-solid fa-xmark text-alert-dark"/>
        </button>
    </div>
  )
}

export default AlertCard