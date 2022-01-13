import { Accordion, AccordionSummary, Button, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"

import { updateForms } from "../../slice"

function AddNewForm() {
  const dispatch = useDispatch()
  const { forms } = useSelector((state) => state.main)

  const emptyForm = {
    firstname: "",
    lastname: "",
  }

  const updatedForms = [...forms]

  const addNewForm = () => {
    updatedForms.push([emptyForm])
    dispatch(updateForms(updatedForms))
  }
  
  return (
    <Accordion defaultExpanded expanded>
      <AccordionSummary>
        <Typography>
          <b>Add new form</b>
        </Typography>
        <Button onClick={addNewForm} variant="outlined" size="small">
          Add
        </Button>
      </AccordionSummary>
    </Accordion>
  )
}

export default AddNewForm