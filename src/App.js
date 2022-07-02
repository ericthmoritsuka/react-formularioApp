import React, { useState } from "react";
import InputText from "./InputText";
import Select from "./Select";
import Radio from "./Radio";
import Checkbox from "./Checkbox";

const App = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [produto, setProduto] = useState("");
  const [cor, setCor] = useState("");
  const [capacidade, setCapacidade] = useState("");
  const [adicional, setAdicional] = useState([]);
  const [termos, setTermos] = useState([]);

  return (
    <>
      <form>
        {!produto && <p className="red">Escolha o produto</p>}
        <Select
          options={["Smartphone", "Tablet", "PC", "Notebook"]}
          value={produto}
          setValue={setProduto}
        />
        <br />
        {!cor && <p className="red">Escolha a cor do produto</p>}
        <Radio
          options={["Azul", "Vermelho", "Verde", "Rosa", "Branco", "Grafite"]}
          value={cor}
          setValue={setCor}
        />
        <br />
        {!capacidade && <p className="red">Escolha a capacidade do produto</p>}
        <Radio
          options={["4GB", "8GB", "16GB", "32GB", "64GB", "128GB"]}
          value={capacidade}
          setValue={setCapacidade}
        />
        <br />
        <p className="red">(OPCIONAL) Escolha os adicionais</p>
        <Checkbox
          options={[
            "Câmera mais potente",
            "Bateria de longa duração",
            "Memória extra",
            "Cartão de memória",
            "Capa",
            "Película",
          ]}
          value={adicional}
          setValue={setAdicional}
        />
        <br />
        {produto && cor && capacidade && (
          <div>
            <p className="red">
              Você selecionou: {produto} {cor} de {capacidade}.
            </p>
            <p className="red">
              Você selecionou os seguines adicionais: {adicional.join(" + ")}
            </p>
          </div>
        )}
        <br />
        <div className="dados">
        {(!nome || !email) && <p className="red">Seus dados para contato:</p>}
        <InputText id="nome" label="Nome" value={nome} setValue={setNome} />
        <InputText
          id="email"
          label="E-mail"
          value={email}
          setValue={setEmail}
          required //posso usar assim porque usei ...props no componente
        />
        </div>
        <br />
        <p className="red">Termos e Condições</p>
        <Checkbox
          options={["Li e aceito os termos e condições"]}
          value={termos}
          setValue={setTermos}
        />
        <br />
        <button>Enviar</button>
      </form>
    </>
  );
};

export default App;
