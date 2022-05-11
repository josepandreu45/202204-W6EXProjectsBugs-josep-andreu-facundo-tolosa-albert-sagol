import { useParams } from "react-router-dom";
import FormProject from "../../components/FormProject/FormProject";

const FormProjectPage = () => {
  const { idProject } = useParams();

  return (
    <>
      <h2>Form project page</h2>
      <FormProject id={+idProject} />
    </>
  );
};

export default FormProjectPage;
