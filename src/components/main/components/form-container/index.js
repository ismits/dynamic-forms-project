import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"

import FormContainerButton from "./components/form-container-button"

function FormContainer({ index, children }) {
  return (
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>
          <b>{`Form #${index}`}</b>
        </Typography>
        <FormContainerButton />
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </Accordion>
  )
}

export default FormContainer