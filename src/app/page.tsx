"use client"

import { useState } from "react"

const Home = () => {

  const [showNewProdForm, setNewProdForm] = useState(false)
  const [name, setName] = useState<string>("")
  const [productType, setProdType] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [inclusion, setInclusion] = useState<string>("")

  const handleNewProd = async (): Promise<void> => {
    const productResponse = await( await fetch("http://localhost:5000/newProduct", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        type: productType,
        description: description,
        inclusion: inclusion
      })
    })).json()

    console.log(productResponse)
  }

  return (
  <main className="flex flex-col gap-2 justify-center items-center w-screen h-screen">
    <div className="border border-slate-400 p-2 h-max">
      <span className="text-3xl font-bold">Produtos</span>
      <div className="flex gap-2 justify-between items-end p-2 w-full">
        <button type="button" className="border border-slate-400 h-max" onClick={() => setNewProdForm(true)}>+ Novo</button>
        <div className="flex flex-col gap-1">
          <span>Pesquisar</span>
          <input type="text" name="pesquisar" className="border border-slate-600" />
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="flex gap-5">
            <th>Nome do Prod</th>
            <th>Tipo do Prod</th>
            <th>Descrição</th>
            <th>Inclusão</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>

          </tr>
        </tbody>
      </table>
    </div>

    {
      showNewProdForm && (
      <section className="flex flex-col gap-4 border border-slate-400 p-4 w-[500px]">
        <div className="flex flex-col gap-2">
          <span>Nome:</span>
          <input type="text" name="nome" className="border border-slate-400 w-1/2" onChange={e => setName(e.target.value)} />
        </div>
        <div className="flex flex-col gap-2">
          <span>Tipo do Produto:</span>
          <select className="w-max" defaultValue="critico" onChange={e => setProdType(e.target.value)}>
            <option value="critico">Crítico</option>
            <option value="semi-critico">Semi-crítico</option>
            <option value="nao-critico">Não-crítico</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <span>Descrição:</span>
          <input type="text" className="border border-slate-400" onChange={e => setDescription(e.target.value)} />
        </div>
        <div className="flex flex-col gap-2">
          <span>Inclusão:</span>
          <input type="date" className="w-max" onChange={e => setInclusion(e.target.value)} />
        </div>

        <div className="flex gap-4">
          <button type="button" onClick={handleNewProd}>Salvar</button>
          <button type="button" onClick={() => setNewProdForm(false)}>Cancelar</button>
        </div>
      </section>
      )
    }
  </main>
  )
}

export default Home