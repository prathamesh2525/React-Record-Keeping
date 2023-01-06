import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"

function App() {
  const [form, setForm] = useState({})
  const [data, setData] = useState([])

  return (
    <div className="App text-center flex flex-col items-center">
      <Header />
      {/* Form */}
      <div className="mt-16">
        <Stack spacing={2} direction="row">
          <TextField
            value={form.name}
            onChange={(e) => {
              setForm({ ...form, name: e.target.value })
            }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value })
            }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              setData([...data, form])
              setForm(form)
            }}
          >
            <AddIcon className="hover:animate-ping" />
          </Button>
        </Stack>
      </div>
      {/* Data */}
      <div className="mt-8 w-full flex flex-col items-center">
        {data.map((element, index) => {
          return (
            <div
              key={index}
              className="flex justify-between w-[60%] p-8 shadow-2xl"
            >
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <div className="hover:animate-pulse">
                <Button
                  onClick={(index) => {
                    let arr = data
                    arr.splice(index, 1)
                    setData([...arr])
                  }}
                  variant="contained"
                  color="error"
                >
                  <RemoveIcon />
                </Button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
