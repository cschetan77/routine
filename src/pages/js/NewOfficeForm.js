import Card from "../../components/js/Card";
import classes from '../css/NewOfficeForm.module.css'
const NewOfficeForm = () => {
    return (
        <Card title="Add new office task">
            <div className={classes.form_container}>
                <p>Title</p>
                <input type="text"/>
            </div>
        </Card>
    );
};

export default NewOfficeForm;
