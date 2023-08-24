import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

function SignIn() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="container">
        <div className="brand-box">
          <h1>Movies</h1>
        </div>
        <div className="magic-form">
          <h3 className="h3">SİGN İN</h3>
          <Formik
            initialValues={{
              name: "",
              email: "",

              telNo: "",
              password: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("İsim boş bırakılamaz."),
              email: Yup.string()
                .required("E-mail boş bırakılamaz")
                .email("Geçerli bir e-posta adresi giriniz"),

              password: Yup.string().required("Şifre giriniz."),
              telNo: Yup.string()
                .matches(/^[0-9]*$/, "Sadece rakam giriniz.")
                .required("Numara giriniz."),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                // alert(JSON.stringify(values, null, 2));
                console.log("object", values);
                setSubmitting(false);
                localStorage.setItem("1", JSON.stringify(values));
                navigate("/");
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  name="name"
                  className="input"
                  placeholder="Sule..."
                ></input>
                {errors.telNo && touched.telNo && errors.telNo}
                <label htmlFor="email">E-mail:</label>
                <input
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  name="email"
                  className="input"
                  placeholder="Suleozturk@gmail.com"
                ></input>
                {errors.email && touched.email && errors.email}
                <label className="label" htmlFor="telNo">
                  TelNo:
                </label>
                <input
                  type="tel"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.telNo}
                  name="telNo"
                  className="input"
                  placeholder="05357867854"
                ></input>
                {errors.telNo && touched.telNo && errors.telNo}
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  name="password"
                  className="input"
                  placeholder="***********"
                ></input>
                {errors.password && touched.password && errors.password}
                <button
                  className="button"
                  type="submit"
                  onSubmit={handleSubmit}
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
