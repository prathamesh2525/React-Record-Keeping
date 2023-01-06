import React from "react"
import Button from "@mui/material/Button"


const Fields = ({ name, email, index }) => {
  return (
    <div className="flex justify-between w-[60%] p-8 shadow-2xl">
      <h4>{name}</h4>
      <h4>{email}</h4>
      <div className="hover:animate-pulse">
        <Button variant="contained" color="error">
          <RemoveIcon />
        </Button>
      </div>
    </div>
  )
}

export default Fields
