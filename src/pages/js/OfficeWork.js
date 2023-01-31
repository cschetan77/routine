import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/js/Card";
import classes from "../css/OfficeWork.module.css";

const OfficeWork = () => {
    const navigateTo = useNavigate();

  const openAddNewFormPage = (event) => {
    event.preventDefault();
    navigateTo('/new-office-form');
  }
  return (
    <Fragment>
      <div className={classes.add_new_button}>
        <button type="button" onClick={openAddNewFormPage}>Add Activity</button>
      </div>

      <div className={classes.task_list_container}>
        <Card title="List of tasks">
          <Card title="05-08-1996">
            <p>This day was awesome</p>
          </Card>
        </Card>
      </div>
    </Fragment>
  );
};

export default OfficeWork;
