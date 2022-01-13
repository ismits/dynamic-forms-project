import { useSelector } from "react-redux"

import AddNewForm from "./components/add-new-form"
import Form from "./components/form"
import FormContainer from "./components/form-container"

function Main() {
  const { forms } = useSelector((state) => state.main)

  return(
    <div>
      {forms.map((form, index) => {
        return (
          <div key={index}>
            <FormContainer index={index}>
              <Form form={form}/>
            </FormContainer>
          </div>
        )
      })}
      <AddNewForm />
    </div>
  )
}

export default Main