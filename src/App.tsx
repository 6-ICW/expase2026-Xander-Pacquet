import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import UserList from "./components/UserList";

export default function App() {
  const geregistreerdePersonen= ["Karel", "Els", "Piet"]
  const [laatsteGecontroleerd, setLaatsteGecontroleerd] = useState<string[]>([])

  const handleCheckUser = (name: string) => {
    // const exists = geregistreerdePersonen.includes(name);
    // const nieuweLijst = laatsteGecontroleerd.map((persoon)=>{
    //   if (persoon.name == exists)
    const bestaatReeds = laatsteGecontroleerd.some(user => user == name)
    if (!bestaatReeds) setLaatsteGecontroleerd([...laatsteGecontroleerd, name])
  }

  return (<>
    <div>
      <RegistrationForm onRegister={handleCheckUser}/>
      <hr />
      <UserList registeredUsers={geregistreerdePersonen} users={laatsteGecontroleerd}/>
    </div >
  </>);
}
