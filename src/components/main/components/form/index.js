import { TextField } from "@mui/material"
import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"

function Form({ form, index }) {
  const dispatch = useDispatch()
  const { forms } = useSelector((state) => state.main)

  const formik = useFormik({
    initialValues: {
      firstname: form.firstname || "",
      lastname: form.lastname || "",
    },
    onSubmit: values => {
      const updateForms = [...forms]
      updateForms[index] = {
        firstname: values.firstname,
        lastname: values.lastname
      }
      dispatch(updateForms(updateForms))
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id="firstname"
        label="Firstname"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstname || ""}
      />
      <TextField
        id="lastname"
        label="Lastname"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastname || ""}
      />
    </form>
  )
}

export default Form